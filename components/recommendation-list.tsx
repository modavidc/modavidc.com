import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThumbsUp } from "lucide-react"

interface Recommendation {
  id: string
  name: string
  contact?: string
  recommendation: string
  createdAt: Date
}

interface RecommendationListProps {
  title: string
  recommendations: Recommendation[]
}

export function RecommendationList({ title, recommendations }: RecommendationListProps) {
  // Sort recommendations by date (newest first)
  const sortedRecommendations = [...recommendations].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {sortedRecommendations.length === 0 ? (
          <p className="text-center text-muted-foreground py-6">
            No recommendations yet. Be the first to suggest something!
          </p>
        ) : (
          <div className="space-y-4">
            {sortedRecommendations.map((rec) => (
              <div key={rec.id} className="rounded-lg border p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <ThumbsUp className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">{rec.recommendation}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Recommended by {rec.name}</span>
                      <span>•</span>
                      <span>{formatDate(rec.createdAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function formatDate(date: Date): string {
  // Format date as "Month Day, Year" (e.g., "November 15, 2023")
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

