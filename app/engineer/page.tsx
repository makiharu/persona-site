import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { EXTERNAL_LINKS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineer - makiharu',
  description: '技術的な思考と試行錯誤の記録',
};

export default function EngineerPage() {
  const posts = getAllPosts('engineer');

  return (
    <div className="max-w-[760px] mx-auto px-6 md:px-8 py-16 md:py-20">
      <div className="mb-20 md:mb-24">
        <h1 className="text-2xl md:text-3xl font-normal mb-8 text-gray-900">Engineer</h1>
        <div className="space-y-3 text-sm md:text-base text-gray-500 leading-[1.8]">
          <p>
            技術記事は現在はてなブログに掲載しています。必要に応じてQiita/Zennにも整理していく予定です。
          </p>
          <p>
            ここでは、その前段となる考えや試行錯誤を記録しています。
          </p>
        </div>
        <div className="mt-8 flex gap-6 text-sm">
          {EXTERNAL_LINKS.HATENA_BLOG && (
            <a
              href={EXTERNAL_LINKS.HATENA_BLOG}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors duration-500"
            >
              はてなブログ →
            </a>
          )}
          <Link
            href="/links"
            className="text-gray-400 hover:text-gray-900 transition-colors duration-500"
          >
            その他のリンク →
          </Link>
        </div>
      </div>

      <section>
        {posts.length > 0 ? (
          <ul className="space-y-10 md:space-y-12">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/engineer/${post.slug}`} className="group block">
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