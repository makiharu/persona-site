import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

const categories = [
  { name: 'Engineer', slug: 'engineer' },
  { name: 'Magic', slug: 'magic' },
  { name: 'Reading', slug: 'reading' },
  { name: 'Habits', slug: 'habits' },
  { name: 'Notes', slug: 'notes' },
];

export default function Home() {
  // 全カテゴリから最新の投稿を取得
  const allPosts = categories.flatMap(cat => {
    try {
      return getAllPosts(cat.slug);
    } catch {
      return [];
    }
  }).sort((a, b) => (a.date > b.date ? -1 : 1)).slice(0, 10);

  return (
    <div className="min-h-[70vh]">
      <div className="max-w-[760px] mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Hero */}
        <div className="mb-20 md:mb-24">
          <p className="text-base md:text-lg text-gray-500 leading-[1.9]">
            考えたこと、試したこと、続けていることを静かに記録しています。
          </p>
        </div>

        {/* Navigation Blocks */}
        <div className="mb-20 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Categories */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-gray-300 mb-4">Categories</h2>
            <ul className="space-y-2 text-sm">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-gray-500 hover:text-gray-900 transition-colors duration-500"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Archives */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-gray-300 mb-4">Archives</h2>
            <Link
              href="/archives"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-500"
            >
              すべての記事を見る →
            </Link>
          </section>
        </div>

        {/* Recent Posts */}
        {allPosts.length > 0 && (
          <section>
            <h2 className="text-xs uppercase tracking-wider text-gray-300 mb-8">Recent</h2>
            <ul className="space-y-10 md:space-y-12">
              {allPosts.map((post) => (
                <li key={`${post.category}-${post.slug}`}>
                  <Link
                    href={`/${post.category}/${post.slug}`}
                    className="group block"
                  >
                    <article>
                      <div className="flex items-baseline gap-3 mb-2">
                        <time className="text-xs text-gray-300 font-mono tabular-nums">
                          {post.date}
                        </time>
                        <span className="text-xs text-gray-200 uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
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
          </section>
        )}
      </div>
    </div>
  );
}