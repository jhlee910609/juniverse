interface GithubUrl {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl: string;
  githubUrl: GithubUrl[];
}
