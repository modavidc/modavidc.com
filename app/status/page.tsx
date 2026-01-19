"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Book, Headphones, Code, GraduationCap, Send } from "lucide-react"
import { StatusItem } from "@/components/status-item"
import { RecommendationList } from "@/components/recommendation-list"

// Current status data - this would typically come from a database or CMS
const currentStatus = {
  reading: {
    title: "Atomic Habits",
    author: "James Clear",
    description: "An easy and proven way to build good habits and break bad ones.",
    coverUrl: "/placeholder.svg?height=200&width=150",
    link: "https://jamesclear.com/atomic-habits",
  },
  listening: {
    title: "The Tim Ferriss Show",
    creator: "Tim Ferriss",
    description: "Interviews with world-class performers to extract tactics and routines you can use.",
    coverUrl: "/placeholder.svg?height=200&width=150",
    link: "https://tim.blog/podcast/",
  },
  building: {
    title: "Personal Knowledge Management System",
    description: "Building a second brain to organize my notes, ideas, and projects using Obsidian and custom scripts.",
    progress: 65,
    link: "https://github.com/modavidc",
  },
  learning: [
    {
      title: "Advanced TypeScript Patterns",
      provider: "Frontend Masters",
      progress: 80,
      link: "https://frontendmasters.com",
    },
    {
      title: "System Design for Developers",
      provider: "Educative.io",
      progress: 45,
      link: "https://educative.io",
    },
  ],
}

// Sample recommendations - these would typically come from a database
const sampleRecommendations = {
  reading: [
    {
      id: "1",
      name: "Alex Johnson",
      contact: "alex@example.com",
      recommendation: "The Pragmatic Programmer",
      createdAt: new Date(2023, 10, 15),
    },
    {
      id: "2",
      name: "Maria Garcia",
      contact: "maria@example.com",
      recommendation: "Deep Work by Cal Newport",
      createdAt: new Date(2023, 10, 10),
    },
  ],
  listening: [
    {
      id: "1",
      name: "Chris Lee",
      contact: "chris@example.com",
      recommendation: "Darknet Diaries podcast",
      createdAt: new Date(2023, 10, 12),
    },
  ],
  building: [
    {
      id: "1",
      name: "Taylor Swift",
      contact: "taylor@example.com",
      recommendation: "Try using Logseq for your PKM system",
      createdAt: new Date(2023, 10, 8),
    },
  ],
  learning: [
    {
      id: "1",
      name: "Jordan Peterson",
      contact: "jordan@example.com",
      recommendation: "CS50's Web Programming with Python and JavaScript",
      createdAt: new Date(2023, 10, 5),
    },
  ],
}

type RecommendationType = "reading" | "listening" | "building" | "learning"

