import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import HeroSection from '@/components/sections/HeroSection';
import ProductsGrid from '@/components/sections/ProductsGrid';
import HowItWorks from '@/components/sections/HowItWorks';
import UseCasesSection from '@/components/sections/UseCasesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import CTASection from '@/components/sections/CTASection';

/**
 * Home page - Main landing page for Afa'a Pay
 * Displays product overview, features, use cases, testimonials, and pricing
 */
export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Products Grid */}
      <ProductsGrid />

      {/* How It Works */}
      <HowItWorks />

      {/* Use Cases */}
      <UseCasesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing */}
      <PricingSection />

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
