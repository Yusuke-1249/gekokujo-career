export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
          <a href="/terms" className="hover:text-sun transition-colors">
            利用規約
          </a>
          <span className="text-gray-500">|</span>
          <a href="/privacy" className="hover:text-sun transition-colors">
            プライバシーポリシー
          </a>
          <span className="text-gray-500">|</span>
          <a href="https://www.apoial.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sun transition-colors">
            運営会社
          </a>
        </div>
        <div className="text-center text-sm text-gray-400">
          <p>© 2024 下剋上キャリア ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}