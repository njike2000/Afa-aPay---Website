import { useState } from 'react';
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, QrCode, Check } from "lucide-react";
import { getLoginUrl } from "@/const";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Demo() {
  const { user, isAuthenticated, logout } = useAuth();
  const { t } = useTranslation();
  const [paymentLink, setPaymentLink] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    amount: '',
    currency: 'USD',
    description: '',
  });

  const handleGenerateLink = (e: React.FormEvent) => {
    e.preventDefault();
    const link = `https://pay.afaapay.com/link/${Math.random().toString(36).substr(2, 9)}`;
    setPaymentLink(link);
    setShowQR(true);
  };

  const handleCopy = () => {
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
            <span className="font-bold text-[#001F3F]">{t("common.appName")}</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-[#2ECC71] transition">{t("common.home")}</a>
            <a href="/#products" className="text-gray-700 hover:text-[#2ECC71] transition">{t("common.products")}</a>
            <a href="/demo" className="text-gray-700 hover:text-[#2ECC71] transition font-bold text-[#2ECC71]">{t("common.demo")}</a>
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
              {t("demo.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t("demo.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#001F3F] mb-8">
                {t("demo.form.productName")}
              </h2>
              <form onSubmit={handleGenerateLink} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("demo.form.productName")}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Laptop"
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2ECC71]"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("demo.form.amount")}
                    </label>
                    <input
                      type="number"
                      placeholder="100"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2ECC71]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("demo.form.currency")}
                    </label>
                    <select
                      value={formData.currency}
                      onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2ECC71]"
                    >
                      <option>USD</option>
                      <option>EUR</option>
                      <option>XAF</option>
                      <option>GHS</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("demo.form.description")}
                  </label>
                  <textarea
                    placeholder="Product description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2ECC71] h-24"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[#2ECC71] text-white hover:bg-[#26B35F] text-lg py-6"
                >
                  {t("demo.form.generate")} <ArrowRight className="ml-2" />
                </Button>
              </form>
            </div>

            {/* Preview */}
            <div>
              {paymentLink ? (
                <div className="bg-white rounded-lg p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-6">
                    {t("demo.preview.title")}
                  </h3>

                  {/* Payment Link */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("demo.preview.paymentLink")}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={paymentLink}
                        readOnly
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                      />
                      <Button
                        onClick={handleCopy}
                        variant="outline"
                        className="border-[#2ECC71] text-[#2ECC71] hover:bg-[#2ECC71] hover:text-white"
                      >
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                      </Button>
                    </div>
                  </div>

                  {/* QR Code */}
                  {showQR && (
                    <div className="mb-8">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t("demo.preview.qrCode")}
                      </label>
                      <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
                        <QrCode size={120} className="text-[#2ECC71]" />
                      </div>
                    </div>
                  )}

                  {/* Payment Methods */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t("demo.preview.acceptedMethods")}
                    </label>
                    <div className="space-y-2">
                      {['MTN Money', 'Orange Money', 'PayPal', 'Bank Transfer', 'Card', 'Crypto'].map((method) => (
                        <div key={method} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-4 h-4 bg-[#2ECC71] rounded-full"></div>
                          <span className="text-gray-700">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-[#001F3F] text-white rounded-lg p-6">
                    <h4 className="font-bold mb-4">{t("demo.preview.summary")}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>{t("demo.preview.product")}:</span>
                        <span className="font-semibold">{formData.productName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Amount:</span>
                        <span className="font-semibold">{formData.amount} {formData.currency}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-gray-400">
                        <span>Status:</span>
                        <span className="text-[#2ECC71] font-semibold">{t("demo.preview.readyToShare")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
                  <QrCode size={64} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-600">
                    {t("demo.subtitle")}
                  </p>
                </div>
              )}
            </div>
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
