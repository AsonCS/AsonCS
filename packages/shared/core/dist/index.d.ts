interface Fetch {
    fetchWithCache<R>(url: string, defaultValue: R): Promise<R>;
}

interface Usecase<IN, OUT> {
    execute(input: IN): Promise<OUT>;
}

interface GithubRepository {
    repos(username: string): Promise<{
        description: string | null;
        homepage: string;
        html_url: string;
        id: number;
        name: string;
        stargazers_count: number;
    }[]>;
}
declare function defaultGithubRepository(fetch: Fetch): GithubRepository;

interface GithubRepo {
    description: string;
    homepage: string;
    html_url: string;
    id: number;
    name: string;
    technologies: string[];
    stargazers_count: number;
}
interface GetGithubRepoUsecase extends Usecase<string, GithubRepo[]> {
}
declare function getGithubRepoUsecase(githubRepository: GithubRepository): GetGithubRepoUsecase;

export { type Fetch, type GetGithubRepoUsecase, type GithubRepo, type GithubRepository, type Usecase, defaultGithubRepository, getGithubRepoUsecase };
