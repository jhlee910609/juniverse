export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

export interface UserProfile {
  name: string;
  title: string;
  description: string;
  skills: string[];
  experiences: Experience[];
}
