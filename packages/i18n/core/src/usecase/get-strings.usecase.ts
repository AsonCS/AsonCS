import { Usecase } from '@ason_cs_ts/shared'

import { Lang, notTranslatable, Strings, Translatable } from '../model'
import { I18nRepository } from '../provider'

export interface GetStringsUsecase extends Usecase<Lang | undefined, Strings> {}

export default function getStringsUsecase(i18nRepository: I18nRepository): GetStringsUsecase {
	return {
		async execute(input) {
			let response: Translatable
			if (input === Lang.EN) {
				response = await i18nRepository.en()
			} else {
				response = await i18nRepository.pt()
			}

			return { ...notTranslatable, ...response }
		},
	}
}
