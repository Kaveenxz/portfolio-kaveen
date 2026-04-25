import Container from '@/components/Container';
import Hero from '@/components/Hero';
import ProductCard3D from '@/components/ProductCard3D';
import { products } from '@/data/products';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Motion';
import { Zap, Palette, Rocket, Shield } from 'lucide-react';
import Button from '@/components/Button';

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Featured Products Bento Grid */}
      <section className="py-28">
        <Container>
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-5">
              Premium Templates
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Start with a polished foundation. Each template is ready to clone and customize.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {featuredProducts.map((product, idx) => (
        <ProductCard3D key={product.slug} product={product} index={idx} />
      ))}
    </div>
        </Container>
      </section>

      {/* Value proposition with stronger icons */}
      <section id="about" className="py-28 border-t border-white/5">
        <Container>
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-5">
              Designed for developers
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Every template is crafted with performance, maintainability, and beauty in mind.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Blazing Fast', desc: 'Optimized Core Web Vitals out of the box.' },
              { icon: Palette, title: 'Pixel Perfect', desc: 'Stunning designs that convert visitors.' },
              { icon: Rocket, title: 'Production Ready', desc: 'TypeScript, Next.js, and Tailwind best practices.' },
              { icon: Shield, title: 'Reliable Support', desc: 'Free updates and community support.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-card-hover transition-all duration-300 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-500">
                    <item.icon size={24} className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Testimonial / Social Proof */}
      <section className="py-28 bg-dark-surface/30">
        <Container>
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-5">
              Trusted by developers
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Join hundreds of satisfied customers building with our templates.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Saved me weeks of work. The code quality is exceptional.", author: "Alex Rivera, Frontend Lead" },
              { quote: "Finally, templates that look as good as they perform.", author: "Jamie Chen, Indie Maker" },
              { quote: "My clients love the speed and design. It's a no-brainer.", author: "Morgan Lee, Freelancer" },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] relative">
                  <div className="text-5xl font-display font-bold gradient-text mb-4">“</div>
                  <p className="text-zinc-300 text-base mb-6">{t.quote}</p>
                  <p className="text-zinc-500 text-sm font-medium">{t.author}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA with code background effect */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-10 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/code-bg.svg')] opacity-5" />
        <Container className="relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to ship faster?
            </h2>
            <p className="text-zinc-400 text-xl mb-10">
              Grab a template and launch your next project today.
            </p>
            <Button href="/products" variant="primary" className="text-lg px-12 py-5">
              View All Templates
            </Button>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}