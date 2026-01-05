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
  }).sort((a, b) => (a.date > b.date ? -1 : 1)).slice(0, 8);

  return (
    <div className="min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-8 py-24 md:py-32">
        <div className="mb-32 md:mb-40">
          <p className="text-lg md:text-xl text-gray-600 leading-[1.8] font-light tracking-wide max-w-2xl">
            考えたこと、試したこと、続けていることを記録しています。
          </p>
        </div>

        {allPosts.length > 0 && (
          <section>
            <ul className="space-y-16 md:space-y-20">
              {allPosts.map((post) => (
                <li key={`${post.category}-${post.slug}`}>
                  <Link
                    href={`/${post.category}/${post.slug}`}
                    className="group block"
                  >
                    <article className="space-y-3">
                      <div className="flex items-center gap-4 text-xs tracking-wider">
                        <time className="text-gray-300 font-mono tabular-nums">
                          {post.date}
                        </time>
                        <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                        <span className="text-gray-300 uppercase text-[10px] tracking-[0.15em]">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-light text-gray-900 group-hover:text-gray-400 transition-all duration-500 leading-snug tracking-tight">
                        {post.title}
                      </h2>
                      {post.description && (
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed pt-2 max-w-2xl">
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