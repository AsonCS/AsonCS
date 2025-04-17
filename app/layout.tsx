import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Github } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Anderson Costa da Silva - Portfolio",
  description:
    "Personal portfolio website of Anderson Costa da Silva, showcasing projects, certificates, and business information.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background">
              <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                  <Link href="/" className="font-bold">
                    Anderson Costa
                  </Link>
                </div>
                <nav className="hidden md:flex gap-6">
                  <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
                    Home
                  </Link>
                  <Link href="/projects" className="text-sm font-medium hover:underline underline-offset-4">
                    Projects
                  </Link>
                  <Link href="/certificates" className="text-sm font-medium hover:underline underline-offset-4">
                    Certificates
                  </Link>
                  <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center gap-2">
                  <Link href="https://github.com/andersoncosta-dev" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <ModeToggle />
                  <Button className="md:hidden" variant="ghost" size="icon">
                    <span className="sr-only">Toggle menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <line x1="4" x2="20" y1="12" y2="12" />
                      <line x1="4" x2="20" y1="6" y2="6" />
                      <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                  </Button>
                </div>
              </div>
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'