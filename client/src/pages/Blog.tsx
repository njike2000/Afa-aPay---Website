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
      excerpt: "Learn the proven strategies that successful businesses use to eliminate payment fraud and non-payment risks.",
      category: "Guide",
      author: "Afa'a Pay Team",
      date: "Jan 10, 2025",
      image: "/blog-1.jpg",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Case Study: SME Increased Sales by 40% with Payment Link",
      excerpt: "See how a small business in Cameroon doubled their online sales using Afa'a Pay's payment link feature.",
      category: "Case Study",
      author: "Afa'a Pay Team",
      date: "Jan 8, 2025",
      image: "/blog-2.jpg",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "Digital Contracts: The Future of B2B Payments",
      excerpt: "Understand why digital contracts are becoming essential for secure business-to-business transactions.",
      category: "Industry Insight",
      author: "Afa'a Pay Team",
      date: "Jan 5, 2025",
      image: "/blog-3.jpg",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Building Your Trust Score: A Complete Guide",
      excerpt: "Discover how to build and maintain a strong trust score that unlocks better credit terms and opportunities.",
      category: "Guide",
      author: "Afa'a Pay Team",
      date: "Jan 1, 2025",
      image: "/blog-4.jpg",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Government Payments: How Afa'a Pay Increased Transparency",
      excerpt: "Learn how African governments are using Afa'a Pay to make citizen payments more transparent and efficient.",
      category: "Case Study",
      author: "Afa'a Pay Team",
      date: "Dec 28, 2024",
      image: "/blog-5.jpg",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "The Economics of Escrow: Why It Matters",
      excerpt: "Explore the financial benefits of escrow protection for both buyers and sellers in digital transactions.",
      category: "Industry Insight",
      author: "Afa'a Pay Team",
      date: "Dec 25, 2024",
      image: "/blog-6.jpg",
      readTime: "9 min read",
    },
  ];

  const categories = ["All", "Guide", "Case Study", "Industry Insight"];

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
            <a href="/blog" className="text-gray-700 hover:text-[#2ECC71] transition font-bold text-[#2ECC71]">Blog</a>
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
              Resources & Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Learn how to build trust, reduce fraud, and grow your business with Afa'a Pay.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  category === "All"
                    ? "bg-[#2ECC71] text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#2ECC71]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-[#001F3F] to-[#003D5C] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">📚</div>
                    <p className="text-sm">{article.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={14} className="text-[#2ECC71]" />
                    <span className="text-sm font-semibold text-[#2ECC71]">{article.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#001F3F] mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <Button 
                    className="w-full bg-[#2ECC71] text-white hover:bg-[#26B35F]"
                    onClick={() => alert(`Article: ${article.title}`)}
                  >
                    Read More <ArrowRight className="ml-2" size={16} />
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest insights on payment security, fraud prevention, and business growth delivered to your inbox.
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
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#001F3F] to-[#003D5C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Payments?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start using Afa'a Pay today and join thousands of businesses building trust in their transactions.
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
                <li><a href="/#pricing" className="hover:text-[#2ECC71] transition">Pricing</a></li>
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
