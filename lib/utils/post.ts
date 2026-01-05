import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content');

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description?: string;
  content: string;
};

export function getPostSlugs(category: string): string[] {
  const categoryPath = path.join(postsDirectory, category);
  if (!fs.existsSync(categoryPath)) {
    return [];
  }
  return fs.readdirSync(categoryPath).filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));
}

export function getPostBySlug(category: string, slug: string): Post {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(postsDirectory, category, `${realSlug}.md`);
  
  let fileContents;
  if (fs.existsSync(fullPath)) {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } else {
    const mdxPath = path.join(postsDirectory, category, `${realSlug}.mdx`);
    fileContents = fs.readFileSync(mdxPath, 'utf8');
  }

  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    date: data.date,
    category,
    description: data.description,
    content,
  };
}

export function getAllPosts(category: string): Post[] {
  const slugs = getPostSlugs(category);
  const posts = slugs
    .map((slug) => getPostBySlug(category, slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

export function getAllCategories(): string[] {
  return ['engineer', 'magic', 'running', 'habits', 'notes'];
}