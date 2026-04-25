'use client';

import Link from 'next/link';
import Container from './Container';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-purple-500/5'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-2xl font-display font-bold gradient-text tracking-tight hover:opacity-90 transition-opacity"
          >
            UI Templates
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="/products" className="hover:text-white transition-colors relative group py-2">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <a href="#about" className="hover:text-white transition-colors relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden pb-6 border-t border-white/5 pt-4 flex flex-col gap-4 text-base font-medium text-zinc-400">
            <Link href="/products" onClick={() => setOpen(false)} className="hover:text-white transition-colors py-1">
              Products
            </Link>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-white transition-colors py-1">
              About
            </a>
          </div>
        )}
      </Container>
    </header>
  );
}