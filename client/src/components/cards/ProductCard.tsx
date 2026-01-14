import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { LucideIcon } from 'lucide-react';

/**
 * Props for ProductCard component
 */
interface ProductCardProps {
  id: string;
  icon: LucideIcon;
  name: string;
  shortDescription: string;
  slug: string;
  features: string[];
}

/**
 * Product card component displaying product information
 * @param props - Product card properties
 * @returns JSX element
 */
export default function ProductCard({
  id,
  icon: Icon,
  name,
  shortDescription,
  slug,
  features,
}: ProductCardProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      {/* Icon */}
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4">{shortDescription}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.slice(0, 3).map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link href={`/product/${slug}`}>
        <Button variant="outline" className="w-full">
          {t('common.learnMore', 'Learn More')}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </div>
  );
}
