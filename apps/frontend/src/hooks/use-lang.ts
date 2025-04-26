import { Lang, langs } from '@ason_cs_ts/i18n'

export async function useLang(
	params: Promise<{ lang: string | undefined }>
): Promise<Lang> {
	const { lang } = await params

	return (
		langs().find(
			(value) => value == lang?.toLowerCase()
		) ?? Lang.PT
	)
}
