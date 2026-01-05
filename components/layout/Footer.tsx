export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} makiharu
        </p>
      </div>
    </footer>
  );
}