export default function StatusPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState<RecommendationType>("reading")
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    recommendation: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recommendations, setRecommendations] = useState(sampleRecommendations)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real implementation, this would call the server action
      // const result = await submitRecommendation(activeTab, formData);

      // For demo purposes, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Update local state with the new recommendation
      const newRecommendation = {
        id: Date.now().toString(),
        name: formData.name,
        contact: formData.contact,
        recommendation: formData.recommendation,
        createdAt: new Date(),
      }

      setRecommendations((prev) => ({
        ...prev,
        [activeTab]: [...prev[activeTab], newRecommendation],
      }))

      // Reset form
      setFormData({ name: "", contact: "", recommendation: "" })

      // Show success toast
      toast({
        title: "Recommendation submitted!",
        description: "Thank you for your suggestion.",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your recommendation could not be submitted. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container max-w-5xl px-4 py-12 md:px-6 md:py-24">
      <div className="space-y-2 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Current Status</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          What I'm currently reading, listening to, learning and building.
        </p>
      </div>

      <Tabs
        defaultValue="reading"
        onValueChange={(value) => setActiveTab(value as RecommendationType)}
        className="space-y-8"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="reading" className="flex items-center gap-2">
            <Book className="h-4 w-4" />
            <span className="hidden sm:inline">Reading</span>
          </TabsTrigger>
          <TabsTrigger value="listening" className="flex items-center gap-2">
            <Headphones className="h-4 w-4" />
            <span className="hidden sm:inline">Listening</span>
          </TabsTrigger>
          <TabsTrigger value="learning" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            <span className="hidden sm:inline">Learning</span>
          </TabsTrigger>
          <TabsTrigger value="building" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span className="hidden sm:inline">Building</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="reading" className="space-y-8">
          <StatusItem
            icon={<Book className="h-6 w-6" />}
            title={currentStatus.reading.title}
            subtitle={`by ${currentStatus.reading.author}`}
            description={currentStatus.reading.description}
            imageUrl={currentStatus.reading.coverUrl}
            link={currentStatus.reading.link}
          />

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recommend a Book</CardTitle>
                <CardDescription>Suggest a book you think I should read next</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reading-name">Your Name</Label>
                    <Input
                      id="reading-name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reading-contact">Email or Social (optional)</Label>
                    <Input
                      id="reading-contact"
                      name="contact"
                      placeholder="email@example.com"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reading-recommendation">Book Recommendation</Label>
                    <Textarea
                      id="reading-recommendation"
                      name="recommendation"
                      placeholder="Title and why you recommend it"
                      value={formData.recommendation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
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
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Submit Recommendation
                      </span>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>

            <RecommendationList title="Book Recommendations" recommendations={recommendations.reading} />
          </div>
        </TabsContent>

        <TabsContent value="listening" className="space-y-8">
          <StatusItem
            icon={<Headphones className="h-6 w-6" />}
            title={currentStatus.listening.title}
            subtitle={`by ${currentStatus.listening.creator}`}
            description={currentStatus.listening.description}
            imageUrl={currentStatus.listening.coverUrl}
            link={currentStatus.listening.link}
          />

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recommend Something to Listen To</CardTitle>
                <CardDescription>Suggest a podcast, music, or audiobook you think I'd enjoy</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="listening-name">Your Name</Label>
                    <Input
                      id="listening-name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="listening-contact">Email or Social (optional)</Label>
                    <Input
                      id="listening-contact"
                      name="contact"
                      placeholder="email@example.com"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="listening-recommendation">Listening Recommendation</Label>
                    <Textarea
                      id="listening-recommendation"
                      name="recommendation"
                      placeholder="Title and why you recommend it"
                      value={formData.recommendation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
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
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Submit Recommendation
                      </span>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>

            <RecommendationList title="Listening Recommendations" recommendations={recommendations.listening} />
          </div>
        </TabsContent>

        <TabsContent value="building" className="space-y-8">
          <StatusItem
            icon={<Code className="h-6 w-6" />}
            title={currentStatus.building.title}
            description={currentStatus.building.description}
            progress={currentStatus.building.progress}
            link={currentStatus.building.link}
          />

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Suggest Project Ideas or Resources</CardTitle>
                <CardDescription>Share ideas or resources related to my current projects</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="building-name">Your Name</Label>
                    <Input
                      id="building-name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="building-contact">Email or Social (optional)</Label>
                    <Input
                      id="building-contact"
                      name="contact"
                      placeholder="email@example.com"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="building-recommendation">Idea or Resource</Label>
                    <Textarea
                      id="building-recommendation"
                      name="recommendation"
                      placeholder="Share your idea or useful resource"
                      value={formData.recommendation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
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
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Submit Suggestion
                      </span>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>

            <RecommendationList title="Project Suggestions" recommendations={recommendations.building} />
          </div>
        </TabsContent>

        <TabsContent value="learning" className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2">
            {currentStatus.learning.map((course, index) => (
              <StatusItem
                key={index}
                icon={<GraduationCap className="h-6 w-6" />}
                title={course.title}
                subtitle={`by ${course.provider}`}
                progress={course.progress}
                link={course.link}
              />
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recommend a Course</CardTitle>
                <CardDescription>Suggest courses or educational resources you think I'd find valuable</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="learning-name">Your Name</Label>
                    <Input
                      id="learning-name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="learning-contact">Email or Social (optional)</Label>
                    <Input
                      id="learning-contact"
                      name="contact"
                      placeholder="email@example.com"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="learning-recommendation">Course Recommendation</Label>
                    <Textarea
                      id="learning-recommendation"
                      name="recommendation"
                      placeholder="Course name and why you recommend it"
                      value={formData.recommendation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
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
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Submit Recommendation
                      </span>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>

            <RecommendationList title="Course Recommendations" recommendations={recommendations.learning} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

