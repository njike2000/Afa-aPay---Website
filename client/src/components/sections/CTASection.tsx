import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getLoginUrl } from '@/const';

/**
 * CTA (Call-to-Action) section component
 * Final section encouraging user signup
 */
export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {t('cta.title', 'Ready to Transform Your Business?')}
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          {t('cta.subtitle', 'Join thousands of businesses across Africa using Afa\'a Pay')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
            onClick={() => window.location.href = getLoginUrl()}
          >
            {t('cta.primary', 'Get Started Free')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
          >
            {t('cta.secondary', 'Schedule Demo')}
          </Button>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 pt-8 border-t border-blue-400">
          <p className="text-blue-100 text-sm">
            {t('cta.trust', 'No credit card required. Start free today.')}
          </p>
        </div>
      </div>
    </section>
  );
}
