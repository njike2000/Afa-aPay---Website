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
      title: t("products.paymentLink.name"),
      description: t("products.paymentLink.shortDescription"),
      features: ["One link, all methods", "Instant setup", "QR code generation", "Real-time analytics"],
      slug: "payment-link",
    },
    {
      icon: Smartphone,
      title: t("products.pos.name"),
      description: t("products.pos.shortDescription"),
      features: ["Offline capability", "Digital receipts", "Inventory sync", "Staff management"],
      slug: "pos",
    },
    {
      icon: Globe,
      title: t("products.paymentFacilitator.name"),
      description: t("products.paymentFacilitator.shortDescription"),
      features: ["6 payment methods", "Unified dashboard", "Instant settlement", "Multi-currency"],
      slug: "payment-facilitator",
    },
    {
      icon: FileText,
      title: t("products.digitalContracts.name"),
      description: t("products.digitalContracts.shortDescription"),
      features: ["Auto-generated", "E-signature ready", "Immutable records", "Audit trails"],
      slug: "digital-contracts",
    },
    {
      icon: Users,
      title: t("products.mediation.name"),
      description: t("products.mediation.shortDescription"),
      features: ["Fair arbitration", "24-72hr resolution", "95% success rate", "Neutral mediators"],
      slug: "mediation",
    },
    {
      icon: TrendingUp,
      title: t("products.trustScore.name"),
      description: t("products.trustScore.shortDescription"),
      features: ["Reputation tracking", "Credit history", "Unlock benefits", "Business growth"],
      slug: "trust-score",
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
            <span className="font-bold text-[#001F3F]">{t("common.appName")}</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-gray-700 hover:text-[#2ECC71] transition">{t("common.products")}</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#2ECC71] transition">{t("common.howItWorks")}</a>
            <a href="#use-cases" className="text-gray-700 hover:text-[#2ECC71] transition">{t("common.useCases")}</a>
            <a href="#pricing" className="text-gray-700 hover:text-[#2ECC71] transition">{t("common.pricing")}</a>
            <a href="/demo" className="text-gray-700 hover:text-[#2ECC71] transition">{t("common.demo")}</a>
            <a href="/blog" className="text-gray-700 hover:text-[#2ECC71] transition">{t("common.blog")}</a>
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
                  {t("common.signOut")}
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  className="border-[#2ECC71] text-[#2ECC71] hover:bg-[#2ECC71] hover:text-white"
                  onClick={() => window.location.href = getLoginUrl()}
                >
                  {t("common.signIn")}
                </Button>
                <Button 
                  className="bg-[#2ECC71] text-white hover:bg-[#26B35F]"
                  onClick={() => window.location.href = getLoginUrl()}
                >
                  {t("common.getStarted")}
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
              {t("home.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#2ECC71] text-white hover:bg-[#26B35F] text-lg px-8 py-6"
                onClick={() => window.location.href = getLoginUrl()}
              >
                {t("home.hero.cta")} <ArrowRight className="ml-2" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-6">{t("home.problem.title")}</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>{t("home.problem.points.0")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>{t("home.problem.points.1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>{t("home.problem.points.2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>{t("home.problem.points.3")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>{t("home.problem.points.4")}</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-6">{t("home.solution.title")}</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#2ECC71] flex-shrink-0" />
                  <span>{t("home.solution.points.0")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#2ECC71] flex-shrink-0" />
                  <span>{t("home.solution.points.1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#2ECC71] flex-shrink-0" />
                  <span>{t("home.solution.points.2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#2ECC71] flex-shrink-0" />
                  <span>{t("home.solution.points.3")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#2ECC71] flex-shrink-0" />
                  <span>{t("home.solution.points.4")}</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">{t("home.products.title")}</h2>
            <p className="text-xl text-gray-600">{t("home.products.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <a
                  key={index}
                  href={`/product/${product.slug}`}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition cursor-pointer"
                >
                  <Icon size={48} className="text-[#2ECC71] mb-4" />
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={16} className="text-[#2ECC71]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">{t("home.howItWorks.title")}</h2>
            <p className="text-xl text-gray-600">{t("home.howItWorks.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-[#2ECC71] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step}
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-2">{t(`home.howItWorks.steps.${step - 1}.title`)}</h3>
                <p className="text-gray-600">{t(`home.howItWorks.steps.${step - 1}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">{t("home.useCases.title")}</h2>
            <p className="text-xl text-gray-600">{t("home.useCases.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon size={40} className="text-[#2ECC71]" />
                    <h3 className="text-2xl font-bold text-[#001F3F]">{useCase.segment}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={16} className="text-[#2ECC71]" />
                        {benefit}
                      </div>
                    ))}
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">{t("home.testimonials.title")}</h2>
            <p className="text-xl text-gray-600">{t("home.testimonials.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-[#001F3F]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">{t("home.pricing.title")}</h2>
            <p className="text-xl text-gray-600">{t("home.pricing.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg p-8 ${
                  plan.highlighted 
                    ? 'bg-[#001F3F] text-white border-2 border-[#2ECC71] transform scale-105' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-[#001F3F]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-4xl font-bold mb-2 ${plan.highlighted ? 'text-[#2ECC71]' : 'text-[#001F3F]'}`}>
                  {plan.price}
                </p>
                <p className={`mb-6 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className={plan.highlighted ? 'text-[#2ECC71]' : 'text-[#2ECC71]'} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-[#2ECC71] text-white hover:bg-[#26B35F]' 
                      : 'bg-[#2ECC71] text-white hover:bg-[#26B35F]'
                  }`}
                  onClick={() => window.location.href = getLoginUrl()}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#001F3F] to-[#003D5C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("home.cta.title")}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("home.cta.subtitle")}
          </p>
          <Button 
            className="bg-[#2ECC71] text-white hover:bg-[#26B35F] text-lg px-8 py-6"
            onClick={() => window.location.href = getLoginUrl()}
          >
            {t("home.cta.button")}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001F3F] text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="Afa'a Pay" className="h-8 mb-4" />
              <p className="text-sm">{t("common.tagline")}</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">{t("common.products")}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-[#2ECC71] transition">{t("common.home")}</a></li>
                <li><a href="#products" className="hover:text-[#2ECC71] transition">{t("common.products")}</a></li>
                <li><a href="#pricing" className="hover:text-[#2ECC71] transition">{t("common.pricing")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-[#2ECC71] transition">{t("common.about")}</a></li>
                <li><a href="/blog" className="hover:text-[#2ECC71] transition">{t("common.blog")}</a></li>
                <li><a href="/" className="hover:text-[#2ECC71] transition">{t("common.contact")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-[#2ECC71] transition">{t("common.privacy")}</a></li>
                <li><a href="/" className="hover:text-[#2ECC71] transition">{t("common.terms")}</a></li>
                <li><a href="/" className="hover:text-[#2ECC71] transition">{t("common.compliance")}</a></li>
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
