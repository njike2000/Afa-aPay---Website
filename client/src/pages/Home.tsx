import { useState } from 'react';
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Lock, FileText, Users, ArrowRight, Shield, Clock, Zap } from "lucide-react";
import { getLoginUrl } from "@/const";
import OrganizationSelector from "@/components/OrganizationSelector";
import PaymentFacilitator from "@/components/PaymentFacilitator";
import { segmentContent } from "@/data/segmentContent";

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth();
  const [selectedSegment, setSelectedSegment] = useState('individuals');
  
  const segment = segmentContent[selectedSegment as keyof typeof segmentContent];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Afa'a Pay" className="h-10" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-[#2ECC71] transition">Features</a>
            <a href="#selector" className="text-gray-700 hover:text-[#2ECC71] transition">For Who</a>
            <a href="#payment" className="text-gray-700 hover:text-[#2ECC71] transition">Payment Link</a>
          </nav>
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
              Transact with <span className="text-[#2ECC71]">Confidence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Afa'a Pay is the trust infrastructure for digital payments in Africa. Secure transactions, instant resolution, and verifiable documentation for SMEs, independents, and everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#2ECC71] text-white hover:bg-[#26B35F] text-lg px-8 py-6"
                onClick={() => window.location.href = getLoginUrl()}
              >
                Start Your Journey <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#001F3F] text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars Section */}
      <section id="features" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">The Three Pillars of Trust</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Afa'a Pay's unique features create a secure, transparent, and fair payment ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Escrow */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mb-6">
                <Lock className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#001F3F] mb-4">Smart Escrow</h3>
              <p className="text-gray-700 mb-4">
                Funds are securely held until both parties confirm transaction completion. No risk of non-payment or delivery disputes.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#2ECC71]" />
                  Conditional fund release
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#2ECC71]" />
                  Configurable terms
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#2ECC71]" />
                  Automatic reconciliation
                </li>
              </ul>
            </div>

            {/* Pillar 2: Digital Contracts */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mb-6">
                <FileText className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#001F3F] mb-4">Digital Contracts</h3>
              <p className="text-gray-700 mb-4">
                Every transaction is automatically documented with legally binding digital contracts and e-signatures.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#2ECC71]" />
                  Instant contract generation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#2ECC71]" />
                  E-signature integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#2ECC71]" />
                  Immutable records
                </li>
              </ul>
            </div>

            {/* Pillar 3: Mediation */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#001F3F] mb-4">Automated Mediation</h3>
              <p className="text-gray-700 mb-4">
                Disputes are resolved fairly and transparently by our mediation system, with human oversight when needed.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#2ECC71]" />
                  95% resolution rate
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#2ECC71]" />
                  24-72 hour resolution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#2ECC71]" />
                  Neutral arbitration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Selector Section */}
      <section id="selector" className="py-20 md:py-32 bg-gray-50 border-b-2 border-[#2ECC71]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Who Are You?</h2>
            <p className="text-xl text-gray-600">
              Select your organization type to see features tailored just for you
            </p>
          </div>
          <OrganizationSelector 
            selectedType={selectedSegment} 
            onTypeChange={setSelectedSegment}
          />
        </div>
      </section>

      {/* Segment-Specific Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#001F3F] to-[#003D5C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {segment.hero.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {segment.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#2ECC71] text-white hover:bg-[#26B35F] text-lg px-8 py-6"
                onClick={() => window.location.href = getLoginUrl()}
              >
                {segment.hero.cta} <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#001F3F] text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Segment-Specific Trust Pillars */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">
              Why {segment.hero.title.split('.')[0].trim()} Trust Afa'a Pay
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored trust infrastructure designed for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {segment.trustPillars.map((pillar, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition">
                <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-2xl">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#001F3F] mb-4">{pillar.title}</h3>
                <p className="text-gray-700">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segment-Specific Features */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">
              Features Built for {segment.hero.title.split('.')[0].trim()}
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to transact with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segment.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#2ECC71] flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Facilitator */}
      <section id="payment">
        <PaymentFacilitator />
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Afa'a Pay is trusted by {segment.hero.title.split('.')[0].toLowerCase()} across these industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segment.industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition text-center">
                <h3 className="text-lg font-bold text-[#001F3F]">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#001F3F] to-[#003D5C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transact with Confidence?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users and businesses already using Afa'a Pay to secure their transactions and build trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#2ECC71] text-white hover:bg-[#26B35F] text-lg px-8 py-6"
              onClick={() => window.location.href = getLoginUrl()}
            >
              Get Started Now
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
                <li><a href="#" className="hover:text-[#2ECC71] transition">Features</a></li>
                <li><a href="#" className="hover:text-[#2ECC71] transition">Pricing</a></li>
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
