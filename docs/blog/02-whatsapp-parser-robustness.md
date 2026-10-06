---
title: "Building a Robust WhatsApp Parser: Multi-Format Export Handling"
excerpt: "Why parsing exported WhatsApp chats is harder than it seems, and how to handle iOS/Android differences."
date: "2026-05-08"
category: "technical"
---

## The Problem

WhatsApp exports differently on iOS and Android. Date formats differ by region. System messages (photos, calls, member adds) must be filtered. Parse the same export file with a naive regex and you'll get:
- Messages attributed to the wrong person
- Timestamps off by hours (timezone confusion)
- System events counted as real messages

## Format Detection

The first challenge: determine if an export is iOS or Android format.

**Android export format:**
```
26/04/2024, 14:32 - Alice: Hello
26/04/2024, 14:33 - Bob: Hi there
```

**iOS export format:**
```
[26/04/2024 14:32:12] Alice: Hello
[26/04/2024 14:33:45] Bob: Hi there
```

## Multi-Region Date Handling

A user in the US exports as `MM/DD/YYYY`. Same user in Spain exports as `DD/MM/YYYY`. Your parser must auto-detect:

```dart
bool _looksLikeUsDateFormat(String firstLine) {
  // If we see dates like 13/01/2024 in the first 100 lines,
  // and the 13 appears in position where MM normally goes,
  // it's probably DD/MM/YYYY
  
  final dates = _extractAllDates(firstLine);
  final maxMonth = dates.map(d => d.month).reduce((a, b) => a > b ? a : b);
  
  // If we found a month > 12, it's definitely DD/MM
  return maxMonth <= 12; // Could be either, check other heuristics
}
```

## System Message Filtering

WhatsApp injects its own messages:

```
26/04/2024, 14:30 - Alice added you
26/04/2024, 14:31 - <Media omitted>
26/04/2024, 14:32 - You deleted this message
```

Filter them:

```dart
static final _systemMessagePatterns = [
  RegExp(r'added you'),
  RegExp(r'removed you'),
  RegExp(r'<Media omitted>'),
  RegExp(r'You deleted this message'),
  RegExp(r'changed this group\'s icon'),
  RegExp(r'changed the subject'),
  RegExp(r'participó en llamada'),  // "participated in call"
];

bool isSystemMessage(String text) => 
  _systemMessagePatterns.any((p) => p.hasMatch(text));
```

## The Parser Implementation

A minimal but robust parser (408 lines in production):

```dart
class WhatsAppParser {
  static ChatAnalysis parse(String rawExport) {
    final lines = rawExport.split('\n');
    
    // Step 1: Detect format
    final isUsFormat = _looksLikeUsDateFormat(lines.first);
    
    // Step 2: Parse each line
    final messages = <Message>[];
    for (var line in lines) {
      if (line.isEmpty) continue;
      
      final message = isUsFormat
        ? _parseUsFormat(line)
        : _parseEsFormat(line);
      
      if (message != null && !isSystemMessage(message.text)) {
        messages.add(message);
      }
    }
    
    // Step 3: Aggregate
    return _aggregateToAnalysis(messages);
  }
}
```

## Production Lessons

1. **Test with real exports** - Download actual WhatsApp exports from users, don't generate synthetic data
2. **Timezone is a lie** - WhatsApp stores local time in exports, no timezone info. Ask the user for their timezone
3. **Empty groups exist** - Handle edge case: group with no real messages
4. **Emoji/Unicode is fine** - Don't overthink encoding, Dart handles UTF-8 naturally

## Why This Matters

A parser that fails silently (accepting system messages as real) produces garbage analysis. Better to be strict: if parsing fails, reject the entire file and ask the user to re-export.

**Investment payoff**: 400 LOC of parser code prevents 2,000+ LOC of downstream workarounds and bug fixes.
