import { useTranslation } from 'react-i18next';
import { useAllUseCases } from '@/hooks/useUseCases';
import UseCaseCard from '@/components/cards/UseCaseCard';

/**
 * Use Cases section component
 * Displays use cases for different business segments
 */
export default function UseCasesSection() {
  const { t } = useTranslation();
  const useCases = useAllUseCases();

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('useCases.title', 'Use Cases')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('useCases.subtitle', 'How different businesses use Afa\'a Pay')}
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}
