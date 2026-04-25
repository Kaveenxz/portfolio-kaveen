import Container from '@/components/Container';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-zinc-400 mb-6">This page doesn’t exist.</p>
        <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
          Go back home →
        </Link>
      </Container>
    </div>
  );
}