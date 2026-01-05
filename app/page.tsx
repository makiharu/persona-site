import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  // 全カテゴリから最新の投稿を取得
  const categories = ['engineer', 'magic', 'running', 'habits', 'notes'];
  const allPosts = categories.flatMap(category => {
    try {
      return getAllPosts(category);
    } catch {
      return [];
    }
  }).sort((a, b) => (a.date > b.date ? -1 : 1)).slice(0, 5);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-20">
        <p className="text-lg text-gray-700 leading-relaxed">
          考えたこと、試したこと、続けていることを静かに記録しています。
        </p>
      </div>

      {allPosts.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-gray-900 mb-8 tracking-wide uppercase">
            Recent
          </h2>
          <ul className="space-y-8">
            {allPosts.map((post) => (
              <li key={`${post.category}-${post.slug}`}>
                <Link
                  href={`/${post.category}/${post.slug}`}
                  className="group block"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline gap-3">
                      <time className="text-sm text-gray-500 font-mono">
                        {post.date}
                      </time>
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {post.description}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}