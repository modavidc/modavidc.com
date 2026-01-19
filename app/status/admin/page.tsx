"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check, X, AlertTriangle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// This would typically come from a database
const pendingRecommendations = {
  reading: [
    {
      id: "3",
      name: "Sam Wilson",
      contact: "sam@example.com",
      recommendation: "The Design of Everyday Things",
      createdAt: new Date(2023, 10, 16),
      status: "pending",
    },
  ],
  listening: [
    {
      id: "2",
      name: "Emma Thompson",
      contact: "emma@example.com",
      recommendation: "99% Invisible podcast",
      createdAt: new Date(2023, 10, 14),
      status: "pending",
    },
  ],
  building: [],
  learning: [
    {
      id: "2",
      name: "David Kim",
      contact: "david@example.com",
      recommendation: "AWS Certified Solutions Architect course",
      createdAt: new Date(2023, 10, 13),
      status: "pending",
    },
  ],
}

type RecommendationType = "reading" | "listening" | "building" | "learning"

export default function AdminPage() {
  const { toast } = useToast()
  const [recommendations, setRecommendations] = useState(pendingRecommendations)
  const [activeTab, setActiveTab] = useState<RecommendationType>("reading")
  const [isProcessing, setIsProcessing] = useState<string | null>(null)

  const handleApprove = async (id: string) => {
    setIsProcessing(id)
    try {
      // In a real implementation, this would call the server action
      // await approveRecommendation(id);

      // For demo purposes, we'll simulate a successful approval
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Update local state by removing the approved recommendation
      setRecommendations((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab].filter((rec) => rec.id !== id),
      }))

      toast({
        title: "Recommendation approved",
        description: "The recommendation has been published to your status page.",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "The recommendation could not be approved. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(null)
    }
  }

  const handleReject = async (id: string) => {
    setIsProcessing(id)
    try {
      // In a real implementation, this would call the server action
      // await deleteRecommendation(id);

      // For demo purposes, we'll simulate a successful rejection
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Update local state by removing the rejected recommendation
      setRecommendations((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab].filter((rec) => rec.id !== id),
      }))

      toast({
        title: "Recommendation rejected",
        description: "The recommendation has been removed.",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "The recommendation could not be rejected. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(null)
    }
  }

  const getTotalPending = () => {
    return Object.values(recommendations).reduce((total, recs) => total + recs.length, 0)
  }

  return (
    <div className="container max-w-5xl px-4 py-12 md:px-6 md:py-24">
      <div className="space-y-2 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recommendation Moderation</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Review and moderate recommendations before they appear on your status page
        </p>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-bold">Pending Recommendations</h2>
        <Badge variant="outline" className="text-sm">
          {getTotalPending()} pending
        </Badge>
      </div>

      <Tabs
        defaultValue="reading"
        onValueChange={(value) => setActiveTab(value as RecommendationType)}
        className="space-y-8"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="reading" className="flex items-center gap-2">
            Reading
            {recommendations.reading.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {recommendations.reading.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="listening" className="flex items-center gap-2">
            Listening
            {recommendations.listening.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {recommendations.listening.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="learning" className="flex items-center gap-2">
            Learning
            {recommendations.learning.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {recommendations.learning.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="building" className="flex items-center gap-2">
            s
            {recommendations.building.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {recommendations.building.length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        {(["reading", "listening", "building", "learning"] as const).map((type) => (
          <TabsContent key={type} value={type} className="space-y-4">
            {recommendations[type].length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-center text-muted-foreground">No pending recommendations to review</p>
                </CardContent>
              </Card>
            ) : (
              recommendations[type].map((rec) => (
                <Card key={rec.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{rec.recommendation}</CardTitle>
                        <CardDescription>
                          Recommended by {rec.name} {rec.contact && `(${rec.contact})`}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500"
                      >
                        Pending
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      Submitted on{" "}
                      {rec.createdAt.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleReject(rec.id)}
                      disabled={isProcessing === rec.id}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Reject
                    </Button>
                    <Button size="sm" onClick={() => handleApprove(rec.id)} disabled={isProcessing === rec.id}>
                      {isProcessing === rec.id ? (
                        <span className="flex items-center gap-2">
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Approve
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-12 rounded-lg border bg-muted/50 p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-yellow-100 p-2 dark:bg-yellow-900/30">
            <AlertTriangle className="h-5 w-5 text-yellow-800 dark:text-yellow-500" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Moderation Best Practices</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Review all recommendations for inappropriate content before approving</li>
              <li>• Reject spam, offensive content, or irrelevant recommendations</li>
              <li>• Consider setting up email notifications for new recommendations</li>
              <li>• Regularly check this admin panel to keep your status page up to date</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

