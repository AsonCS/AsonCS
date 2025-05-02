'use server'

import {
	defaultGithubRepository,
	getGithubRepoUsecase,
} from '@ason_cs_ts/shared'

import { fetchDefaultServer } from '@/lib/fetch_default.server'

export async function getGithubRepoAction(
	username: string
) {
	const fetch = await fetchDefaultServer()
	const repository = defaultGithubRepository(fetch)
	return getGithubRepoUsecase(repository).execute(
		username
	)
}
