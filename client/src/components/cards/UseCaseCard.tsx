import { UseCase } from '@/data/useCases';
import { LucideIcon } from 'lucide-react';

/**
 * Props for UseCaseCard component
 */
interface UseCaseCardProps {
  useCase: UseCase;
}

/**
 * Use case card component displaying use case information
 * @param props - Use case card properties
 * @returns JSX element
 */
export default function UseCaseCard({ useCase }: UseCaseCardProps) {
  const Icon = useCase.icon as LucideIcon;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      {/* Icon */}
      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-green-600" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4">{useCase.description}</p>

      {/* Metrics */}
      <div className="space-y-2">
        {useCase.metrics.slice(0, 2).map((metric, idx) => (
          <div key={idx} className="flex justify-between items-center text-sm">
            <span className="text-gray-600">{metric.label}</span>
            <span className="font-bold text-green-600">{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
