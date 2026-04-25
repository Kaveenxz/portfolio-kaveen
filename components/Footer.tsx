export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold gradient-text text-lg">UI Templates</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}