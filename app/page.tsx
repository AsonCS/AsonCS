import Link from "next/link"
import { Github, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Anderson Costa da Silva
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Software Developer & Technology Enthusiast
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/projects">
                    <Button className="w-full min-[400px]:w-auto">View Projects</Button>
                  </Link>
                  <Link href="/certificates">
                    <Button className="w-full min-[400px]:w-auto" variant="outline">
                      View Certificates
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <Link
                    href="https://github.com/andersoncosta-dev"
                    className="flex items-center gap-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href="mailto:contact@andersoncosta.dev"
                    className="flex items-center gap-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-sm">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold">Business Information</h2>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">CNPJ:</span>
                            <span>36.217.301/0001-19</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">Business Name:</span>
                            <span>36.217.301 ANDERSON COSTA DA SILVA</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Contact</h3>
                        <div className="grid gap-2 text-sm">
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <Phone className="h-4 w-4" />
                            <span>+55 (XX) XXXXX-XXXX</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <Mail className="h-4 w-4" />
                            <span>contact@andersoncosta.dev</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <MapPin className="h-4 w-4" />
                            <span>Brazil</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I'm a passionate software developer with expertise in web development and modern technologies. My
                  portfolio showcases my projects, skills, and professional achievements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-gray-100 py-6 dark:bg-gray-900">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Anderson Costa da Silva. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/andersoncosta-dev"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:contact@andersoncosta.dev"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
