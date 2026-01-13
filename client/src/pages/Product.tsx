import { useParams } from 'wouter';
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getLoginUrl } from "@/const";
import { products, type ProductKey } from "@/data/products";

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const { user, isAuthenticated, logout } = useAuth();
  
  const productKey = Object.keys(products).find(
    key => products[key as ProductKey].slug === slug
  ) as ProductKey | undefined;
  
  if (!productKey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#001F3F] mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Button 
            className="bg-[#2ECC71] text-white hover:bg-[#26B35F]"
            onClick={() => window.location.href = '/'}
          >
            Back to Home
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
            <span className="font-bold text-[#001F3F]">Afa'a Pay</span>
          </div>
          <div className="flex items-center gap-4">
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
                Start Free Trial <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#001F3F] text-lg px-8 py-6">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-[#2ECC71] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-[#001F3F] mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Perfect For</h2>
            <p className="text-xl text-gray-600">Real-world use cases and ROI</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {product.useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-[#001F3F] mb-3">{useCase.title}</h3>
                <p className="text-gray-700 mb-4">{useCase.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-[#2ECC71] font-bold">ROI: {useCase.roi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Pricing</h2>
            <p className="text-xl text-gray-600">Transparent pricing for every plan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Starter', price: product.pricing.starter },
              { name: 'Professional', price: product.pricing.professional },
              { name: 'Enterprise', price: product.pricing.enterprise },
            ].map((plan, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-[#001F3F] mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-[#2ECC71] mb-6">{plan.price}</p>
                <Button 
                  className="w-full bg-[#2ECC71] text-white hover:bg-[#26B35F]"
                  onClick={() => window.location.href = getLoginUrl()}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#001F3F] to-[#003D5C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users already using {product.name} to transform their business.
          </p>
          <Button 
            className="bg-[#2ECC71] text-white hover:bg-[#26B35F] text-lg px-8 py-6"
            onClick={() => window.location.href = getLoginUrl()}
          >
            Start Free Trial Now
          </Button>
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
                <li><a href="/" className="hover:text-[#2ECC71] transition">Home</a></li>
                <li><a href="/" className="hover:text-[#2ECC71] transition">Features</a></li>
                <li><a href="/" className="hover:text-[#2ECC71] transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-[#2ECC71] transition">About</a></li>
                <li><a href="/" className="hover:text-[#2ECC71] transition">Blog</a></li>
                <li><a href="/" className="hover:text-[#2ECC71] transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-[#2ECC71] transition">Privacy</a></li>
                <li><a href="/" className="hover:text-[#2ECC71] transition">Terms</a></li>
                <li><a href="/" className="hover:text-[#2ECC71] transition">Compliance</a></li>
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
