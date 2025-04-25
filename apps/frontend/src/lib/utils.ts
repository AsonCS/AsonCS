import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { Fetch } from '@ason_cs_ts/shared'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function fetchDefault(): Fetch {
	return {
		async fetchWithCache<R>(url: string, defaultValue: R): Promise<R> {
			const res = await fetch(url, {
				cache: 'force-cache',
				next: {
					revalidate: 3600,
				},
			})
				.then((res) => res.json())
				.catch((error) => {
					console.error('fetchWithCache', url, error)
					return defaultValue
				})

			//console.log(url, res)
			return res
		},
	}
}
