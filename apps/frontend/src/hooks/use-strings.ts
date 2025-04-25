import { getStringsUsecase, i18nRepository, Lang, Strings } from '@ason_cs_ts/i18n'

import { fetchDefault } from '@/lib/utils'

export async function useStrings(lang: Lang | undefined = undefined): Promise<Strings> {
	const fetch = fetchDefault()
	const repository = i18nRepository(fetch)
	return getStringsUsecase(repository).execute(lang)
}
