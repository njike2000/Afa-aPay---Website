import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, Lock, FileText, Users, ArrowRight, Shield, Clock, Zap, 
  Link2, QrCode, BarChart3, Globe, Smartphone, CreditCard, Star, TrendingUp
} from "lucide-react";
import { getLoginUrl } from "@/const";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth();
  const { t } = useTranslation();

  const products = [
    {
      icon: Link2,
      title: "Payment Link",
      description: "Generate unique payment links that accept all payment methods. Share via SMS, email, or QR code.",
      features: ["One link, all methods", "Instant setup", "QR code generation", "Real-time analytics"],
    },
    {
      icon: Smartphone,
      title: "POS System",
      description: "Accept in-store and mobile payments with built-in escrow protection and digital receipts.",
      features: ["Offline capability", "Digital receipts", "Inventory sync", "Staff management"],
    },
    {
      icon: Globe,
      title: "Payment Facilitator",
      description: "Aggregate all payment methods in one platform. Support MTN Money, Orange Money, PayPal, Bank Transfer, Card, and Crypto.",
      features: ["6 payment methods", "Unified dashboard", "Instant settlement", "Multi-currency"],
    },
    {
      icon: FileText,
      title: "Digital Contracts",
      description: "Every transaction automatically generates legally binding digital contracts with e-signatures.",
      features: ["Auto-generated", "E-signature ready", "Immutable records", "Audit trails"],
    },
    {
      icon: Users,
      title: "Mediation Platform",
      description: "Fair, transparent dispute resolution. 95% resolution rate in 24-72 hours with human oversight.",
      features: ["Fair arbitration", "24-72hr resolution", "95% success rate", "Neutral mediators"],
    },
    {
      icon: TrendingUp,
      title: "Trust Score",
      description: "Build a verifiable reputation that unlocks better credit terms and business opportunities.",
      features: ["Reputation tracking", "Credit history", "Unlock benefits", "Business growth"],
    },
  ];

  const useCases = [
    {
      segment: "Individuals & C2C",
      icon: Users,
      description: "Sell items online, send remittances, freelance work",
      benefits: ["Buyer protection", "Seller assurance", "Zero fees between users", "Fast resolution"],
    },
    {
      segment: "SMEs & Traders",
      icon: Smartphone,
      description: "Invoice customers, manage supply chain, reduce credit loss",
      benefits: ["90% credit loss reduction", "Automated reconciliation", "Build trust score", "Supplier payments"],
    },
    {
      segment: "Enterprises",
      icon: Shield,
      description: "B2B payments, multi-currency transactions, bulk processing",
      benefits: ["Enterprise API", "Dedicated support", "Custom integration", "Compliance ready"],
    },
    {
      segment: "Financial Institutions",
      icon: BarChart3,
      description: "White-label solutions, platform integration, customer empowerment",
      benefits: ["White-label option", "API integration", "Compliance certified", "Enterprise security"],
    },
  ];

  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Online Seller",
      text: "Afa'a Pay gave me confidence to sell online. I no longer worry about payment fraud or non-payment.",
      rating: 5,
    },
    {
      name: "Jean-Pierre Dubois",
      role: "SME Owner",
      text: "Reduced our credit loss by 85%. The digital contracts and escrow system transformed our business.",
      rating: 5,
    },
    {
      name: "Dr. Kofi Mensah",
      role: "Government Official",
      text: "Implemented Afa'a Pay for tax collection. Transparency and citizen satisfaction increased significantly.",
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for testing and small transactions",
      features: [
        "Up to 10 transactions/month",
        "Basic payment link",
        "Email support",
        "Standard settlement",
        "Basic analytics",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "2%",
      description: "For growing businesses",
      features: [
        "Unlimited transactions",
        "Advanced payment links",
        "Priority support",
        "Instant settlement",
        "Advanced analytics",
        "Escrow services",
        "API access",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Custom transaction limits",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom settlement terms",
        "Custom analytics",
        "Advanced escrow features",
        "Full API access",
        "White-label options",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Afa'a Pay" className="h-10" />
        
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-gray-700 hover:text-[#2ECC71] transition">Products</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#2ECC71] transition">How It Works</a>
            <a href="#use-cases" className="text-gray-700 hover:text-[#2ECC71] transition">Use Cases</a>
            <a href="#pricing" className="text-gray-700 hover:text-[#2ECC71] transition">Pricing</a>
            <a href="/demo" className="text-gray-700 hover:text-[#2ECC71] transition">Demo</a>
            <a href="/blog" className="text-gray-700 hover:text-[#2ECC71] transition">Blog</a>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            {isAuthenticated ? (
              <>
                <span className="text-gray-700">Welcome, {user?.name}</span>
                <Button 
                  variant="outline" 
                  className="border-[#2ECC71] text-[#2ECC71] hover:bg-[#2ECC71] hover:text-white"
                  onClick={logout}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  className="border-[#2ECC71] text-[#2ECC71] hover:bg-[#2ECC71] hover:text-white"
                  onClick={() => window.location.href = getLoginUrl()}
                >
                  Sign In
                </Button>
                <Button 
                  className="bg-[#2ECC71] text-white hover:bg-[#26B35F]"
                  onClick={() => window.location.href = getLoginUrl()}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#001F3F] to-[#003D5C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Secure Digital Payments for Africa
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Stop worrying about payment fraud, non-payment, and disputes. Afa'a Pay is the trust infrastructure that protects every transaction with escrow, digital contracts, and fair mediation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#2ECC71] text-white hover:bg-[#26B35F] text-lg px-8 py-6"
                onClick={() => window.location.href = getLoginUrl()}
              >
                Start Free Trial <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#001F3F] text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-6">The Problem</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Payment fraud and chargebacks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Non-payment and delivery disputes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Slow dispute resolution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>No verifiable transaction records</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Difficulty building business reputation</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-6">The Solution</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#2ECC71] flex-shrink-0" />
                  <span><strong>Smart Escrow:</strong> Funds held until both parties confirm</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#2ECC71] flex-shrink-0" />
                  <span><strong>Digital Contracts:</strong> Auto-generated, legally binding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#2ECC71] flex-shrink-0" />
                  <span><strong>Fair Mediation:</strong> 95% resolution rate in 24-72 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#2ECC71] flex-shrink-0" />
                  <span><strong>Immutable Records:</strong> Complete transaction history</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#2ECC71] flex-shrink-0" />
                  <span><strong>Trust Score:</strong> Build verifiable reputation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete payment infrastructure with trust built-in
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                  <Icon className="w-12 h-12 text-[#2ECC71] mb-4" />
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-3">{product.title}</h3>
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#2ECC71] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, secure, and transparent</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Create Account", desc: "Sign up in minutes with your business details" },
              { step: 2, title: "Generate Payment Link", desc: "Create unique links for each transaction" },
              { step: 3, title: "Customer Pays", desc: "They choose their preferred payment method" },
              { step: 4, title: "Get Paid", desc: "Funds released upon delivery confirmation" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Built for Every Business Type</h2>
            <p className="text-xl text-gray-600">Whether you're an individual, SME, enterprise, or financial institution</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-[#2ECC71]" />
                    <h3 className="text-2xl font-bold text-[#001F3F]">{useCase.segment}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 size={18} className="text-[#2ECC71] flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600">See what our users have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-[#001F3F]">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg p-8 border-2 transition-all ${
                  plan.highlighted 
                    ? 'border-[#2ECC71] bg-green-50 md:scale-105' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                <h3 className="text-2xl font-bold text-[#001F3F] mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#001F3F]">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600">/transaction</span>}
                </div>
                <Button 
                  className={`w-full mb-6 ${
                    plan.highlighted 
                      ? 'bg-[#2ECC71] text-white hover:bg-[#26B35F]' 
                      : 'border-[#2ECC71] text-[#2ECC71] hover:bg-[#2ECC71] hover:text-white'
                  }`}
                  onClick={() => window.location.href = getLoginUrl()}
                >
                  {plan.cta}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 size={18} className="text-[#2ECC71] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">All plans include 30-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#001F3F] to-[#003D5C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your Payments?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users and businesses already transacting with confidence on Afa'a Pay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#2ECC71] text-white hover:bg-[#26B35F] text-lg px-8 py-6"
              onClick={() => window.location.href = getLoginUrl()}
            >
              Start Free Trial Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#001F3F] text-lg px-8 py-6">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001F3F] text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="Afa'a Pay" className="h-8 mb-4" />
              <p className="text-sm">Transact with Confidence</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="hover:text-[#2ECC71] transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#2ECC71] transition">Pricing</a></li>
                <li><a href="#" className="hover:text-[#2ECC71] transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#2ECC71] transition">About</a></li>
                <li><a href="#" className="hover:text-[#2ECC71] transition">Blog</a></li>
                <li><a href="#" className="hover:text-[#2ECC71] transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#2ECC71] transition">Privacy</a></li>
                <li><a href="#" className="hover:text-[#2ECC71] transition">Terms</a></li>
                <li><a href="#" className="hover:text-[#2ECC71] transition">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2025 Afa'a Pay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
