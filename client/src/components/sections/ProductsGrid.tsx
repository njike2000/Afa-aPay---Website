import { useTranslation } from 'react-i18next';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/cards/ProductCard';

/**
 * Products grid section component
 * Displays all available products in a grid layout
 */
export default function ProductsGrid() {
  const { t } = useTranslation();
  const products = useProducts();

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('products.title', 'Our Products')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('products.subtitle', 'Complete payment infrastructure for every business type')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              id={product.id}
              icon={product.icon}
              name={product.name}
              shortDescription={product.shortDescription}
              slug={product.slug}
              features={product.features || []}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
