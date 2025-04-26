'use client'

import { ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Lang, langs } from '@ason_cs_ts/i18n'

import { Button } from './ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function LangToggle({ lang }: { lang: Lang }) {
	const router = useRouter()

	function toggle(newLang: Lang) {
		const href = location.href
			.replace(location.origin, '') //
			.replace(lang, newLang) //

		router.push(href)
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="px-8" variant="ghost" size="icon">
					<span className="h-5 w-5">{lang.toUpperCase()}</span>
					<ChevronDown />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{langs()
					.filter((value) => value !== lang)
					.map((value) => (
						<DropdownMenuItem key={value} onClick={() => toggle(value)}>
							{value.toUpperCase()}
						</DropdownMenuItem>
					))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
