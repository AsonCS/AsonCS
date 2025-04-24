import { Langs } from '@/hooks/use-strings'

export async function useLang(params: Promise<{ lang: string | undefined }>): Promise<Langs> {
	const { lang } = await params

	if (lang?.includes(Langs.EN)) {
		return Langs.EN
	}

	return Langs.PT
}
