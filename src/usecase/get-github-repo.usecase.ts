import githubApi, { GithubApi } from '@/data/github.api'

export interface GithubRepo {
	description: string
	homepage: string
	html_url: string
	id: number
	name: string
	technologies: string[]
	stargazers_count: number
}

export interface Usecase {
	execute(username: string): Promise<GithubRepo[]>
}

export class GetGithubRepoUsecase implements Usecase {
	constructor(private readonly _githubApi: GithubApi) {}

	async execute(username: string): Promise<GithubRepo[]> {
		return this._githubApi.repos(username).then((repos) =>
			repos.map((repo) => {
				const descriptionSplit = (repo.description ?? '').split(' | ')
				const description = descriptionSplit[0] ?? ''
				const technologies = (descriptionSplit[1] ?? '')
					.split(', ')
					.filter((desc) => desc.includes('{'))
					.map((desc) => desc.replace('{ ', '').replace(' }', ''))
				return {
					description: description,
					homepage: repo.homepage,
					html_url: repo.html_url,
					id: repo.id,
					name: repo.name,
					technologies: technologies,
					stargazers_count: repo.stargazers_count,
				}
			})
		)
	}
}

export default function getGithubRepoUsecase(): Usecase {
	return new GetGithubRepoUsecase(githubApi())
}
