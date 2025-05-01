import { AboutMe } from '@ason_cs_ts/shared-remote_config'

const defaultValue: AboutMe = {
	text: '',
	title: '',
}

export const ABOUT_ME_DEFAULT_VALUE: string =
	JSON.stringify(defaultValue)
export const ABOUT_ME_KEY: string = 'about_me'
