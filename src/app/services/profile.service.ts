import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  getGitHubProfile(term: string): Observable<any> {
    //const url = `https://api.github.com/users/${term}`;
    //return this.httpClient.get<any>(url);
    return of(profile);
  }

  getGitHubRepos(term: string): Observable<any> {
    //const url = `https://api.github.com/users/${term}/repos`;
    //return this.httpClient.get<any>(url);
    return of(repos);
  }
}

const profile = {
  login: 'horaciosdev',
  id: 29050661,
  node_id: 'MDQ6VXNlcjI5MDUwNjYx',
  avatar_url: 'https://avatars.githubusercontent.com/u/29050661?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/horaciosdev',
  html_url: 'https://github.com/horaciosdev',
  followers_url: 'https://api.github.com/users/horaciosdev/followers',
  following_url:
    'https://api.github.com/users/horaciosdev/following{/other_user}',
  gists_url: 'https://api.github.com/users/horaciosdev/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/horaciosdev/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/horaciosdev/subscriptions',
  organizations_url: 'https://api.github.com/users/horaciosdev/orgs',
  repos_url: 'https://api.github.com/users/horaciosdev/repos',
  events_url: 'https://api.github.com/users/horaciosdev/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/horaciosdev/received_events',
  type: 'User',
  site_admin: false,
  name: 'Horacio Schumann Oliveira',
  company: null,
  blog: 'horaciosdev.github.io/angular-resume/',
  location: 'Porto Alegre/RS',
  email: null,
  hireable: null,
  bio: 'Desenvolvedor apaixonado por tecnologia, sempre buscando aprender e crescer. Focado em construir soluções eficientes e inovadoras.',
  twitter_username: null,
  public_repos: 10,
  public_gists: 0,
  followers: 7,
  following: 8,
  created_at: '2017-05-29T22:07:23Z',
  updated_at: '2023-01-15T01:00:54Z',
};

