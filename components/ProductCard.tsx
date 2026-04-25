// components/ProductCard.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductImage from './ProductImage';
import { ArrowRight } from 'lucide-react';

interface Product {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageGradient?: { from: string; to: string };
}

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: '-50px' }}
      className="group card-premium hover:bg-card-hover hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col"
    >
      <Link href={`/products/${product.slug}`} className="flex flex-col h-full">
        <div className="p-5 pb-0">
          <ProductImage
            title={product.title}
            gradientFrom={product.imageGradient?.from}
            gradientTo={product.imageGradient?.to}
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
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
      </Link>
    </motion.div>
  );
}