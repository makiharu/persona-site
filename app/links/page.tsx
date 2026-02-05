import { Metadata } from 'next';
import { EXTERNAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Links - makiharu',
  description: '外部リンク集',
};

const links = [
  {
    category: '技術記事',
    items: [
      {
        name: 'はてなブログ',
        url: EXTERNAL_LINKS.HATENA_BLOG,
        description: '技術記事を掲載しています',
        status: EXTERNAL_LINKS.HATENA_BLOG ? '' : '準備中',
      },
      {
        name: 'Qiita',
        url: EXTERNAL_LINKS.QIITA || '#',
        description: '技術記事を整理していく予定です',
        status: '準備中',
      },
      {
        name: 'Zenn',
        url: EXTERNAL_LINKS.ZENN || '#',
        description: '技術記事を整理していく予定です',
        status: '準備中',
      },
    ],
  },
  {
    category: 'コード',
    items: [
      {
        name: 'GitHub',
        url: EXTERNAL_LINKS.GITHUB,
        description: 'プロジェクトやコードを公開しています',
        status: EXTERNAL_LINKS.GITHUB ? '' : '準備中',
      },
    ],
  },
  ...(EXTERNAL_LINKS.TWITTER
    ? [
        {
          category: 'SNS',
          items: [
            {
              name: 'Twitter / X',
              url: EXTERNAL_LINKS.TWITTER,
              description: '日々の考えや活動について投稿しています',
              status: '',
            },
          ],
        },
      ]
    : []),
];

export default function LinksPage() {
  return (
    <div className="min-h-[70vh]">
      <div className="max-w-[760px] mx-auto px-6 md:px-8 py-16 md:py-20">
        <h1 className="text-2xl md:text-3xl font-normal mb-12 text-gray-900">Links</h1>

        <div className="space-y-16">
          {links.map((section) => (
            <section key={section.category}>
              <h2 className="text-xs uppercase tracking-wider text-gray-300 mb-6">
                {section.category}
              </h2>
              <ul className="space-y-8">
                {section.items.map((link) => (
                  <li key={link.name}>
                    {link.status === '準備中' ? (
                      <div className="group">
                        <div className="flex items-baseline gap-2 mb-1">
                          <h3 className="text-base text-gray-300">
                            {link.name}
                          </h3>
                          <span className="text-xs text-gray-200">
                            {link.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {link.description}
                        </p>
                      </div>
                    ) : (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <h3 className="text-base text-gray-900 group-hover:text-gray-400 transition-colors duration-500 mb-1">
                          {link.name} →
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {link.description}
                        </p>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
