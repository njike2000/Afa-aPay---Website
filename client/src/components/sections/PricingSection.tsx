import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { getLoginUrl } from '@/const';

/**
 * Pricing section component
 * Displays pricing tiers for different business types
 */
export default function PricingSection() {
  const { t } = useTranslation();

  const tiers = [
    {
      name: t('pricing.starter.name', 'Starter'),
      price: t('pricing.starter.price', 'Free'),
      description: t('pricing.starter.desc', 'Perfect for individuals and small sellers'),
      features: [
        'Payment Links',
        'Escrow Protection',
        'Basic Analytics',
        'Email Support',
      ],
    },
    {
      name: t('pricing.professional.name', 'Professional'),
      price: t('pricing.professional.price', '$99/month'),
      description: t('pricing.professional.desc', 'For growing SMEs and traders'),
      features: [
        'All Starter features',
        'POS System',
        'Advanced Analytics',
        'Priority Support',
        'API Access',
      ],
      highlighted: true,
    },
    {
      name: t('pricing.enterprise.name', 'Enterprise'),
      price: t('pricing.enterprise.price', 'Custom'),
      description: t('pricing.enterprise.desc', 'For large businesses and institutions'),
      features: [
        'All Professional features',
        'Payment Facilitator',
        'Dedicated Account Manager',
        '24/7 Support',
        'Custom Integration',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('pricing.title', 'Simple, Transparent Pricing')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle', 'Choose the plan that fits your business')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-8 ${
                tier.highlighted
                  ? 'bg-blue-600 text-white border-2 border-blue-600 transform scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Tier Name */}
              <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {tier.name}
              </h3>

              {/* Description */}
              <p className={`text-sm mb-4 ${tier.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {tier.description}
              </p>

              {/* Price */}
              <div className={`text-4xl font-bold mb-6 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {tier.price}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${tier.highlighted ? 'text-white' : 'text-green-600'}`} />
                    <span className={tier.highlighted ? 'text-white' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className="w-full"
                variant={tier.highlighted ? 'default' : 'outline'}
                onClick={() => window.location.href = getLoginUrl()}
              >
                {t('pricing.cta', 'Get Started')}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
