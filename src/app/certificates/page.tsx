import Image from "next/image"
import Link from "next/link"
import { Calendar, ExternalLink } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Sample certificates data - replace with your actual certificates
const certificates = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2023-05-15",
    description: "Comprehensive web development course covering HTML, CSS, JavaScript, React, and Node.js",
    image: "/placeholder.svg?height=200&width=350",
    url: "#",
  },
  {
    id: 2,
    title: "React Advanced Concepts",
    issuer: "Frontend Masters",
    date: "2023-02-10",
    description: "Advanced React patterns, hooks, context API, and performance optimization",
    image: "/placeholder.svg?height=200&width=350",
    url: "#",
  },
  {
    id: 3,
    title: "TypeScript Fundamentals",
    issuer: "Pluralsight",
    date: "2022-11-20",
    description: "TypeScript types, interfaces, generics, and integration with React",
    image: "/placeholder.svg?height=200&width=350",
    url: "#",
  },
  {
    id: 4,
    title: "Next.js Mastery",
    issuer: "Vercel",
    date: "2023-08-05",
    description: "Building scalable applications with Next.js, including SSR, SSG, and API routes",
    image: "/placeholder.svg?height=200&width=350",
    url: "#",
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    issuer: "Coursera",
    date: "2022-09-12",
    description: "User interface design, user experience principles, and design systems",
    image: "/placeholder.svg?height=200&width=350",
    url: "#",
  },
  {
    id: 6,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023-01-30",
    description: "Cloud concepts, AWS services, security, architecture, and pricing",
    image: "/placeholder.svg?height=200&width=350",
    url: "#",
  },
]

export default function CertificatesPage() {
  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Certificates</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Professional certifications and courses I've completed
          </p>
        </div>
      </div>

      <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <Card key={certificate.id} className="overflow-hidden">
            <div className="aspect-video relative w-full overflow-hidden">
              <Image
                src={certificate.image || "/placeholder.svg"}
                alt={certificate.title}
                fill
                className="object-cover transition-all hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle>{certificate.title}</CardTitle>
              <CardDescription>{certificate.issuer}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">{certificate.description}</p>
              <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{formatDate(certificate.date)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={certificate.url} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  <ExternalLink className="mr-1 h-4 w-4" />
                  <span>View Certificate</span>
                </div>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
