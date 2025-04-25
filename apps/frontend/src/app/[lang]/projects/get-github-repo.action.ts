'use server'

import { getGithubRepoUsecase, githubRepository } from '@ason_cs_ts/shared'

import { fetchDefault } from '@/lib/utils'

export async function getGithubRepoAction(username: string) {
	const fetch = fetchDefault()
	const repository = githubRepository(fetch)
	return getGithubRepoUsecase(repository).execute(username)
}
