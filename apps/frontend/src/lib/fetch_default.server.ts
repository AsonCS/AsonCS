'use server'

import { Fetch, getLogger } from '@ason_cs_ts/shared'

export async function fetchDefaultServer(): Promise<Fetch> {
	return {
		async fetchWithCache<R>(
			url: string,
			defaultValue: R
		): Promise<R> {
			const res = await fetch(url, {
				cache: 'force-cache',
				next: {
					revalidate: 3600,
				},
			})
				.then((res) => res.json())
				.catch((error) => {
					try {
						getLogger().error({
							message: `fetchWithCache: ${error.message}`,
							url,
						})
					} catch (_) {
						console.error(error)
					}
					return defaultValue
				})

			return res
		},
	}
}
