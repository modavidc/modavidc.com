import { BlogCategory } from './blog'

export const CATEGORIES: { key: BlogCategory; label: string; description: string }[] = [
  {
    key: "technical",
    label: "Technical",
    description: "Code patterns, architecture, implementation details"
  },
  {
    key: "product",
    label: "Product & SaaS",
    description: "Building products, freemium models, validation"
  },
  {
    key: "learnings",
    label: "Learnings",
    description: "Lessons from real projects, what worked and why"
  },
  {
    key: "opinions",
    label: "Opinions",
    description: "Hot takes on paradigms, frameworks, and approaches"
  },
]
