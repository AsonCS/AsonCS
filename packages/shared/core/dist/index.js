"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  defaultGithubRepository: () => defaultGithubRepository,
  getGithubRepoUsecase: () => getGithubRepoUsecase
});
module.exports = __toCommonJS(index_exports);

// src/provider/github.repository.ts
function defaultGithubRepository(fetch) {
  return {
    async repos(username) {
      return fetch.fetchWithCache(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        []
      );
    }
  };
}

// src/usecase/get-github-repo.usecase.ts
function getGithubRepoUsecase(githubRepository) {
  return {
    async execute(username) {
      return githubRepository.repos(username).then((repos) => {
        const result = [];
        repos.forEach((repo) => {
          if (repo.name === username) {
            return;
          }
          const descriptionSplit = (repo.description ?? "").split(" | ");
          const description = descriptionSplit[0] ?? "";
          const technologies = (descriptionSplit[1] ?? "").split(", ").filter((desc) => desc.includes("{")).map((desc) => desc.replace("{ ", "").replace(" }", ""));
          result.push({
            description,
            homepage: repo.homepage,
            html_url: repo.html_url,
            id: repo.id,
            name: repo.name,
            technologies,
            stargazers_count: repo.stargazers_count
          });
        });
        return result;
      });
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultGithubRepository,
  getGithubRepoUsecase
});
