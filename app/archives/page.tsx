'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { getAllPostsFromAllCategories } from '@/lib/posts';
import type { Metadata } from 'next';

const categories = [
  { name: 'All', slug: '' },
  { name: 'Engineer', slug: 'engineer' },
  { name: 'Magic', slug: 'magic' },
  { name: 'Reading', slug: 'reading' },
  { name: 'Habits', slug: 'habits' },
  { name: 'Notes', slug: 'notes' },
];

export default function ArchivesPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const allPosts = getAllPostsFromAllCategories();

  // カテゴリでフィルタリング
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return allPosts;
    return allPosts.filter(post => post.category === selectedCategory);
  }, [allPosts, selectedCategory]);

  // 年ごとにグループ化
  const postsByYear = useMemo(() => {
    const grouped: Record<string, typeof filteredPosts> = {};
    filteredPosts.forEach(post => {
      const year = post.date.split('-')[0];
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(post);
    });
    return grouped;
  }, [filteredPosts]);

  const years = Object.keys(postsByYear).sort((a, b) => b.localeCompare(a));

  return (
    <div className="min-h-[70vh]">
      <div className="max-w-[760px] mx-auto px-6 md:px-8 py-16 md:py-20">
        <h1 className="text-2xl md:text-3xl font-normal mb-12 text-gray-900">Archives</h1>

        {/* Category Filter */}
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-wider text-gray-300 mb-4">Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`text-sm px-3 py-1 rounded transition-colors duration-500 ${
                  selectedCategory === cat.slug
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Posts by Year */}
        {years.length > 0 ? (
          <div className="space-y-16">
            {years.map((year) => (
              <section key={year}>
                <h2 className="text-xl font-normal mb-8 text-gray-900">{year}</h2>
                <ul className="space-y-6">
                  {postsByYear[year].map((post) => (
                    <li key={`${post.category}-${post.slug}`}>
                      <Link
                        href={`/${post.category}/${post.slug}`}
                        className="group block"
                      >
                        <article className="flex items-baseline gap-4">
                          <time className="text-xs text-gray-300 font-mono tabular-nums flex-shrink-0">
                            {post.date}
                          </time>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-baseline gap-2 mb-1">
                              <span className="text-xs text-gray-200 uppercase tracking-wider flex-shrink-0">
                                {post.category}
                              </span>
                              <h3 className="text-base text-gray-900 group-hover:text-gray-400 transition-colors duration-500">
                                {post.title}
                              </h3>
                            </div>
                            {post.tags && post.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-2">
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
                          </div>
                        </article>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-300">記事はまだありません。</p>
        )}
      </div>
    </div>
  );
}
