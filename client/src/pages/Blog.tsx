import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { getLoginUrl } from "@/const";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Blog() {
  const { user, isAuthenticated, logout } = useAuth();
  const { t } = useTranslation();

  const articles = [
    {
      id: 1,
      title: "How to Reduce Payment Fraud by 90%",
      excerpt: "Learn the top strategies businesses are using to eliminate payment fraud and protect their revenue.",
      author: "Sarah Johnson",
      date: "2025-01-10",
      category: "Security",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "The Complete Guide to Digital Contracts",
      excerpt: "Everything you need to know about implementing digital contracts in your business operations.",
      author: "Michael Chen",
      date: "2025-01-08",
      category: "Compliance",
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "Building Trust in Online Transactions",
      excerpt: "Discover how trust scores and reputation systems are transforming e-commerce and B2B payments.",
      author: "Emma Williams",
      date: "2025-01-05",
      category: "Business",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Payment Methods for African Markets",
      excerpt: "A comprehensive overview of payment methods and their adoption rates across African countries.",
      author: "David Okonkwo",
      date: "2025-01-02",
      category: "Market Insights",
      readTime: "15 min read",
    },
    {
      id: 5,
      title: "Dispute Resolution Best Practices",
      excerpt: "How to handle payment disputes efficiently and maintain customer relationships.",
      author: "Lisa Anderson",
      date: "2024-12-28",
      category: "Operations",
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "The Future of Payment Infrastructure",
      excerpt: "Exploring emerging trends and technologies shaping the future of digital payments.",
      author: "James Mitchell",
      date: "2024-12-25",
      category: "Technology",
      readTime: "11 min read",
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
            <a href="/" className="text-gray-700 hover:text-[#2ECC71] transition">{t("common.home")}</a>
            <a href="/#products" className="text-gray-700 hover:text-[#2ECC71] transition">{t("common.products")}</a>
            <a href="/blog" className="text-gray-700 hover:text-[#2ECC71] transition font-bold text-[#2ECC71]">{t("common.blog")}</a>
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
              {t("blog.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t("blog.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-br from-[#001F3F] to-[#003D5C] h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Tag size={48} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm font-semibold">{article.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#001F3F] mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="space-y-2 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="text-gray-600">{article.readTime}</div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#2ECC71] text-[#2ECC71] hover:bg-[#2ECC71] hover:text-white"
                  >
                    {t("blog.readMore")} <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">
              {t("blog.newsletter")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t("blog.newsletterSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2ECC71]"
              />
              <Button 
                className="bg-[#2ECC71] text-white hover:bg-[#26B35F] px-8 py-3"
              >
                {t("blog.subscribe")}
              </Button>
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
