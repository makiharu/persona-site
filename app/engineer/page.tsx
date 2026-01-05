import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineer - makiharu',
  description: '技術的な思考と試行錯誤の記録',
};

export default function EngineerPage() {
  const posts = getAllPosts('engineer');

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-16">
        <h1 className="text-3xl font-semibold mb-6 tracking-tight">Engineer</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">
            技術的な詳細や再現性のある内容は、今後 Qiita / Zenn に整理していく予定です。<br />
            ここでは、その前段となる考えや試行錯誤を記録しています。
          </p>
        </div>
        <div className="mt-6 flex gap-4 text-sm">
          <Link
            href="/links"
            className="text-gray-600 hover:text-gray-900 underline underline-offset-2"
          >
            技術記事はこちら →
          </Link>
        </div>
      </div>

      {posts.length > 0 ? (
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/engineer/${post.slug}`} className="group block">
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