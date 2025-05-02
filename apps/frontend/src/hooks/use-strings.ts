import {
	defaultI18nProvider,
	getStringsUsecase,
	Lang,
	Strings,
} from '@ason_cs_ts/i18n'

export async function useStrings(
	lang: Lang | undefined = undefined
): Promise<Strings> {
	const provider = defaultI18nProvider()
	return getStringsUsecase(provider).execute(lang)
}
