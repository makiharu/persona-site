export default function Footer() {
  return (
    <footer className="mt-32 md:mt-40 border-t border-gray-100">
      <div className="max-w-[760px] mx-auto px-6 md:px-8 py-12 md:py-16">
        <p className="text-xs text-gray-200">
          © {new Date().getFullYear()} makiharu
        </p>
      </div>
    </footer>
  );
}