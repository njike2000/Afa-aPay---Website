import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { getLoginUrl } from '@/const';

/**
 * Hero section component for the home page
 * Displays main headline, value proposition, and CTA buttons
 */
export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-blue-200 mb-6">
          <Shield className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-gray-700">{t('hero.badge', 'Trusted by 50,000+ users')}</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {t('hero.title', 'Secure Digital Payments for Africa')}
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {t('hero.subtitle', 'Accept payments safely with escrow protection, digital contracts, and fair mediation. Build trust. Grow your business.')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            onClick={() => window.location.href = getLoginUrl()}
          >
            {t('hero.cta.primary', 'Get Started Free')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg border-2"
          >
            {t('hero.cta.secondary', 'Watch Demo')}
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
          <div>
            <div className="text-3xl font-bold text-blue-600">50K+</div>
            <div className="text-gray-600">{t('hero.stats.users', 'Active Users')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">$500M+</div>
            <div className="text-gray-600">{t('hero.stats.volume', 'Transaction Volume')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">95%</div>
            <div className="text-gray-600">{t('hero.stats.satisfaction', 'Satisfaction Rate')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
