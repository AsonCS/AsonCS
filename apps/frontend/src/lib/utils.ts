import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export async function fetchWithCache<R>(url: string, defaultValue: R): Promise<R> {
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
}
