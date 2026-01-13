import { useState } from 'react';
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, QrCode, Check } from "lucide-react";
import { getLoginUrl } from "@/const";

export default function Demo() {
  const { user, isAuthenticated, logout } = useAuth();
  const [paymentLink, setPaymentLink] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    productName: 'Premium Subscription',
    amount: '29.99',
    currency: 'USD',
    description: 'Monthly subscription for premium features',
  });

  const generateLink = () => {
    const link = `https://afaapay.com/pay/${Math.random().toString(36).substr(2, 9)}`;
    setPaymentLink(link);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paymentLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Afa'a Pay" className="h-10" />
            <span className="font-bold text-[#001F3F]">Afa'a Pay</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-[#2ECC71] transition">Home</a>
            <a href="/#products" className="text-gray-700 hover:text-[#2ECC71] transition">Products</a>
            <a href="/demo" className="text-gray-700 hover:text-[#2ECC71] transition font-bold text-[#2ECC71]">Demo</a>
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
              Try Payment Link
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Generate a sample payment link in seconds and see how easy it is to collect payments.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#001F3F] mb-8">Create Your Payment Link</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#001F3F] mb-2">Product Name</label>
                  <input 
                    type="text" 
                    value={formData.productName}
                    onChange={(e) => setFormData({...formData, productName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2ECC71]"
                    placeholder="Enter product name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">Amount</label>
                    <input 
                      type="number" 
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2ECC71]"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">Currency</label>
                    <select 
                      value={formData.currency}
                      onChange={(e) => setFormData({...formData, currency: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2ECC71]"
                    >
                      <option>USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                      <option>XAF</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#001F3F] mb-2">Description</label>
                  <textarea 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2ECC71]"
                    rows={4}
                    placeholder="Add a description for your payment"
                  />
                </div>
                <Button 
                  className="w-full bg-[#2ECC71] text-white hover:bg-[#26B35F] text-lg py-6"
                  onClick={generateLink}
                >
                  Generate Payment Link
                </Button>
              </div>
            </div>

            {/* Preview */}
            <div>
              <h2 className="text-3xl font-bold text-[#001F3F] mb-8">Your Payment Link</h2>
              {paymentLink ? (
                <div className="space-y-6">
                  {/* Link Preview */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-3">Payment Link</p>
                    <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg p-4">
                      <input 
                        type="text" 
                        value={paymentLink}
                        readOnly
                        className="flex-1 bg-transparent outline-none text-sm text-gray-700"
                      />
                      <button 
                        onClick={copyToClipboard}
                        className="text-[#2ECC71] hover:text-[#26B35F] transition"
                      >
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {copied ? '✓ Copied to clipboard' : 'Click to copy'}
                    </p>
                  </div>

                  {/* QR Code */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-3">QR Code</p>
                    <button 
                      onClick={() => setShowQR(!showQR)}
                      className="w-full bg-white border border-gray-300 rounded-lg p-8 flex items-center justify-center hover:bg-gray-50 transition"
                    >
                      <div className="text-center">
                        <QrCode size={48} className="text-[#2ECC71] mx-auto mb-2" />
                        <p className="text-sm text-gray-600">{showQR ? 'Hide QR Code' : 'Show QR Code'}</p>
                      </div>
                    </button>
                    {showQR && (
                      <div className="mt-4 bg-white p-4 rounded-lg text-center">
                        <div className="inline-block bg-gray-200 p-4 rounded">
                          <div className="w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                            <span className="text-gray-600 text-xs">QR Code</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Payment Methods */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">Accepted Payment Methods</p>
                    <div className="grid grid-cols-3 gap-3">
                      {['MTN Money', 'Orange Money', 'PayPal', 'Bank Transfer', 'Card', 'Crypto'].map((method) => (
                        <div key={method} className="bg-white rounded-lg p-3 text-center text-xs font-semibold text-gray-700 border border-gray-200">
                          {method}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="font-bold text-[#001F3F] mb-4">Payment Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Product:</span>
                        <span className="font-semibold text-[#001F3F]">{formData.productName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-semibold text-[#001F3F]">{formData.amount} {formData.currency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-semibold text-[#2ECC71]">Ready to Share</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-[#2ECC71] text-white hover:bg-[#26B35F] text-lg py-6"
                    onClick={() => window.location.href = getLoginUrl()}
                  >
                    Start Using Afa'a Pay <ArrowRight className="ml-2" />
                  </Button>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-12 border-2 border-dashed border-gray-300 text-center">
                  <div className="text-4xl mb-4">🔗</div>
                  <p className="text-gray-600">Fill in the form and click "Generate Payment Link" to create your sample link</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-16 text-center">Why Payment Links?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Instant Setup',
                description: 'Generate payment links in seconds without any technical knowledge',
              },
              {
                title: 'All Payment Methods',
                description: 'Accept payments from any method - MTN Money, Orange Money, PayPal, and more',
              },
              {
                title: 'Secure & Escrow-Protected',
                description: 'All payments are protected by escrow until delivery confirmation',
              },
              {
                title: 'Easy Sharing',
                description: 'Share via SMS, email, social media, or QR code - customers choose how to pay',
              },
              {
                title: 'Real-Time Analytics',
                description: 'Track conversion rates, payment methods used, and customer behavior',
              },
              {
                title: 'Automatic Receipts',
                description: 'Customers receive instant SMS and email receipts for every payment',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-[#001F3F] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
            Create your account now and start generating payment links for your business.
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
                <li><a href="/#products" className="hover:text-[#2ECC71] transition">Features</a></li>
                <li><a href="/demo" className="hover:text-[#2ECC71] transition">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-[#2ECC71] transition">About</a></li>
                <li><a href="/blog" className="hover:text-[#2ECC71] transition">Blog</a></li>
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
