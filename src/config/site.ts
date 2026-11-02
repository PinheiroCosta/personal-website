export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  language: string;
  image: string;
}

export interface SiteConfig {
  name: string;
  url: string;
  headline: string;
  metadata: SiteMetadata;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: '[Your Name]',
  url: 'https://romulopinheiro.dev',
  headline: 'Independent software projects and services',
  metadata: {
    title: 'Personal Website',
    description:
      'Personal presentation website for showcasing independent software projects and services.',
    author: '[Your Name]',
    language: 'en-US',
    image: '/favicon.svg'
  },
  social: {
    github: 'https://github.com/PinheiroCosta',
    linkedin: '[Add LinkedIn URL]',
    email: '[Add contact email]'
  }
};
