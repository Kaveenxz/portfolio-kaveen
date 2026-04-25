import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import Button from '@/components/Button';
import ProductImage from '@/components/ProductImage';
import { getProductBySlug, products } from '@/data/products';
import { Check, ExternalLink } from 'lucide-react';
import { FadeIn } from '@/components/Motion';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <div className="pt-28 pb-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <ProductImage
              title={product.title}
              gradientFrom={product.imageGradient.from}
              gradientTo={product.imageGradient.to}
              className="w-full aspect-[4/3] rounded-2xl shadow-2xl shadow-purple-500/10"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-5 gradient-text">
              {product.title}
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">{product.longDescription}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {product.tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full border border-white/10 text-zinc-300 bg-white/5">
                  {tag}
                </span>
              ))}
            </div>
            <Button href={product.gumroadLink} external className="w-full sm:w-auto inline-flex items-center gap-2 text-lg px-8 py-4">
              Get Code <ExternalLink size={18} />
            </Button>
          </FadeIn>
        </div>

        <section className="mt-24">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-8">More Previews</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <ProductImage
                  title={`${product.title} – Screen ${i}`}
                  gradientFrom={product.imageGradient.from}
                  gradientTo={product.imageGradient.to}
                  className="w-full aspect-[4/3] rounded-xl shadow-lg"
                />
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-8">What’s included</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {product.features.map((feature, idx) => (
              <FadeIn key={feature} delay={idx * 0.05}>
                <div className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <div className="mt-0.5 bg-purple-500/10 p-1 rounded-full">
                    <Check size={16} className="text-purple-400" />
                  </div>
                  <span className="text-zinc-300 text-base">{feature}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}