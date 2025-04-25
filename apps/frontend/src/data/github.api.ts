import { fetchWithCache } from '@/lib/utils'

export interface Repo {
	description: string | null
	homepage: string
	html_url: string
	id: number
	name: string
	stargazers_count: number
}

export interface GithubApi {
	repos(username: string): Promise<Repo[]>
}

export default function githubApi(): GithubApi {
	return {
		async repos(username) {
			return fetchWithCache(
				`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
				[]
			)
		},
	}
}
