// components/ProductImage.tsx – unchanged but small tweak for depth
interface ProductImageProps {
    title: string;
    gradientFrom?: string;
    gradientTo?: string;
    className?: string;
  }
  
  export default function ProductImage({ title, gradientFrom = '#8b5cf6', gradientTo = '#3b82f6', className = '' }: ProductImageProps) {
    return (
      <div
        className={`w-full aspect-[4/3] rounded-xl overflow-hidden relative ${className}`}
        style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        <div className="relative w-full h-full flex items-center justify-center p-6">
          <span className="text-2xl font-bold text-white/90 text-center leading-tight drop-shadow-2xl tracking-tight">
            {title}
          </span>
        </div>
      </div>
    );
  }