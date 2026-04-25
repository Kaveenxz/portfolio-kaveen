// components/Button.tsx
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, href, external, variant = 'primary', className = '', onClick }: ButtonProps) {
  const base = `inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-base ${
    variant === 'primary'
      ? 'bg-hero-gradient text-white shadow-glow hover:shadow-glow-blue hover:scale-[1.02] active:scale-[0.98]'
      : 'border border-white/10 text-white/80 hover:bg-white/5 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]'
  } ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
}