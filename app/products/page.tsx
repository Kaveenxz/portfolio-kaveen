import Container from '@/components/Container';
import ProductCard3D from '@/components/ProductCard3D';
import { products } from '@/data/products';
import { FadeIn } from '@/components/Motion';

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-24">
      <Container>
        <FadeIn className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-5">All Templates</h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Complete collection of premium UI kits. Click to preview and purchase.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <ProductCard3D key={product.slug} product={product} index={idx} />
          ))}
        </div>
      </Container>
    </div>
  );
}