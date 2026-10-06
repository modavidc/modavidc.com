---
title: "Spec-Driven Development: How Written Specs Reduced Pivots by 75%"
excerpt: "Before shipping, write a spec. Costs 2 days, saves 2 weeks of rework. The math of building with clarity."
date: "2026-04-28"
category: "learnings"
---

## The Problem

Feature development without specs feels fast. Day 1: sketch UI, Day 2: code, Day 3: ship.

But without written specs, misalignment emerges mid-development:
- Designer imagined "delete button with confirmation"
- Dev built "delete button, confirmed via API response"
- Product sees button delete without feedback
- 3 days of rework

## The Solution: 1-Page Specs

Before *any* code, write a spec. Not a PRD, not a design doc. A **1-2 page spec** that answers:

1. **What problem does this solve?**
   - User pain: "I can't see who's been inactive in my group"
   - Current state: No visibility into member activity trends
   
2. **What's the minimal solution?**
   - Show ranking of members by message count
   - Highlight 3 risk categories: Active / Inactive / Dormant
   - No animations, no export, no IA

3. **What's not in scope?**
   - Cross-group comparison (separate feature)
   - Historical tracking (Phase 2)
   - Email notifications

4. **Acceptance criteria**
   - User can sort by message count (ascending/descending)
   - User can filter by activity category
   - Inactive = no messages in last 30 days
   - Load time < 2s for groups <500 members

5. **Edge cases**
   - Group with 0 real messages (system messages only) → show empty state
   - Member name contains emoji → handle gracefully
   - Timezone differences (user vs group export) → document assumption

## Spec-Driven Process

For Grupero v0.2, we ran 6-spec approval cycle:

1. **Spec draft** (4 hours) - PM + Tech lead write 1-pager
2. **Stakeholder review** (async, 24h) - Investor (growth), Design (UX)
3. **Refinement** (2 hours) - Address questions, clarify edge cases
4. **Approval** - Sign-off from all stakeholders
5. **Dev starts** - With zero ambiguity
6. **Shipped** - Zero surprises

**Result:** 6 features shipped in 8 weeks, <5% rework rate.

## Why Specs Work

| Approach | Time to Build | Rework | Total |
|----------|---------------|--------|-------|
| No spec | 5 days | 3 days | 8 days |
| Verbal agreement | 5 days | 1.5 days | 6.5 days |
| **1-page spec** | **5.5 days** | **0.5 days** | **6 days** |
| Waterfall PRD | 5 days (after PRD written) | 0 days | 5 days (+PRD time) |

The 1-page spec sweet spot:
- More structured than verbal (prevents misalignment)
- Faster to write than PRD (doesn't block development)
- Reviewable in <20 min (quick stakeholder feedback)

## Spec Template (Copy-Paste)

```
# Feature: [Name]

## Problem
[User pain, current state, why we're solving this now]

## Solution (Minimal)
[What we're building, nothing more]

## Not in Scope
[Explicitly call out later phases]

## Acceptance Criteria
- [ ] ...
- [ ] ...

## Edge Cases
- Empty state: ...
- Error state: ...
- Performance: ...

## Stakeholder Sign-Off
- [ ] Growth
- [ ] Design
- [ ] Tech lead
```

## Common Mistakes

**❌ Spec too long** - If it's >2 pages, you've designed instead of specced.

**❌ Spec too vague** - "Improve member ranking" ≠ spec. "Sort by message count, filter by activity" = spec.

**❌ No edge cases** - Edge cases drive 40% of dev time. Write them down upfront.

**❌ Building without spec approval** - Tempting to start coding while stakeholders discuss. Don't. Wait for sign-off.

## Conclusion

Specs are cheap insurance. 4 hours to write, 20 mins per stakeholder to review, saves weeks of rework.

**Rule:** If you can't write a 1-page spec, you don't understand the problem well enough to build it.

Ship specs, not hopes.
