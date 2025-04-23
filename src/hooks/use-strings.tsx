import en from '@/lib/strings/en.json'
import pt from '@/lib/strings/pt.json'

type Strings = {
	email: string
	github: string
	name: string
	home: {
		layout: {
			nav: {
				certificates: string
				contact: string
				home: string
				projects: string
			}
		}
		metadata: {
			description: string
			generator: string
			title: string
		}
	}
}

export function useStrings(lang: string | undefined = ''): Strings {
	let strings = {
		email: 'asoncsts@gmail.com',
		github: 'https://github.com/AsonCS',
		name: 'Anderson Costa da Silva',
	}

	if (lang.includes('en')) {
		return { ...en, ...strings }
	}

	return { ...pt, ...strings }
}
