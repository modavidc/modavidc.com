---
title: "Riverpod vs Provider: Why AsyncValue Changes Everything"
excerpt: "Modern state management in Flutter with Riverpod 2.4.9 — how AsyncValue eliminates boilerplate."
date: "2026-05-06"
category: "technical"
---

## The Problem With Provider

Old Provider code for async operations:

```dart
class AnalysisProvider extends StateNotifier<AsyncValue<ChatAnalysis?>> {
  AnalysisProvider() : super(const AsyncValue.loading());
  
  Future<void> loadAnalysis(String id) async {
    state = const AsyncValue.loading();
    try {
      final data = await _service.fetchAnalysis(id);
      state = AsyncValue.data(data);
    } catch (e) {
      state = AsyncValue.error(e, StackTrace.current);
    }
  }
}
```

Then in the UI:

```dart
class AnalysisScreen extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(analysisProvider);
    
    return state.when(
      data: (analysis) => AnalysisView(analysis: analysis),
      loading: () => const LoadingSpinner(),
      error: (err, stack) => ErrorWidget(error: err),
    );
  }
}
```

This works, but **every async operation repeats this pattern**. By the 10th provider, you're copy-pasting.

## Riverpod 2.4.9 Solution

Riverpod 2.x removes the boilerplate. AsyncValue is first-class:

```dart
final analysisProvider = FutureProvider<ChatAnalysis?>((ref) async {
  final id = ref.watch(selectedGroupProvider);
  return ref.read(analysisServiceProvider).fetch(id);
});
```

That's it. Riverpod handles loading/error/data states automatically.

In UI:

```dart
class AnalysisScreen extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return ref.watch(analysisProvider).when(
      data: (analysis) => AnalysisView(analysis: analysis),
      loading: () => const LoadingSpinner(),
      error: (err, _) => ErrorWidget(error: err),
    );
  }
}
```

## Key Differences

| Feature | Provider | Riverpod |
|---------|----------|----------|
| Async handling | Manual (StateNotifier) | Automatic (FutureProvider) |
| Dependency tracking | `watch` | Reactive graph |
| Invalidation | Manual | Automatic on dependency change |
| Boilerplate | High | Low |
| Testing | Harder | Built-in ProviderContainer |

## Dependency Management

Riverpod's killer feature: **reactive dependencies**.

```dart
final groupProvider = StateProvider<String>((ref) => '');

final analysisProvider = FutureProvider<ChatAnalysis?>((ref) async {
  final groupId = ref.watch(groupProvider);  // Auto-tracks!
  
  // If groupId changes, analysis auto-refetches
  return ref.read(analysisServiceProvider).fetch(groupId);
});
```

With Provider, you'd manually call `notifyListeners()` from the group provider.

## When to Use StateNotifierProvider vs FutureProvider

**Use StateNotifierProvider when:**
- You need to mutate state (setAnalysis, deleteGroup, updateNote)
- You control the loading states (custom retry logic)

**Use FutureProvider when:**
- You're just fetching data
- Riverpod should handle loading/error

## Production Pattern

Separate concerns:

```dart
// Fetching
final analysisProvider = FutureProvider<ChatAnalysis?>((ref) async {
  return ref.read(apiProvider).getAnalysis(ref.watch(groupIdProvider));
});

// Mutations
final analysisNotifier = StateNotifierProvider<AnalysisNotifier, ChatAnalysis?>((ref) {
  return AnalysisNotifier(ref.read(apiProvider));
});

// UI watches both
class AnalysisScreen extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final analysis = ref.watch(analysisProvider);
    final notifier = ref.read(analysisNotifier.notifier);
    
    return analysis.when(
      data: (a) => AnalysisView(
        analysis: a,
        onAddNote: (note) => notifier.addNote(note),
      ),
      loading: () => const Spinner(),
      error: (e, _) => ErrorWidget(error: e),
    );
  }
}
```

## Conclusion

Riverpod 2.x is the modern standard in Flutter state management. If you're using Provider + StateNotifier for async work, migrate. The difference in code clarity is worth the effort.
