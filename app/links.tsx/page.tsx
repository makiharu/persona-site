import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Links - makiharu',
  description: '外部リンク集',
};

const links = [
  {
    category: '技術記事',
    items: [
      {
        name: 'Qiita',
        url: 'https://qiita.com/your-username',
        description: '技術的な記事を投稿しています',
      },
      {
        name: 'Zenn',
        url: 'https://zenn.dev/your-username',
        description: '技術的な記事やスクラップを公開しています',
      },
    ],
  },
  {
    category: 'コード',
    items: [
      {
        name: 'GitHub',
        url: 'https://github.com/your-username',
        description: 'プロジェクトやコードを公開しています',
      },
    ],
  },
  {
    category: 'SNS',
    items: [
      {
        name: 'Twitter / X',
        url: 'https://twitter.com/your-username',
        description: '日々の考えや活動について投稿しています',
      },
    ],
  },
];

export default function LinksPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-12 tracking-tight">Links</h1>
      
      <div className="space-y-12">
        {links.map((section) => (
          <section key={section.category}>
            <h2 className="text-sm font-semibold text-gray-900 mb-6 tracking-wide uppercase">
              {section.category}
            </h2>
            <ul className="space-y-6">
              {section.items.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors mb-1">
                      {link.name} ↗
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {link.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
} 