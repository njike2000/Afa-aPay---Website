import { useParams } from 'wouter';
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getLoginUrl } from "@/const";
import { products, type ProductKey } from "@/data/products";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const { user, isAuthenticated, logout } = useAuth();
  const { t } = useTranslation();
  
  const productKey = Object.keys(products).find(
    key => products[key as ProductKey].slug === slug
  ) as ProductKey | undefined;
  
  if (!productKey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#001F3F] mb-4">{t("common.products")} Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Button 
            className="bg-[#2ECC71] text-white hover:bg-[#26B35F]"
            onClick={() => window.location.href = '/'}
          >
            {t("common.home")}
          </Button>
        </div>
      </div>
    );
  }

  const product = products[productKey];

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
            <a href="/" className="text-gray-700 hover:text-[#2ECC71] transition">{t("common.home")}</a>
            <a href="/#products" className="text-gray-700 hover:text-[#2ECC71] transition">{t("common.products")}</a>
            <a href="/#pricing" className="text-gray-700 hover:text-[#2ECC71] transition">{t("common.pricing")}</a>
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
              {product.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {product.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#2ECC71] text-white hover:bg-[#26B35F] text-lg px-8 py-6"
                onClick={() => window.location.href = getLoginUrl()}
              >
                {t("home.hero.cta")} <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#001F3F] text-lg px-8 py-6">
                {t("common.demo")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-16 text-center">
            {t("common.products")} Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {product.features.map((feature: any, index: number) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 size={32} className="text-[#2ECC71] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-16 text-center">
            {t("common.useCases")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {product.useCases.map((useCase: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-[#001F3F] mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit: any, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 size={16} className="text-[#2ECC71]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-16 text-center">
            {t("common.pricing")}
          </h2>
          
          <div className="bg-white rounded-lg p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#001F3F] mb-4">Get Started Today</h3>
            <p className="text-gray-600 mb-6">
              Contact our sales team to discuss pricing options tailored to your business needs.
            </p>
            <Button 
              className="w-full bg-[#2ECC71] text-white hover:bg-[#26B35F]"
              onClick={() => window.location.href = getLoginUrl()}
            >
              {t("common.getStarted")}
            </Button>
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
                <li><a href="/#products" className="hover:text-[#2ECC71] transition">{t("common.products")}</a></li>
                <li><a href="/#pricing" className="hover:text-[#2ECC71] transition">{t("common.pricing")}</a></li>
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
