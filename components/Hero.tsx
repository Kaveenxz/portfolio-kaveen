'use client';

import Container from './Container';
import Button from './Button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

      {/* Animated blobs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      <Container className="relative z-10 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
            Build stunning <br />
            <span className="gradient-text text-glow">interfaces faster</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Premium, production-ready Next.js & Tailwind CSS templates. Designed for developers who demand excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Button href="/products" variant="primary" className="text-lg px-10 py-5">
              Explore Templates
            </Button>
            <Button href="#about" variant="secondary" className="text-lg px-10 py-5">
              Learn More
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}