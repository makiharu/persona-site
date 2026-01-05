import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magic - makiharu',
  description: 'マジックについての考察と記録',
};

export default function MagicPage() {
  const posts = getAllPosts('magic');

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-16">
        <h1 className="text-3xl font-semibold mb-6 tracking-tight">Magic</h1>
        <p className="text-gray-700 leading-relaxed">
          マジックに関する考えや実践の記録。
        </p>
      </div>

      {posts.length > 0 ? (
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/magic/${post.slug}`} className="group block">
                <article>
                  <time className="text-sm text-gray-500 font-mono block mb-2">
                    {post.date}
                  </time>
                  <h2 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {post.description}
                    </p>
                  )}
                </article>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">記事はまだありません。</p>
      )}
    </div>
  );
}