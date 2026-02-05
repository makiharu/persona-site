import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes - makiharu',
  description: '雑記',
};

export default function NotesPage() {
  const posts = getAllPosts('notes');

  return (
    <div className="max-w-[760px] mx-auto px-6 md:px-8 py-16 md:py-20">
      <div className="mb-20 md:mb-24">
        <h1 className="text-2xl md:text-3xl font-normal mb-8 text-gray-900">Notes</h1>
        <p className="text-sm md:text-base text-gray-500 leading-[1.8]">
          日々の雑記。
        </p>
      </div>

      <section>
        {posts.length > 0 ? (
          <ul className="space-y-10 md:space-y-12">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/notes/${post.slug}`} className="group block">
                  <article>
                    <time className="text-xs text-gray-300 font-mono tabular-nums block mb-2">
                      {post.date}
                    </time>
                    <h2 className="text-lg md:text-xl text-gray-900 group-hover:text-gray-400 transition-colors duration-500 leading-relaxed">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-sm text-gray-400 leading-relaxed mt-2">
                        {post.description}
                      </p>
                    )}
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-300">記事はまだありません。</p>
        )}
      </section>
    </div>
  );
}
