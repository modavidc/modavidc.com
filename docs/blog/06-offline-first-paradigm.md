---
title: "Offline-First is Non-Negotiable for Mobile Apps"
excerpt: "A hot take: designing for connectivity loss first, online as the optimization. Why this mindset changes everything."
date: "2026-04-30"
category: "opinions"
---

## The Conventional Approach

Most mobile app developers design for online first:

1. User opens app
2. App fetches data from server
3. Data displays
4. User edits locally
5. Changes sync back to server

**Problem:** Steps 2-3 are blocking. No connectivity = frozen UI.

## The Offline-First Mindset

Invert the dependency:

1. App starts with **local data** (from Hive, SQLite, etc.)
2. UI renders **immediately** (no server call)
3. Background sync **pushes local changes** (when connectivity returns)
4. **Background fetch** pulls server changes (when online)
5. Conflicts resolved **client-side** (deterministic rules)

For the user: the app always works.

## Why This Matters in Healthcare

I implemented both approaches:

**Online-first** (VIPApp early version):
- Doctor opens patient EMR
- Network drops (happens in rural clinics)
- App is frozen
- Doctor can't look up patient allergies
- **Disaster**

**Offline-first** (VIPApp later):
- Doctor has cached patient data (from last visit)
- Doctor updates prescriptions locally
- Network drops
- **Works fine**. Changes sync when network returns

The difference between "useful" and "useless" is whether you designed for offline.

## Technical Implementation

**SQLite + bidirectional sync:**

```dart
class PatientRepository {
  Future<void> getPatient(String id) async {
    // Step 1: Return local copy immediately
    final local = await _db.getPatient(id);
    if (local != null) return local;  // Instant
    
    // Step 2: Fetch from server (background)
    final remote = await _api.getPatient(id);
    
    // Step 3: Save locally
    await _db.insertPatient(remote);
    
    // Step 4: Return (now with fresh data)
    return remote;
  }
}
```

For mutations:

```dart
class PatientService {
  Future<void> updatePatient(Patient p) async {
    // Step 1: Update locally (instant)
    await _db.updatePatient(p);
    
    // Step 2: Notify UI (instant)
    analysisNotifier.refresh();
    
    // Step 3: Sync to server (background, with retry)
    _syncQueue.enqueue(() => _api.updatePatient(p));
  }
}
```

## The Conflict Problem

What if the user edits locally, server changes remotely, connectivity returns?

**Deterministic rules:**
- Server version is always newest (server is source of truth)
- Client version is "backup" (keep it, but overwrite with server)
- User gets notified: "Your changes were synced, but the server had a newer version"

**Never silently:**
- Overwrite server data with stale client data
- Lose user edits
- Show conflicting data

## Design for Offline as the Default

Check connectivity **only when necessary:**
- Syncing data? Need connectivity check.
- Displaying cached data? No check needed.
- Editing locally? No check needed.

```dart
if (await _connectivity.hasInternet) {
  // Sync to server
} else {
  // Queue for later
  _syncQueue.enqueue(mutation);
}
```

Don't litter your code with `if (isOnline)` checks. Design the architecture so offline is the default path.

## The Hard Part: Testing

Offline-first code is hard to test:
- You need to test the offline path (happy path)
- The sync path (connectivity restored)
- The conflict path (both client and server changed)
- The queue path (mutations while offline, then network returns)

Use a fake local database + fake API in tests:

```dart
test('Local update, network drops, sync queued', () async {
  connectivity.setOffline();
  
  await service.updatePatient(updatedPatient);
  
  expect(await db.getPatient(id), updatedPatient);  // Local OK
  expect(await api.callCount, 0);  // API not called
  expect(syncQueue.length, 1);  // Queued
});
```

## Adoption Curve

- **2019-2020:** Offline-first was niche (Firebase Realtime was hyped)
- **2021-2023:** Growing adoption (Notion, Figma, Linear all went offline-first)
- **2024+:** Baseline expectation for any mobile/desktop app

If your app can't work offline, **your UX is already broken**. You just don't know it yet.

## Conclusion

Offline-first isn't a feature, it's a **philosophy**. Design for the user in an elevator, on a train, in a clinic with patchy wifi. That's your baseline. Connectivity is the optimization.
