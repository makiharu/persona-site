import { Metadata } from 'next';
import Link from 'next/link';
import { EXTERNAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Profile - makiharu',
  description: 'プロフィール',
};

const sections = [
  { id: 'hi', name: 'Hi' },
  { id: 'links', name: 'Links' },
  { id: 'skill', name: 'Skill' },
  { id: 'certification', name: 'Certification' },
  { id: 'now', name: 'Now' },
];

export default function ProfilePage() {
  return (
    <div className="max-w-[760px] mx-auto px-6 md:px-8 py-16 md:py-20">
      <h1 className="text-2xl md:text-3xl font-normal mb-12 text-gray-900">About</h1>

      {/* Table of Contents */}
      <nav className="mb-20 pb-8 border-b border-gray-100">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-gray-400 hover:text-gray-900 transition-colors duration-500"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <div className="space-y-20">
        {/* Hi Section */}
        <section id="hi">
          <h2 className="text-xs uppercase tracking-wider text-gray-300 mb-6">Hi</h2>
          <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-3">
            <p>makiharuと申します。</p>
            <ul className="list-disc list-inside space-y-2 text-gray-500">
              <li>ソフトウェアエンジニアとして働いています</li>
              <li>技術、マジック、読書、習慣について考え、実践しています</li>
              <li>考えたことや試したことを静かに記録することを大切にしています</li>
            </ul>
          </div>
        </section>

        {/* Links Section */}
        <section id="links">
          <h2 className="text-xs uppercase tracking-wider text-gray-300 mb-6">Links</h2>
          <ul className="space-y-3 text-sm">
            {EXTERNAL_LINKS.HATENA_BLOG && (
              <li>
                <a
                  href={EXTERNAL_LINKS.HATENA_BLOG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-500"
                >
                  はてなブログ →
                </a>
              </li>
            )}
            {EXTERNAL_LINKS.GITHUB && (
              <li>
                <a
                  href={EXTERNAL_LINKS.GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-500"
                >
                  GitHub →
                </a>
              </li>
            )}
            <li>
              <span className="text-gray-300">Qiita（準備中）</span>
            </li>
            <li>
              <span className="text-gray-300">Zenn（準備中）</span>
            </li>
          </ul>
        </section>

        {/* Skill Section */}
        <section id="skill">
          <h2 className="text-xs uppercase tracking-wider text-gray-300 mb-6">Skill</h2>
          <div className="text-sm text-gray-500 leading-relaxed space-y-3">
            <p>等身大の範囲で、以下の技術を扱っています。</p>
            <ul className="list-disc list-inside space-y-1">
              <li>フロントエンド開発（React, Next.js, TypeScript）</li>
              <li>プロダクト開発</li>
            </ul>
          </div>
        </section>

        {/* Certification Section */}
        <section id="certification">
          <h2 className="text-xs uppercase tracking-wider text-gray-300 mb-6">Certification</h2>
          <p className="text-sm text-gray-300">学習中・準備中</p>
        </section>

        {/* Now Section */}
        <section id="now">
          <h2 className="text-xs uppercase tracking-wider text-gray-300 mb-6">Now</h2>
          <div className="text-sm text-gray-500 leading-relaxed space-y-2">
            <p>最近は以下に取り組んでいます。</p>
            <ul className="list-disc list-inside space-y-1">
              <li>個人ブログの構築と記事の執筆</li>
              <li>技術的な思考の言語化</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
