import { Smartphone, Globe, Wallet, CreditCard, DollarSign, QrCode, Link2, BarChart3, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getLoginUrl } from '@/const';

export default function PaymentFacilitator() {
  const paymentMethods = [
    { name: 'MTN Money', icon: '📱', color: 'bg-yellow-100' },
    { name: 'Orange Money', icon: '🟠', color: 'bg-orange-100' },
    { name: 'PayPal', icon: '🅿️', color: 'bg-blue-100' },
    { name: 'Bank Transfer', icon: '🏦', color: 'bg-green-100' },
    { name: 'Card Payment', icon: '💳', color: 'bg-purple-100' },
    { name: 'Crypto', icon: '₿', color: 'bg-yellow-100' },
  ];

  const benefits = [
    {
      icon: Link2,
      title: 'One Payment Link',
      description: 'Share a single link that accepts all payment methods - no need to create multiple payment pages',
    },
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Generate payment links in seconds with no technical knowledge required',
    },
    {
      icon: Lock,
      title: 'Secure & Escrow-Protected',
      description: 'All payments are protected by Afa\'a Pay\'s escrow until delivery confirmation',
    },
    {
      icon: Globe,
      title: '24/7 Availability',
      description: 'Accept payments anytime, anywhere - your customers choose their preferred method',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track all payments, conversion rates, and customer behavior in real-time',
    },
    {
      icon: QrCode,
      title: 'QR Code Generation',
      description: 'Generate QR codes for your payment links - perfect for physical and digital marketing',
    },
  ];

  const useCases = [
    {
      title: 'Individual Sellers & C2C',
      items: [
        'Sell items on marketplace platforms',
        'Collect payments from friends and family',
        'Accept donations and tips',
        'Freelance service payments',
      ],
    },
    {
      title: 'SMEs & Traders',
      items: [
        'Invoice customers instantly',
        'Accept online store payments',
        'Collect deposits and pre-orders',
        'Manage supplier payments',
      ],
    },
    {
      title: 'Enterprises',
      items: [
        'B2B payment collection',
        'Multi-currency transactions',
        'Bulk payment processing',
        'Automated reconciliation',
      ],
    },
    {
      title: 'Financial Institutions',
      items: [
        'White-label payment solutions',
        'API integration for platforms',
        'Compliance and audit trails',
        'Enterprise-grade security',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
            Payment Facilitator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            One Payment Link. All Payment Methods.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Accept payments from anyone, anywhere, using their preferred payment method. One unified link powers all transactions with Afa'a Pay's trust infrastructure.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#001F3F] mb-8 text-center">Supported Payment Methods</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className={`${method.color} rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow`}
              >
                <div className="text-4xl mb-3">{method.icon}</div>
                <div className="font-semibold text-[#001F3F] text-sm">{method.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16 bg-gray-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-[#001F3F] mb-8 text-center">How Payment Links Work</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h4 className="text-xl font-bold text-[#001F3F] mb-3">Create Link</h4>
              <p className="text-gray-600">
                Generate a unique payment link for your product, service, or invoice in seconds
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h4 className="text-xl font-bold text-[#001F3F] mb-3">Share Link</h4>
              <p className="text-gray-600">
                Share via SMS, email, social media, or QR code - customers choose their payment method
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h4 className="text-xl font-bold text-[#001F3F] mb-3">Get Paid</h4>
              <p className="text-gray-600">
                Funds are held in escrow and released upon delivery confirmation - zero fraud risk
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#001F3F] mb-8 text-center">Key Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 text-[#2ECC71] mb-4" />
                  <h4 className="text-lg font-bold text-[#001F3F] mb-3">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#001F3F] mb-8 text-center">Perfect For All Business Types</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-gray-50 rounded-lg p-8">
                <h4 className="text-lg font-bold text-[#001F3F] mb-4">{useCase.title}</h4>
                <ul className="space-y-2">
                  {useCase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <span className="text-[#2ECC71] font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            className="bg-[#2ECC71] text-white hover:bg-[#26B35F] text-lg px-8 py-6"
            onClick={() => window.location.href = getLoginUrl()}
          >
            Create Your First Payment Link
          </Button>
        </div>
      </div>
    </section>
  );
}