const repos = [
  {
    id: 573981916,
    node_id: 'R_kgDOIjZE3A',
    name: 'adonisjs_api_curso',
    full_name: 'horaciosdev/adonisjs_api_curso',
    private: false,
    owner: {
      login: 'horaciosdev',
      id: 29050661,
      node_id: 'MDQ6VXNlcjI5MDUwNjYx',
      avatar_url: 'https://avatars.githubusercontent.com/u/29050661?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/horaciosdev',
      html_url: 'https://github.com/horaciosdev',
      followers_url: 'https://api.github.com/users/horaciosdev/followers',
      following_url:
        'https://api.github.com/users/horaciosdev/following{/other_user}',
      gists_url: 'https://api.github.com/users/horaciosdev/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/horaciosdev/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/horaciosdev/subscriptions',
      organizations_url: 'https://api.github.com/users/horaciosdev/orgs',
      repos_url: 'https://api.github.com/users/horaciosdev/repos',
      events_url: 'https://api.github.com/users/horaciosdev/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/horaciosdev/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/horaciosdev/adonisjs_api_curso',
    description: 'Pequeno estudo de criação de uma API REST com AdonisJs',
    fork: false,
    url: 'https://api.github.com/repos/horaciosdev/adonisjs_api_curso',
    forks_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/forks',
    keys_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/teams',
    hooks_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/hooks',
    issue_events_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/events',
    assignees_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/tags',
    blobs_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/languages',
    stargazers_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/stargazers',
    contributors_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/contributors',
    subscribers_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/subscribers',
    subscription_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/subscription',
    commits_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/merges',
    archive_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/downloads',
    issues_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/labels{/name}',
    releases_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/horaciosdev/adonisjs_api_curso/deployments',
    created_at: '2022-12-04T03:13:54Z',
    updated_at: '2022-12-04T03:17:12Z',
    pushed_at: '2022-12-04T03:17:07Z',
    git_url: 'git://github.com/horaciosdev/adonisjs_api_curso.git',
    ssh_url: 'git@github.com:horaciosdev/adonisjs_api_curso.git',
    clone_url: 'https://github.com/horaciosdev/adonisjs_api_curso.git',
    svn_url: 'https://github.com/horaciosdev/adonisjs_api_curso',
    homepage: null,
    size: 192,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 581351147,
    node_id: 'R_kgDOIqa26w',
    name: 'angular-resume',
    full_name: 'horaciosdev/angular-resume',
    private: false,
    owner: {
      login: 'horaciosdev',
      id: 29050661,
      node_id: 'MDQ6VXNlcjI5MDUwNjYx',
      avatar_url: 'https://avatars.githubusercontent.com/u/29050661?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/horaciosdev',
      html_url: 'https://github.com/horaciosdev',
      followers_url: 'https://api.github.com/users/horaciosdev/followers',
      following_url:
        'https://api.github.com/users/horaciosdev/following{/other_user}',
      gists_url: 'https://api.github.com/users/horaciosdev/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/horaciosdev/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/horaciosdev/subscriptions',
      organizations_url: 'https://api.github.com/users/horaciosdev/orgs',
      repos_url: 'https://api.github.com/users/horaciosdev/repos',
      events_url: 'https://api.github.com/users/horaciosdev/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/horaciosdev/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/horaciosdev/angular-resume',
    description: 'A multiple resume project with Angular',
    fork: false,
    url: 'https://api.github.com/repos/horaciosdev/angular-resume',
    forks_url: 'https://api.github.com/repos/horaciosdev/angular-resume/forks',
    keys_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/horaciosdev/angular-resume/teams',
    hooks_url: 'https://api.github.com/repos/horaciosdev/angular-resume/hooks',
    issue_events_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/events',
    assignees_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/branches{/branch}',
    tags_url: 'https://api.github.com/repos/horaciosdev/angular-resume/tags',
    blobs_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/languages',
    stargazers_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/stargazers',
    contributors_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/contributors',
    subscribers_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/subscribers',
    subscription_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/subscription',
    commits_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/merges',
    archive_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/downloads',
    issues_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/labels{/name}',
    releases_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/horaciosdev/angular-resume/deployments',
    created_at: '2022-12-23T00:03:50Z',
    updated_at: '2022-12-31T20:40:51Z',
    pushed_at: '2023-01-14T21:41:24Z',
    git_url: 'git://github.com/horaciosdev/angular-resume.git',
    ssh_url: 'git@github.com:horaciosdev/angular-resume.git',
    clone_url: 'https://github.com/horaciosdev/angular-resume.git',
    svn_url: 'https://github.com/horaciosdev/angular-resume',
    homepage: null,
    size: 2111,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 579768818,
    node_id: 'R_kgDOIo6R8g',
    name: 'angular-tour-of-heroes',
    full_name: 'horaciosdev/angular-tour-of-heroes',
    private: false,
    owner: {
      login: 'horaciosdev',
      id: 29050661,
      node_id: 'MDQ6VXNlcjI5MDUwNjYx',
      avatar_url: 'https://avatars.githubusercontent.com/u/29050661?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/horaciosdev',
      html_url: 'https://github.com/horaciosdev',
      followers_url: 'https://api.github.com/users/horaciosdev/followers',
      following_url:
        'https://api.github.com/users/horaciosdev/following{/other_user}',
      gists_url: 'https://api.github.com/users/horaciosdev/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/horaciosdev/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/horaciosdev/subscriptions',
      organizations_url: 'https://api.github.com/users/horaciosdev/orgs',
      repos_url: 'https://api.github.com/users/horaciosdev/repos',
      events_url: 'https://api.github.com/users/horaciosdev/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/horaciosdev/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/horaciosdev/angular-tour-of-heroes',
    description: 'The Angular Tutorial Project',
    fork: false,
    url: 'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes',
    forks_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/forks',
    keys_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/teams',
    hooks_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/hooks',
    issue_events_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/events',
    assignees_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/tags',
    blobs_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/languages',
    stargazers_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/stargazers',
    contributors_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/contributors',
    subscribers_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/subscribers',
    subscription_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/subscription',
    commits_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/merges',
    archive_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/downloads',
    issues_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/labels{/name}',
    releases_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/horaciosdev/angular-tour-of-heroes/deployments',
    created_at: '2022-12-18T21:14:35Z',
    updated_at: '2022-12-18T21:30:40Z',
    pushed_at: '2022-12-20T15:15:40Z',
    git_url: 'git://github.com/horaciosdev/angular-tour-of-heroes.git',
    ssh_url: 'git@github.com:horaciosdev/angular-tour-of-heroes.git',
    clone_url: 'https://github.com/horaciosdev/angular-tour-of-heroes.git',
    svn_url: 'https://github.com/horaciosdev/angular-tour-of-heroes',
    homepage: null,
    size: 251,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 575108020,
    node_id: 'R_kgDOIkdztA',
    name: 'angular_moments',
    full_name: 'horaciosdev/angular_moments',
    private: false,
    owner: {
      login: 'horaciosdev',
      id: 29050661,
      node_id: 'MDQ6VXNlcjI5MDUwNjYx',
      avatar_url: 'https://avatars.githubusercontent.com/u/29050661?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/horaciosdev',
      html_url: 'https://github.com/horaciosdev',
      followers_url: 'https://api.github.com/users/horaciosdev/followers',
      following_url:
        'https://api.github.com/users/horaciosdev/following{/other_user}',
      gists_url: 'https://api.github.com/users/horaciosdev/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/horaciosdev/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/horaciosdev/subscriptions',
      organizations_url: 'https://api.github.com/users/horaciosdev/orgs',
      repos_url: 'https://api.github.com/users/horaciosdev/repos',
      events_url: 'https://api.github.com/users/horaciosdev/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/horaciosdev/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/horaciosdev/angular_moments',
    description: 'Pequeno projeto em Angular',
    fork: false,
    url: 'https://api.github.com/repos/horaciosdev/angular_moments',
    forks_url: 'https://api.github.com/repos/horaciosdev/angular_moments/forks',
    keys_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/horaciosdev/angular_moments/teams',
    hooks_url: 'https://api.github.com/repos/horaciosdev/angular_moments/hooks',
    issue_events_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/events',
    assignees_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/branches{/branch}',
    tags_url: 'https://api.github.com/repos/horaciosdev/angular_moments/tags',
    blobs_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/languages',
    stargazers_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/stargazers',
    contributors_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/contributors',
    subscribers_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/subscribers',
    subscription_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/subscription',
    commits_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/merges',
    archive_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/downloads',
    issues_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/labels{/name}',
    releases_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/horaciosdev/angular_moments/deployments',
    created_at: '2022-12-06T19:19:33Z',
    updated_at: '2022-12-06T19:46:22Z',
    pushed_at: '2022-12-08T20:19:22Z',
    git_url: 'git://github.com/horaciosdev/angular_moments.git',
    ssh_url: 'git@github.com:horaciosdev/angular_moments.git',
    clone_url: 'https://github.com/horaciosdev/angular_moments.git',
    svn_url: 'https://github.com/horaciosdev/angular_moments',
    homepage: null,
    size: 269,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 580233139,
    node_id: 'R_kgDOIpWnsw',
    name: 'clappr',
    full_name: 'horaciosdev/clappr',
    private: false,
    owner: {
      login: 'horaciosdev',
      id: 29050661,
      node_id: 'MDQ6VXNlcjI5MDUwNjYx',
      avatar_url: 'https://avatars.githubusercontent.com/u/29050661?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/horaciosdev',
      html_url: 'https://github.com/horaciosdev',
      followers_url: 'https://api.github.com/users/horaciosdev/followers',
      following_url:
        'https://api.github.com/users/horaciosdev/following{/other_user}',
      gists_url: 'https://api.github.com/users/horaciosdev/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/horaciosdev/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/horaciosdev/subscriptions',
      organizations_url: 'https://api.github.com/users/horaciosdev/orgs',
      repos_url: 'https://api.github.com/users/horaciosdev/repos',
      events_url: 'https://api.github.com/users/horaciosdev/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/horaciosdev/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/horaciosdev/clappr',
    description: ':clapper: An extensible media player for the web.',
    fork: true,
    url: 'https://api.github.com/repos/horaciosdev/clappr',
    forks_url: 'https://api.github.com/repos/horaciosdev/clappr/forks',
    keys_url: 'https://api.github.com/repos/horaciosdev/clappr/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/horaciosdev/clappr/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/horaciosdev/clappr/teams',
    hooks_url: 'https://api.github.com/repos/horaciosdev/clappr/hooks',
    issue_events_url:
      'https://api.github.com/repos/horaciosdev/clappr/issues/events{/number}',
    events_url: 'https://api.github.com/repos/horaciosdev/clappr/events',
    assignees_url:
      'https://api.github.com/repos/horaciosdev/clappr/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/horaciosdev/clappr/branches{/branch}',
    tags_url: 'https://api.github.com/repos/horaciosdev/clappr/tags',
    blobs_url:
      'https://api.github.com/repos/horaciosdev/clappr/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/horaciosdev/clappr/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/horaciosdev/clappr/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/horaciosdev/clappr/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/horaciosdev/clappr/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/horaciosdev/clappr/languages',
    stargazers_url:
      'https://api.github.com/repos/horaciosdev/clappr/stargazers',
    contributors_url:
      'https://api.github.com/repos/horaciosdev/clappr/contributors',
    subscribers_url:
      'https://api.github.com/repos/horaciosdev/clappr/subscribers',
    subscription_url:
      'https://api.github.com/repos/horaciosdev/clappr/subscription',
    commits_url:
      'https://api.github.com/repos/horaciosdev/clappr/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/horaciosdev/clappr/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/horaciosdev/clappr/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/horaciosdev/clappr/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/horaciosdev/clappr/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/horaciosdev/clappr/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/horaciosdev/clappr/merges',
    archive_url:
      'https://api.github.com/repos/horaciosdev/clappr/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/horaciosdev/clappr/downloads',
    issues_url:
      'https://api.github.com/repos/horaciosdev/clappr/issues{/number}',
    pulls_url: 'https://api.github.com/repos/horaciosdev/clappr/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/horaciosdev/clappr/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/horaciosdev/clappr/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/horaciosdev/clappr/labels{/name}',
    releases_url:
      'https://api.github.com/repos/horaciosdev/clappr/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/horaciosdev/clappr/deployments',
    created_at: '2022-12-20T03:31:08Z',
    updated_at: '2022-12-20T02:59:17Z',
    pushed_at: '2022-12-08T23:27:28Z',
    git_url: 'git://github.com/horaciosdev/clappr.git',
    ssh_url: 'git@github.com:horaciosdev/clappr.git',
    clone_url: 'https://github.com/horaciosdev/clappr.git',
    svn_url: 'https://github.com/horaciosdev/clappr',
    homepage: 'http://clappr.io',
    size: 56861,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'bsd-3-clause',
      name: 'BSD 3-Clause "New" or "Revised" License',
      spdx_id: 'BSD-3-Clause',
      url: 'https://api.github.com/licenses/bsd-3-clause',
      node_id: 'MDc6TGljZW5zZTU=',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'dev',
  },
  {
    id: 569402881,
    node_id: 'R_kgDOIfBmAQ',
    name: 'curriculo',
    full_name: 'horaciosdev/curriculo',
    private: false,
    owner: {
      login: 'horaciosdev',
      id: 29050661,
      node_id: 'MDQ6VXNlcjI5MDUwNjYx',
      avatar_url: 'https://avatars.githubusercontent.com/u/29050661?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/horaciosdev',
      html_url: 'https://github.com/horaciosdev',
      followers_url: 'https://api.github.com/users/horaciosdev/followers',
      following_url:
        'https://api.github.com/users/horaciosdev/following{/other_user}',
      gists_url: 'https://api.github.com/users/horaciosdev/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/horaciosdev/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/horaciosdev/subscriptions',
      organizations_url: 'https://api.github.com/users/horaciosdev/orgs',
      repos_url: 'https://api.github.com/users/horaciosdev/repos',
      events_url: 'https://api.github.com/users/horaciosdev/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/horaciosdev/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/horaciosdev/curriculo',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/horaciosdev/curriculo',
    forks_url: 'https://api.github.com/repos/horaciosdev/curriculo/forks',
    keys_url:
      'https://api.github.com/repos/horaciosdev/curriculo/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/horaciosdev/curriculo/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/horaciosdev/curriculo/teams',
    hooks_url: 'https://api.github.com/repos/horaciosdev/curriculo/hooks',
    issue_events_url:
      'https://api.github.com/repos/horaciosdev/curriculo/issues/events{/number}',
    events_url: 'https://api.github.com/repos/horaciosdev/curriculo/events',
    assignees_url:
      'https://api.github.com/repos/horaciosdev/curriculo/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/horaciosdev/curriculo/branches{/branch}',
    tags_url: 'https://api.github.com/repos/horaciosdev/curriculo/tags',
    blobs_url:
      'https://api.github.com/repos/horaciosdev/curriculo/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/horaciosdev/curriculo/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/horaciosdev/curriculo/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/horaciosdev/curriculo/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/horaciosdev/curriculo/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/horaciosdev/curriculo/languages',
    stargazers_url:
      'https://api.github.com/repos/horaciosdev/curriculo/stargazers',
    contributors_url:
      'https://api.github.com/repos/horaciosdev/curriculo/contributors',
    subscribers_url:
      'https://api.github.com/repos/horaciosdev/curriculo/subscribers',
    subscription_url:
      'https://api.github.com/repos/horaciosdev/curriculo/subscription',
    commits_url:
      'https://api.github.com/repos/horaciosdev/curriculo/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/horaciosdev/curriculo/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/horaciosdev/curriculo/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/horaciosdev/curriculo/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/horaciosdev/curriculo/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/horaciosdev/curriculo/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/horaciosdev/curriculo/merges',
    archive_url:
      'https://api.github.com/repos/horaciosdev/curriculo/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/horaciosdev/curriculo/downloads',
    issues_url:
      'https://api.github.com/repos/horaciosdev/curriculo/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/horaciosdev/curriculo/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/horaciosdev/curriculo/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/horaciosdev/curriculo/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/horaciosdev/curriculo/labels{/name}',
    releases_url:
      'https://api.github.com/repos/horaciosdev/curriculo/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/horaciosdev/curriculo/deployments',
    created_at: '2022-11-22T18:43:24Z',
    updated_at: '2022-12-09T04:34:46Z',
    pushed_at: '2022-12-09T04:49:00Z',
    git_url: 'git://github.com/horaciosdev/curriculo.git',
    ssh_url: 'git@github.com:horaciosdev/curriculo.git',
    clone_url: 'https://github.com/horaciosdev/curriculo.git',
    svn_url: 'https://github.com/horaciosdev/curriculo',
    homepage: null,
    size: 629,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Sass',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 589095317,
    node_id: 'R_kgDOIxzhlQ',
    name: 'GianManzo',
    full_name: 'horaciosdev/GianManzo',
    private: false,
    owner: {
      login: 'horaciosdev',
      id: 29050661,
      node_id: 'MDQ6VXNlcjI5MDUwNjYx',
      avatar_url: 'https://avatars.githubusercontent.com/u/29050661?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/horaciosdev',
      html_url: 'https://github.com/horaciosdev',
      followers_url: 'https://api.github.com/users/horaciosdev/followers',
      following_url:
        'https://api.github.com/users/horaciosdev/following{/other_user}',
      gists_url: 'https://api.github.com/users/horaciosdev/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/horaciosdev/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/horaciosdev/subscriptions',
      organizations_url: 'https://api.github.com/users/horaciosdev/orgs',
      repos_url: 'https://api.github.com/users/horaciosdev/repos',
      events_url: 'https://api.github.com/users/horaciosdev/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/horaciosdev/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/horaciosdev/GianManzo',
    description: 'Readme - gitHub',
    fork: true,
    url: 'https://api.github.com/repos/horaciosdev/GianManzo',
    forks_url: 'https://api.github.com/repos/horaciosdev/GianManzo/forks',
    keys_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/horaciosdev/GianManzo/teams',
    hooks_url: 'https://api.github.com/repos/horaciosdev/GianManzo/hooks',
    issue_events_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/issues/events{/number}',
    events_url: 'https://api.github.com/repos/horaciosdev/GianManzo/events',
    assignees_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/branches{/branch}',
    tags_url: 'https://api.github.com/repos/horaciosdev/GianManzo/tags',
    blobs_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/languages',
    stargazers_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/stargazers',
    contributors_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/contributors',
    subscribers_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/subscribers',
    subscription_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/subscription',
    commits_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/horaciosdev/GianManzo/merges',
    archive_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/downloads',
    issues_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/labels{/name}',
    releases_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/horaciosdev/GianManzo/deployments',
    created_at: '2023-01-15T03:04:31Z',
    updated_at: '2022-07-20T14:22:26Z',
    pushed_at: '2023-01-15T02:11:58Z',
    git_url: 'git://github.com/horaciosdev/GianManzo.git',
    ssh_url: 'git@github.com:horaciosdev/GianManzo.git',
    clone_url: 'https://github.com/horaciosdev/GianManzo.git',
    svn_url: 'https://github.com/horaciosdev/GianManzo',
    homepage: '',
    size: 24,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 573978433,
    node_id: 'R_kgDOIjY3QQ',
    name: 'horaciosdev',
    full_name: 'horaciosdev/horaciosdev',
    private: false,
    owner: {
      login: 'horaciosdev',
      id: 29050661,
      node_id: 'MDQ6VXNlcjI5MDUwNjYx',
      avatar_url: 'https://avatars.githubusercontent.com/u/29050661?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/horaciosdev',
      html_url: 'https://github.com/horaciosdev',
      followers_url: 'https://api.github.com/users/horaciosdev/followers',
      following_url:
        'https://api.github.com/users/horaciosdev/following{/other_user}',
      gists_url: 'https://api.github.com/users/horaciosdev/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/horaciosdev/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/horaciosdev/subscriptions',
      organizations_url: 'https://api.github.com/users/horaciosdev/orgs',
      repos_url: 'https://api.github.com/users/horaciosdev/repos',
      events_url: 'https://api.github.com/users/horaciosdev/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/horaciosdev/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/horaciosdev/horaciosdev',
    description: 'Config files for my GitHub profile.',
    fork: false,
    url: 'https://api.github.com/repos/horaciosdev/horaciosdev',
    forks_url: 'https://api.github.com/repos/horaciosdev/horaciosdev/forks',
    keys_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/horaciosdev/horaciosdev/teams',
    hooks_url: 'https://api.github.com/repos/horaciosdev/horaciosdev/hooks',
    issue_events_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/issues/events{/number}',
    events_url: 'https://api.github.com/repos/horaciosdev/horaciosdev/events',
    assignees_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/branches{/branch}',
    tags_url: 'https://api.github.com/repos/horaciosdev/horaciosdev/tags',
    blobs_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/languages',
    stargazers_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/stargazers',
    contributors_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/contributors',
    subscribers_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/subscribers',
    subscription_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/subscription',
    commits_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/horaciosdev/horaciosdev/merges',
    archive_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/downloads',
    issues_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/labels{/name}',
    releases_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/horaciosdev/horaciosdev/deployments',
    created_at: '2022-12-04T02:53:31Z',
    updated_at: '2023-01-15T01:01:45Z',
    pushed_at: '2023-01-15T03:24:00Z',
    git_url: 'git://github.com/horaciosdev/horaciosdev.git',
    ssh_url: 'git@github.com:horaciosdev/horaciosdev.git',
    clone_url: 'https://github.com/horaciosdev/horaciosdev.git',
    svn_url: 'https://github.com/horaciosdev/horaciosdev',
    homepage: 'https://github.com/hor4cles',
    size: 5,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['config', 'github-config'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 587860586,
    node_id: 'R_kgDOIwoKag',
    name: 'search_devs',
    full_name: 'horaciosdev/search_devs',
    private: false,
    owner: {
      login: 'horaciosdev',
      id: 29050661,
      node_id: 'MDQ6VXNlcjI5MDUwNjYx',
      avatar_url: 'https://avatars.githubusercontent.com/u/29050661?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/horaciosdev',
      html_url: 'https://github.com/horaciosdev',
      followers_url: 'https://api.github.com/users/horaciosdev/followers',
      following_url:
        'https://api.github.com/users/horaciosdev/following{/other_user}',
      gists_url: 'https://api.github.com/users/horaciosdev/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/horaciosdev/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/horaciosdev/subscriptions',
      organizations_url: 'https://api.github.com/users/horaciosdev/orgs',
      repos_url: 'https://api.github.com/users/horaciosdev/repos',
      events_url: 'https://api.github.com/users/horaciosdev/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/horaciosdev/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/horaciosdev/search_devs',
    description: 'An app to search github devs.',
    fork: false,
    url: 'https://api.github.com/repos/horaciosdev/search_devs',
    forks_url: 'https://api.github.com/repos/horaciosdev/search_devs/forks',
    keys_url:
      'https://api.github.com/repos/horaciosdev/search_devs/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/horaciosdev/search_devs/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/horaciosdev/search_devs/teams',
    hooks_url: 'https://api.github.com/repos/horaciosdev/search_devs/hooks',
    issue_events_url:
      'https://api.github.com/repos/horaciosdev/search_devs/issues/events{/number}',
    events_url: 'https://api.github.com/repos/horaciosdev/search_devs/events',
    assignees_url:
      'https://api.github.com/repos/horaciosdev/search_devs/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/horaciosdev/search_devs/branches{/branch}',
    tags_url: 'https://api.github.com/repos/horaciosdev/search_devs/tags',
    blobs_url:
      'https://api.github.com/repos/horaciosdev/search_devs/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/horaciosdev/search_devs/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/horaciosdev/search_devs/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/horaciosdev/search_devs/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/horaciosdev/search_devs/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/horaciosdev/search_devs/languages',
    stargazers_url:
      'https://api.github.com/repos/horaciosdev/search_devs/stargazers',
    contributors_url:
      'https://api.github.com/repos/horaciosdev/search_devs/contributors',
    subscribers_url:
      'https://api.github.com/repos/horaciosdev/search_devs/subscribers',
    subscription_url:
      'https://api.github.com/repos/horaciosdev/search_devs/subscription',
    commits_url:
      'https://api.github.com/repos/horaciosdev/search_devs/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/horaciosdev/search_devs/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/horaciosdev/search_devs/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/horaciosdev/search_devs/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/horaciosdev/search_devs/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/horaciosdev/search_devs/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/horaciosdev/search_devs/merges',
    archive_url:
      'https://api.github.com/repos/horaciosdev/search_devs/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/horaciosdev/search_devs/downloads',
    issues_url:
      'https://api.github.com/repos/horaciosdev/search_devs/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/horaciosdev/search_devs/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/horaciosdev/search_devs/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/horaciosdev/search_devs/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/horaciosdev/search_devs/labels{/name}',
    releases_url:
      'https://api.github.com/repos/horaciosdev/search_devs/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/horaciosdev/search_devs/deployments',
    created_at: '2023-01-11T18:58:59Z',
    updated_at: '2023-01-14T21:56:17Z',
    pushed_at: '2023-01-14T21:58:28Z',
    git_url: 'git://github.com/horaciosdev/search_devs.git',
    ssh_url: 'git@github.com:horaciosdev/search_devs.git',
    clone_url: 'https://github.com/horaciosdev/search_devs.git',
    svn_url: 'https://github.com/horaciosdev/search_devs',
    homepage: null,
    size: 624,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 587114792,
    node_id: 'R_kgDOIv6pKA',
    name: 'tabula',
    full_name: 'horaciosdev/tabula',
    private: false,
    owner: {
      login: 'horaciosdev',
      id: 29050661,
      node_id: 'MDQ6VXNlcjI5MDUwNjYx',
      avatar_url: 'https://avatars.githubusercontent.com/u/29050661?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/horaciosdev',
      html_url: 'https://github.com/horaciosdev',
      followers_url: 'https://api.github.com/users/horaciosdev/followers',
      following_url:
        'https://api.github.com/users/horaciosdev/following{/other_user}',
      gists_url: 'https://api.github.com/users/horaciosdev/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/horaciosdev/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/horaciosdev/subscriptions',
      organizations_url: 'https://api.github.com/users/horaciosdev/orgs',
      repos_url: 'https://api.github.com/users/horaciosdev/repos',
      events_url: 'https://api.github.com/users/horaciosdev/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/horaciosdev/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/horaciosdev/tabula',
    description: 'A simple Angular Kanban to do what you need to do.',
    fork: false,
    url: 'https://api.github.com/repos/horaciosdev/tabula',
    forks_url: 'https://api.github.com/repos/horaciosdev/tabula/forks',
    keys_url: 'https://api.github.com/repos/horaciosdev/tabula/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/horaciosdev/tabula/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/horaciosdev/tabula/teams',
    hooks_url: 'https://api.github.com/repos/horaciosdev/tabula/hooks',
    issue_events_url:
      'https://api.github.com/repos/horaciosdev/tabula/issues/events{/number}',
    events_url: 'https://api.github.com/repos/horaciosdev/tabula/events',
    assignees_url:
      'https://api.github.com/repos/horaciosdev/tabula/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/horaciosdev/tabula/branches{/branch}',
    tags_url: 'https://api.github.com/repos/horaciosdev/tabula/tags',
    blobs_url:
      'https://api.github.com/repos/horaciosdev/tabula/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/horaciosdev/tabula/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/horaciosdev/tabula/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/horaciosdev/tabula/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/horaciosdev/tabula/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/horaciosdev/tabula/languages',
    stargazers_url:
      'https://api.github.com/repos/horaciosdev/tabula/stargazers',
    contributors_url:
      'https://api.github.com/repos/horaciosdev/tabula/contributors',
    subscribers_url:
      'https://api.github.com/repos/horaciosdev/tabula/subscribers',
    subscription_url:
      'https://api.github.com/repos/horaciosdev/tabula/subscription',
    commits_url:
      'https://api.github.com/repos/horaciosdev/tabula/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/horaciosdev/tabula/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/horaciosdev/tabula/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/horaciosdev/tabula/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/horaciosdev/tabula/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/horaciosdev/tabula/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/horaciosdev/tabula/merges',
    archive_url:
      'https://api.github.com/repos/horaciosdev/tabula/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/horaciosdev/tabula/downloads',
    issues_url:
      'https://api.github.com/repos/horaciosdev/tabula/issues{/number}',
    pulls_url: 'https://api.github.com/repos/horaciosdev/tabula/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/horaciosdev/tabula/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/horaciosdev/tabula/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/horaciosdev/tabula/labels{/name}',
    releases_url:
      'https://api.github.com/repos/horaciosdev/tabula/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/horaciosdev/tabula/deployments',
    created_at: '2023-01-10T01:45:46Z',
    updated_at: '2023-01-10T20:20:39Z',
    pushed_at: '2023-01-11T17:10:54Z',
    git_url: 'git://github.com/horaciosdev/tabula.git',
    ssh_url: 'git@github.com:horaciosdev/tabula.git',
    clone_url: 'https://github.com/horaciosdev/tabula.git',
    svn_url: 'https://github.com/horaciosdev/tabula',
    homepage: null,
    size: 252,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
];
