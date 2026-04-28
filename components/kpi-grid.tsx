import Link from "next/link"
import { Badge } from "@/components/ui/badge"

type Kpi = {
  value: string
  label: string
  detail?: string
  href?: string
}

export function KpiGrid({ kpis }: { kpis: Kpi[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const content = (
          <div className="h-full rounded-xl border bg-background/70 p-4 backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div className="text-3xl font-bold text-primary">{kpi.value}</div>
              <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                KPI
              </Badge>
            </div>
            <div className="mt-2 text-sm font-medium">{kpi.label}</div>
            {kpi.detail ? <div className="mt-1 text-xs text-muted-foreground">{kpi.detail}</div> : null}
          </div>
        )

        return (
          <div key={`${kpi.value}-${kpi.label}`}>
            {kpi.href ? (
              <Link href={kpi.href} className="block transition-transform hover:-translate-y-0.5">
                {content}
              </Link>
            ) : (
              content
            )}
          </div>
        )
      })}
    </div>
  )
}

