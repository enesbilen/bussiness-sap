export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  avatar?: string;
}

export interface Stat {
  id: string;
  value: number;
  label: string;
  suffix?: string;
}

