export interface Post {
  frontmatter: {
    layout: string;
    title: string;
    author: string;
    description: string;
    image?: {
      url: string;
      alt: string;
    };
    pubDate: string;
    tags: string[];
    totalTimeClass: number;
    totalExam: number;
    totalTime: number;
    professor: string;
    order: number;
  };
  url: string;
}
