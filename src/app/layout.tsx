import type React from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Github } from 'lucide-react'

import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { useStrings } from '@/hooks/use-strings'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

type Props = {
	children: React.ReactNode
	searchParams: Promise<{ lang: string | undefined }>
}

export default async function RootLayout({ children, searchParams }: Props) {
	//const { lang } = await searchParams
	const strings = useStrings()
	const layoutStrings = strings.home.layout

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex min-h-screen flex-col">
						<header className="sticky top-0 z-40 w-full border-b bg-background">
							<div className="container flex h-16 items-center justify-between px-4 md:px-6">
								<div className="flex items-center gap-2">
									<Link href="/" className="font-bold">
										{strings.name}
									</Link>
								</div>
								<nav className="hidden md:flex gap-6">
									<Link
										href="/"
										className="text-sm font-medium hover:underline underline-offset-4"
									>
										{layoutStrings.nav.home}
									</Link>
									<Link
										href="/projects"
										className="text-sm font-medium hover:underline underline-offset-4"
									>
										{layoutStrings.nav.projects}
									</Link>
									<Link
										href="/certificates"
										className="text-sm font-medium hover:underline underline-offset-4"
									>
										{layoutStrings.nav.certificates}
									</Link>
									<Link
										href="/contact"
										className="text-sm font-medium hover:underline underline-offset-4"
									>
										{layoutStrings.nav.contact}
									</Link>
								</nav>
								<div className="flex items-center gap-2">
									<Link
										href={strings.github}
										target="_blank"
										rel="noopener noreferrer"
									>
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
