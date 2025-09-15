interface Url {
  label: string;
  url: string;
  type: "news" | "github";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl: string;
  urls: Url[];
}
