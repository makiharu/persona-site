import { getPostBySlug, getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllPosts('habits');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug('habits', params.slug);
  return {
    title: `${post.title} - makiharu`,
    description: post.description || post.title,
  };
}

export default function HabitsPostPage({ params }: Props) {
  const post = getPostBySlug('habits', params.slug);

  return (
    <div className="max-w-[760px] mx-auto px-6 md:px-8 py-16 md:py-20">
      <Link
        href="/habits"
        className="text-sm text-gray-300 hover:text-gray-900 transition-colors duration-500 inline-block mb-12"
      >
        ← Habits
      </Link>

      <article>
        <header className="mb-16">
          <div className="flex items-baseline gap-3 mb-6">
            <time className="text-xs text-gray-300 font-mono tabular-nums">
              {post.date}
            </time>
            <span className="text-xs text-gray-200 uppercase tracking-wider">
              habits
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-normal mb-6 text-gray-900 leading-snug">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-base text-gray-500 leading-relaxed">
              {post.description}
            </p>
          )}
        </header>

        <div className="prose prose-gray prose-sm md:prose-base max-w-none
          prose-headings:font-normal prose-headings:text-gray-900
          prose-p:text-gray-700 prose-p:leading-relaxed
          prose-a:text-gray-900 prose-a:no-underline hover:prose-a:text-gray-400
          prose-code:text-gray-900 prose-code:bg-gray-50 prose-code:px-1 prose-code:py-0.5
          prose-pre:bg-gray-50 prose-pre:text-gray-900
          prose-blockquote:text-gray-500 prose-blockquote:border-gray-200
          prose-strong:text-gray-900 prose-strong:font-semibold
        ">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
