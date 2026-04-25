import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'UI Templates – Premium Next.js & Tailwind Kits',
  description: 'Clean, modern UI templates for developers. Built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-dark text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}