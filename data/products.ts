export interface Product {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    imageGradient: { from: string; to: string };
    gumroadLink: string;
    features: string[];
    longDescription: string;
  }
  
  export const products: Product[] = [
    {
      slug: 'modern-portfolio',
      title: 'Modern Portfolio UI',
      description: 'A sleek, dark-themed portfolio for developers & designers.',
      tags: ['Next.js', 'Tailwind CSS'],
      imageGradient: { from: '#8b5cf6', to: '#3b82f6' },
      gumroadLink: 'https://gumroad.com/your-product-1',
      features: [
        'Fully responsive design',
        'Dark mode optimized',
        'Framer Motion animations',
        'Reusable component architecture',
        'Easy to customize',
      ],
      longDescription:
        'Showcase your work with confidence. This template blends minimalist aesthetics with smooth motion, ensuring your projects stand out.',
    },
    {
      slug: 'saas-landing',
      title: 'SaaS Landing Page',
      description: 'High-converting landing page for SaaS products.',
      tags: ['Next.js', 'TypeScript'],
      imageGradient: { from: '#6366f1', to: '#ec4899' },
      gumroadLink: 'https://gumroad.com/your-product-2',
      features: [
        'Hero section with CTA',
        'Feature grid',
        'Testimonials carousel',
        'Pricing table',
        'Newsletter integration ready',
      ],
      longDescription:
        'Designed to convert visitors into customers. Clean, fast, and SEO-friendly – built for modern SaaS startups.',
    },
    {
      slug: 'ecommerce-storefront',
      title: 'E‑commerce Storefront',
      description: 'Minimalist storefront with cart & product pages.',
      tags: ['Next.js', 'Tailwind CSS'],
      imageGradient: { from: '#06b6d4', to: '#3b82f6' },
      gumroadLink: 'https://gumroad.com/your-product-3',
      features: [
        'Product listing & detail pages',
        'Shopping cart UI',
        'Dark/light mode',
        'Smooth page transitions',
        'Stripe checkout ready',
      ],
      longDescription:
        'A clean, conversion-optimized storefront that puts your products center stage. Perfect for digital goods and indie makers.',
    },
    {
      slug: 'blog-platform',
      title: 'Blog Platform UI',
      description: 'Content-focused blog with reading progress & search.',
      tags: ['Next.js', 'TypeScript'],
      imageGradient: { from: '#f43f5e', to: '#d946ef' },
      gumroadLink: 'https://gumroad.com/your-product-4',
      features: [
        'Reading progress bar',
        'Tag filtering',
        'Search functionality',
        'MDX support',
        'Newsletter signup',
      ],
      longDescription:
        'Built for writers and publishers. This template emphasizes readability and interactivity, making content shine.',
    },
    {
      slug: 'dashboard-analytics',
      title: 'Dashboard Analytics',
      description: 'Admin dashboard with charts and data widgets.',
      tags: ['Next.js', 'Tailwind CSS'],
      imageGradient: { from: '#10b981', to: '#3b82f6' },
      gumroadLink: 'https://gumroad.com/your-product-5',
      features: [
        'Responsive sidebar navigation',
        'Data visualization widgets',
        'User management tables',
        'Dark mode',
        'Authentication flow',
      ],
      longDescription:
        'A modern admin interface to monitor metrics, manage users, and visualize data. Clean layout with focus on usability.',
    },
    {
      slug: 'creative-agency',
      title: 'Creative Agency',
      description: 'Bold, image-heavy portfolio for studios & agencies.',
      tags: ['Next.js', 'Tailwind CSS'],
      imageGradient: { from: '#f97316', to: '#ec4899' },
      gumroadLink: 'https://gumroad.com/your-product-6',
      features: [
        'Full-screen image hero',
        'Smooth scroll animations',
        'Case study pages',
        'Team section',
        'Contact form',
      ],
      longDescription:
        'Make a statement with large visuals and fearless typography. Ideal for creative agencies wanting a memorable brand presence.',
    },
    
  ];
  
  export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
  }