export default function Footer() {
  return (
    <footer className="border-t border-gray-50 mt-40">
      <div className="max-w-4xl mx-auto px-8 py-20">
        <p className="text-xs text-gray-300 tracking-wider">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}