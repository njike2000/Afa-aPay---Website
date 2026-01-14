import { useTranslation } from 'react-i18next';
import { CheckCircle2, Lock, FileText, Users } from 'lucide-react';

/**
 * How It Works section component
 * Displays the 4-step process for using Afa'a Pay
 */
export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: CheckCircle2,
      title: t('howItWorks.step1.title', 'Create Account'),
      description: t('howItWorks.step1.desc', 'Sign up in minutes with your email'),
    },
    {
      icon: Lock,
      title: t('howItWorks.step2.title', 'Generate Payment Link'),
      description: t('howItWorks.step2.desc', 'Create unique payment links instantly'),
    },
    {
      icon: FileText,
      title: t('howItWorks.step3.title', 'Share & Collect'),
      description: t('howItWorks.step3.desc', 'Share via SMS, email, or QR code'),
    },
    {
      icon: Users,
      title: t('howItWorks.step4.title', 'Get Paid Safely'),
      description: t('howItWorks.step4.desc', 'Receive payments with escrow protection'),
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('howItWorks.title', 'How It Works')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('howItWorks.subtitle', 'Get started in 4 simple steps')}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="text-center">
                {/* Step Number */}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>

                {/* Step Description */}
                <p className="text-gray-600">{step.description}</p>

                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-8 w-8 h-0.5 bg-gray-200 transform translate-x-full" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
