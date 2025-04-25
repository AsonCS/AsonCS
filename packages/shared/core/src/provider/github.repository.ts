import { Fetch } from '../base'

export interface GithubRepository {
	repos(username: string): Promise<
		{
			description: string | null
			homepage: string
			html_url: string
			id: number
			name: string
			stargazers_count: number
		}[]
	>
}

export default function githubRepository(fetch: Fetch): GithubRepository {
	return {
		async repos(username) {
			return fetch.fetchWithCache(
				`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
				[]
			)
		},
	}
}
