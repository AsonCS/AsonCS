"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ExternalLink, Github, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  stargazers_count: number
  language: string
}

export default function ProjectsPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGitHubRepos() {
      try {
        // Replace with your actual GitHub username
        const username = "andersoncosta-dev"
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub repositories")
        }

        const data = await response.json()
        setRepos(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching GitHub repos:", error)
        setLoading(false)
      }
    }

    fetchGitHubRepos()
  }, [])

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My GitHub Projects</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore my latest projects and contributions on GitHub
          </p>
        </div>
      </div>

      <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          // Loading skeletons
          Array(6)
            .fill(0)
            .map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Skeleton className="h-9 w-20" />
                  <Skeleton className="h-9 w-20" />
                </CardFooter>
              </Card>
            ))
        ) : repos.length > 0 ? (
          // Actual repos
          repos.map((repo) => (
            <Card key={repo.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>{repo.name}</CardTitle>
                {repo.language && (
                  <CardDescription>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                      {repo.language}
                    </span>
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                  {repo.description || "No description available"}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Star className="mr-1 h-4 w-4" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex gap-2">
                  <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  {repo.homepage && (
                    <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <p className="text-lg text-gray-500 dark:text-gray-400">No repositories found</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Check back later or visit my GitHub profile directly
            </p>
            <Link
              href="https://github.com/andersoncosta-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button>
                <Github className="mr-2 h-4 w-4" />
                Visit GitHub Profile
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
