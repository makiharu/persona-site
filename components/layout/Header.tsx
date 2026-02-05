import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/profile' },
  { name: 'Archives', href: '/archives' },
  { name: 'Search', href: '/search' },
];

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-[760px] mx-auto px-6 md:px-8 py-6 md:py-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-base md:text-lg font-normal text-gray-900 hover:text-gray-400 transition-colors duration-500"
          >
            makiharu
          </Link>
          <nav>
            <ul className="flex gap-x-6 text-sm text-gray-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-900 transition-colors duration-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}