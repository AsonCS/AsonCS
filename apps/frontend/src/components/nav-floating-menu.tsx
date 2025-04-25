'use client'

import Link from 'next/link'

import { Lang } from '@ason_cs_ts/i18n'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useNavigateTo } from '@/hooks/use-navigateTo'

import { Button } from './ui/button'

export default function NavFloatingMenu({
	items,
	lang,
	links,
}: {
	items: string[]
	lang: Lang
	links: string[]
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
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
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{items.map((item, idx) => (
					<DropdownMenuItem key={item}>
						<Link href={useNavigateTo(lang, links[idx] ?? '')}>{item}</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
