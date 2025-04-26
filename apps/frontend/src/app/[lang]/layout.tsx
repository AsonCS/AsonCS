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
import { LangToggle } from '@/components/lang-toggle'
import NavFloatingMenu from '@/components/nav-floating-menu'

const inter = Inter({ subsets: ['latin'] })

type Props = {
	children: React.ReactNode
	params: Promise<{ lang: string | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const lang = await useLang(params)
	const strings = (await useStrings(lang)).home.metadata

	return {
		title: strings.title,
		description: strings.description,
		generator: strings.generator,
	}
}

export default async function RootLayout({ children, params }: Props) {
	const lang = await useLang(params)
	const strings = await useStrings(lang)
	const layoutStrings = strings.home.layout

	const navItems = Object.values(layoutStrings.nav)
	const navLinks = ['', 'projects', 'certificates', 'contact']

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
									{navItems.map((item, idx) => (
										<Link
											href={useNavigateTo(lang, navLinks[idx] ?? '')}
											key={idx}
											className="text-sm font-medium hover:underline underline-offset-4"
										>
											{item}
										</Link>
									))}
								</nav>
								<div className="flex items-center gap-2">
									<LangToggle lang={lang} />
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
									<NavFloatingMenu
										items={navItems}
										lang={lang}
										links={navLinks}
									/>
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
