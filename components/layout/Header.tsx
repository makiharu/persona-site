import Link from 'next/link';

const categories = [
  { name: 'Engineer', href: '/engineer' },
  { name: 'Magic', href: '/magic' },
  { name: 'Running', href: '/running' },
  { name: 'Habits', href: '/habits' },
  { name: 'Notes', href: '/notes' },
];

export default function Header() {
  return (
    <header className="border-b border-gray-50">
      <div className="max-w-4xl mx-auto px-8 py-16 md:py-20">
        <Link 
          href="/" 
          className="inline-block text-2xl font-light tracking-[-0.03em] text-gray-900 hover:text-gray-500 transition-colors mb-12"
        >
          Your Name
        </Link>
        <nav className="mt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <ul className="flex flex-col md:flex-row gap-y-3 gap-x-8 text-sm">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-gray-400 hover:text-gray-900 transition-all duration-300 inline-block"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex gap-8 text-sm">
              <li>
                <Link
                  href="/profile"
                  className="text-gray-400 hover:text-gray-900 transition-all duration-300"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/links"
                  className="text-gray-400 hover:text-gray-900 transition-all duration-300"
                >
                  Links
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}