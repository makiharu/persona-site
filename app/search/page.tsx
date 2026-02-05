'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { getAllPostsFromAllCategories } from '@/lib/posts';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const allPosts = getAllPostsFromAllCategories();

  // 検索結果のフィルタリング
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    return allPosts.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(lowerQuery);
      const tagMatch = post.tags?.some(tag => tag.toLowerCase().includes(lowerQuery));
      const descriptionMatch = post.description?.toLowerCase().includes(lowerQuery);
      return titleMatch || tagMatch || descriptionMatch;
    });
  }, [allPosts, query]);

  return (
    <div className="min-h-[70vh]">
      <div className="max-w-[760px] mx-auto px-6 md:px-8 py-16 md:py-20">
        <h1 className="text-2xl md:text-3xl font-normal mb-12 text-gray-900">Search</h1>

        {/* Search Input */}
        <div className="mb-16">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="タイトル、タグ、説明文で検索..."
            className="w-full px-4 py-3 border border-gray-100 focus:border-gray-300 focus:outline-none transition-colors duration-500 text-base text-gray-900 placeholder-gray-300"
          />
        </div>

        {/* Search Results */}
        {query.trim() && (
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-300 mb-8">
              {searchResults.length} 件の結果
            </p>
            {searchResults.length > 0 ? (
              <ul className="space-y-10 md:space-y-12">
                {searchResults.map((post) => (
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
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs text-gray-300"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </article>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-300">該当する記事が見つかりませんでした。</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
