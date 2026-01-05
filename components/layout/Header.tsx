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
    <header className="border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-6">
          <Link href="/" className="text-2xl font-semibold tracking-tight hover:opacity-70 transition-opacity">
            makiharu
          </Link>
          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/profile"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/links"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Links
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}