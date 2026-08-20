export type PostFrontmatter = {
  title: string;
  description: string;
  date: string; // ISO date, e.g. "2026-08-20"
  tags: string[];
  draft?: boolean;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTimeMinutes: number;
};
