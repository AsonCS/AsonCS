import { Usecase } from '@ason_cs_ts/shared'

import { Lang, notTranslatable, Strings, Translatable } from '../model'
import { I18nProvider } from '../provider'

export interface GetStringsUsecase extends Usecase<Lang | undefined, Strings> {}

export default function getStringsUsecase(i18nProvider: I18nProvider): GetStringsUsecase {
	return {
		async execute(lang) {
			const response = i18nProvider.get(lang)

			const projectsCard = { ...notTranslatable.projects.card, ...response.projects.card }
			const projects = {
				...notTranslatable.projects,
				...response.projects,
				card: projectsCard,
			}
			return { ...notTranslatable, ...response, projects } as Strings
		},
	}
}
