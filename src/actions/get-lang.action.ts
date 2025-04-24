import { RESOURCES_STRINGS_EN, RESOURCES_STRINGS_PT } from '@/lib/firebase/storage'
import { fetchWithCache } from '@/lib/utils'

import en from '../../public/resources/strings/en.json'
import pt from '../../public/resources/strings/pt.json'

export async function getLangEn() {
	'use server'

	return fetchWithCache(RESOURCES_STRINGS_EN, en)
}

export async function getLangPt() {
	'use server'

	return fetchWithCache(RESOURCES_STRINGS_PT, pt)
}
