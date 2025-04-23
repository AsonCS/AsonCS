import type React from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Github } from 'lucide-react'

import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { useLang } from '@/hooks/use-lang'
import { useNavigateTo } from '@/hooks/use-navigateTo'
import { useStrings } from '@/hooks/use-strings'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

type Props = {
	children: React.ReactNode
	params: Promise<{ lang: string | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const lang = await useLang(params)
	const strings = useStrings(lang).home.metadata

	return {
		title: strings.title,
		description: strings.description,
		generator: strings.generator,
	}
}

export default async function RootLayout({ children, params }: Props) {
	const lang = await useLang(params)
	const strings = useStrings(lang)
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
									<Link href={useNavigateTo(lang)} className="font-bold">
										{strings.name}
									</Link>
								</div>
								<nav className="hidden md:flex gap-6">
									<Link
										href={useNavigateTo(lang)}
										className="text-sm font-medium hover:underline underline-offset-4"
									>
										{layoutStrings.nav.home}
									</Link>
									<Link
										href={useNavigateTo(lang, 'projects')}
										className="text-sm font-medium hover:underline underline-offset-4"
									>
										{layoutStrings.nav.projects}
									</Link>
									<Link
										href={useNavigateTo(lang, 'certificates')}
										className="text-sm font-medium hover:underline underline-offset-4"
									>
										{layoutStrings.nav.certificates}
									</Link>
									<Link
										href={useNavigateTo(lang, 'contact')}
										className="text-sm font-medium hover:underline underline-offset-4"
									>
										{layoutStrings.nav.contact}
									</Link>
								</nav>
								<div className="flex items-center gap-2">
									<Link href="../en" rel="noopener noreferrer">
										<Button variant="ghost" size="icon">
											<span className="h-5 w-5">EN</span>
										</Button>
									</Link>
									<Link href="../pt" rel="noopener noreferrer">
										<Button variant="ghost" size="icon">
											<span className="h-5 w-5">PT</span>
										</Button>
									</Link>
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
