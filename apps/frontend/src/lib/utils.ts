import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export async function sleep() {
	await new Promise((resolve) =>
		setTimeout(() => resolve(''), 3_000)
	)
}
