# Blog Setup - modavidc.com

## Overview

A blog system launched May 12, 2026, respecting the branding system defined in `/docs/design/branding/branding.html`.

## Structure

### Routes
- `/blog` - Blog listing page with category filtering
- `/blog/[slug]` - Individual article page

### Content
- Markdown files in `/docs/blog/` with front matter (YAML)
- Automatic parsing of metadata: title, excerpt, date, category, reading time

### Categories
- **Technical**: Code patterns, architecture, implementation
- **Product & SaaS**: Building products, freemium models, validation
- **Learnings**: Lessons from real projects, what worked and why
- **Opinions**: Hot takes on paradigms, frameworks, and approaches

## Adding Articles

1. Create markdown file in `/docs/blog/` (e.g., `09-your-article.md`)
2. Include front matter at top:
```yaml
---
title: "Article Title"
excerpt: "One-line summary for listing"
date: "2026-05-12"
category: "technical"
---
```

3. Write content in Markdown (h2-h3 headers, bold, italic, code blocks, tables supported)

## Design System

The blog respects all tokens from `/docs/design/branding/branding.html`:

### Colors
- `var(--bg)` - Page background
- `var(--bg-2)` - Card/surface background
- `var(--border)` - Borders
- `var(--text)` - Primary text
- `var(--text-2)` - Secondary text
- `var(--text-3)` - Tertiary/muted text
- `var(--green)` - Brand green (CTAs, accents)

### Typography
- `var(--ff-display)` - Space Grotesk (headlines)
- `var(--ff-body)` - DM Sans (body text)
- `var(--ff-mono)` - DM Mono (labels, code)

## Features Implemented

✓ Blog listing with category filtering  
✓ Article detail pages with reading time  
✓ Markdown rendering (headings, code, tables, lists)  
✓ Navigation links ("Pensamiento" in navbar)  
✓ Responsive design  
✓ Brand-compliant styling  

## Future Enhancements

- [ ] Newsletter signup (optional)
- [ ] Search functionality
- [ ] Author bios
- [ ] Related articles
- [ ] Comment system (if needed)
- [ ] Analytics tracking

## Sample Articles

8 test articles provided:

1. **01-hl7-v2-integration-patterns.md** - HL7 government API integration (Technical)
2. **02-whatsapp-parser-robustness.md** - Multi-format parsing (Technical)
3. **03-riverpod-async-state-management.md** - Modern Flutter state (Technical)
4. **04-freemium-model-validation.md** - SaaS pricing strategy (Product)
5. **05-parser-investment-pays-off.md** - When to invest in parsing (Learnings)
6. **06-offline-first-paradigm.md** - Offline-first design philosophy (Opinions)
7. **07-spec-driven-development.md** - Writing specs before code (Learnings)
8. **08-hl7-vs-fhir.md** - Standards comparison for healthcare (Opinions)

Delete these and add your own articles following the same format.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Markdown parsing**: Custom (no external deps for rendering)
- **Front matter**: gray-matter
- **Styling**: CSS-in-JS (respects branding tokens)

## Notes

- Articles are automatically sorted by date (newest first)
- Reading time calculated as ~200 words per minute
- No database required (file-based, works with git)
- Category filtering via client state
- Full static generation possible (`npm run build`)
