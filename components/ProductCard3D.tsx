'use client';

import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import ProductImage from './ProductImage';
import { ArrowRight } from 'lucide-react';

interface Product {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageGradient?: { from: string; to: string };
}

export default function ProductCard3D({ product, index }: { product: Product; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useMotionTemplate`${mouseY}`;
  const rotateY = useMotionTemplate`${mouseX}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: '-50px' }}
      className="group relative perspective-1000"
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02 }}
    >
      <Link href={`/products/${product.slug}`} className="block h-full">
        <div
          className="card-premium hover:bg-card-hover transition-all duration-500 overflow-hidden flex flex-col h-full"
          style={{
            transform: 'rotateX(var(--rx)) rotateY(var(--ry))',
            '--rx': rotateX,
            '--ry': rotateY,
          } as React.CSSProperties}
        >
          <div className="p-5 pb-0 relative overflow-hidden">
            <ProductImage
              title={product.title}
              gradientFrom={product.imageGradient?.from}
              gradientTo={product.imageGradient?.to}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="p-6 flex flex-col flex-1 relative z-10">
            <h3 className="text-xl font-display font-bold mb-2 group-hover:gradient-text transition-all duration-300">
              {product.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">{product.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {product.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 text-zinc-400 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-accent-purple group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center opacity-70 group-hover:opacity-100">
                <ArrowRight size={18} />
              </span>
            </div>
          </div>
          {/* Glow border effect */}
          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-500/30 transition-all duration-500 pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  );
}