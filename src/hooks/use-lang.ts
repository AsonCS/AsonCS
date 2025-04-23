import { EN, PT } from '@/lib/strings'

export async function useLang(params: Promise<{ lang: string | undefined }>): Promise<string> {
	const { lang } = await params

	if (lang?.includes(EN)) {
		return EN
	}

	return PT
}
