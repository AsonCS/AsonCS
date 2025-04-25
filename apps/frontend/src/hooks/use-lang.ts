import { Lang } from '@ason_cs_ts/i18n'

export async function useLang(params: Promise<{ lang: string | undefined }>): Promise<Lang> {
	const { lang } = await params

	if (lang?.includes(Lang.EN)) {
		return Lang.EN
	}

	return Lang.PT
}
