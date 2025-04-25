import { Fetch } from '@ason_cs_ts/shared'

import { en, pt, RESOURCES_STRINGS_EN, RESOURCES_STRINGS_PT } from '../resources'
import { Translatable } from '../model'

export interface I18nRepository {
	en(): Promise<Translatable>
	pt(): Promise<Translatable>
}

export default function i18nRepository(fetch: Fetch) {
	return {
		async en() {
			const result = await fetch.fetchWithCache(RESOURCES_STRINGS_EN, en)
			return { ...en, ...result }
		},
		async pt() {
			const result = await fetch.fetchWithCache(RESOURCES_STRINGS_PT, pt)
			return { ...pt, ...result }
		},
	}
}
