export const products = {
  paymentLink: {
    id: 'payment-link',
    name: 'Payment Link',
    slug: 'payment-link',
    icon: 'Link2',
    shortDescription: 'Generate unique payment links that accept all payment methods',
    longDescription: 'Payment Link is the fastest way to collect payments online. Generate a unique link in seconds, share it via SMS, email, or QR code, and watch payments flow in from your customers using their preferred payment method.',
    hero: {
      title: 'Payment Link: One Link, All Payment Methods',
      subtitle: 'Collect payments from anyone, anywhere, using their preferred payment method. No technical setup required.',
    },
    features: [
      {
        title: 'Instant Setup',
        description: 'Generate payment links in seconds without any technical knowledge',
        icon: 'Zap',
      },
      {
        title: 'All Payment Methods',
        description: 'Accept MTN Money, Orange Money, PayPal, Bank Transfer, Card, and Crypto',
        icon: 'Globe',
      },
      {
        title: 'QR Code Generation',
        description: 'Automatically generate QR codes for physical and digital marketing',
        icon: 'QrCode',
      },
      {
        title: 'Real-Time Analytics',
        description: 'Track conversion rates, payment methods used, and customer behavior',
        icon: 'BarChart3',
      },
      {
        title: 'Escrow Protection',
        description: 'All payments protected by escrow until delivery confirmation',
        icon: 'Lock',
      },
      {
        title: 'Instant Notifications',
        description: 'Get real-time alerts when payments are received',
        icon: 'Bell',
      },
    ],
    useCases: [
      {
        title: 'E-Commerce Sellers',
        description: 'Sell products online with buyer protection and instant payment confirmation',
        roi: '40% increase in sales',
      },
      {
        title: 'Freelancers',
        description: 'Invoice clients instantly and get paid without payment disputes',
        roi: '50% faster payment',
      },
      {
        title: 'Service Providers',
        description: 'Collect deposits and payments for services with digital contracts',
        roi: '90% reduction in non-payment',
      },
      {
        title: 'Marketplace Vendors',
        description: 'Integrate payment links into your marketplace for seller payouts',
        roi: '100% payment security',
      },
    ],
    pricing: {
      starter: 'Free',
      professional: '2% per transaction',
      enterprise: 'Custom pricing',
    },
  },
  pos: {
    id: 'pos',
    name: 'POS System',
    slug: 'pos',
    icon: 'Smartphone',
    shortDescription: 'Accept in-store and mobile payments with built-in escrow protection',
    longDescription: 'Transform your phone into a powerful point-of-sale system. Accept in-store payments, generate digital receipts, manage inventory, and build customer relationships—all from your mobile device.',
    hero: {
      title: 'POS System: Mobile Payments Made Simple',
      subtitle: 'Turn your smartphone into a complete payment and inventory management system.',
    },
    features: [
      {
        title: 'Mobile-First Design',
        description: 'Works on any smartphone with an internet connection',
        icon: 'Smartphone',
      },
      {
        title: 'Offline Capability',
        description: 'Continue accepting payments even without internet connection',
        icon: 'Wifi',
      },
      {
        title: 'Digital Receipts',
        description: 'Automatic SMS and email receipts for every transaction',
        icon: 'Mail',
      },
      {
        title: 'Inventory Sync',
        description: 'Real-time inventory management and stock alerts',
        icon: 'Package',
      },
      {
        title: 'Staff Management',
        description: 'Manage multiple staff members and track their sales',
        icon: 'Users',
      },
      {
        title: 'Sales Analytics',
        description: 'Daily, weekly, and monthly sales reports with insights',
        icon: 'TrendingUp',
      },
    ],
    useCases: [
      {
        title: 'Retail Stores',
        description: 'Accept payments from customers at checkout with digital receipts',
        roi: '35% faster checkout',
      },
      {
        title: 'Restaurants & Cafes',
        description: 'Manage orders, payments, and inventory from your phone',
        roi: '25% increase in efficiency',
      },
      {
        title: 'Market Vendors',
        description: 'Accept mobile payments from customers without a physical terminal',
        roi: '50% more customers',
      },
      {
        title: 'Field Sales Teams',
        description: 'Accept payments on-the-go and manage customer relationships',
        roi: '40% increase in sales',
      },
    ],
    pricing: {
      starter: 'Free',
      professional: '1.5% per transaction',
      enterprise: 'Custom pricing',
    },
  },
  paymentFacilitator: {
    id: 'payment-facilitator',
    name: 'Payment Facilitator',
    slug: 'payment-facilitator',
    icon: 'Globe',
    shortDescription: 'Aggregate all payment methods in one unified platform',
    longDescription: 'Payment Facilitator is your complete payment infrastructure. Aggregate multiple payment methods, manage settlements, handle reconciliation, and scale your payment operations without the complexity.',
    hero: {
      title: 'Payment Facilitator: Your Complete Payment Infrastructure',
      subtitle: 'Aggregate all payment methods, manage settlements, and scale your payment operations.',
    },
    features: [
      {
        title: 'Multi-Method Aggregation',
        description: 'Support 6+ payment methods from a single dashboard',
        icon: 'Globe',
      },
      {
        title: 'Unified Dashboard',
        description: 'Manage all payments, settlements, and reconciliation in one place',
        icon: 'BarChart3',
      },
      {
        title: 'Instant Settlement',
        description: 'Get paid instantly or on your preferred settlement schedule',
        icon: 'Zap',
      },
      {
        title: 'Multi-Currency Support',
        description: 'Accept and settle payments in multiple currencies',
        icon: 'DollarSign',
      },
      {
        title: 'Automated Reconciliation',
        description: 'Zero-error accounting with automatic reconciliation',
        icon: 'CheckCircle2',
      },
      {
        title: 'API Integration',
        description: 'Deep API access for custom integrations and workflows',
        icon: 'Code',
      },
    ],
    useCases: [
      {
        title: 'Payment Platforms',
        description: 'White-label payment facilitator for your platform',
        roi: '70% cost reduction',
      },
      {
        title: 'Fintech Companies',
        description: 'Integrate multiple payment methods into your app',
        roi: '50% faster deployment',
      },
      {
        title: 'Enterprise Businesses',
        description: 'Manage complex payment flows and multi-party transactions',
        roi: '90% automation',
      },
      {
        title: 'Government Agencies',
        description: 'Aggregate citizen payments across multiple channels',
        roi: '100% transparency',
      },
    ],
    pricing: {
      starter: 'Custom',
      professional: 'Custom',
      enterprise: 'Custom pricing',
    },
  },
  digitalContracts: {
    id: 'digital-contracts',
    name: 'Digital Contracts',
    slug: 'digital-contracts',
    icon: 'FileText',
    shortDescription: 'Auto-generated, legally binding contracts for every transaction',
    longDescription: "Every transaction on Afa'a Pay is automatically documented with legally binding digital contracts. E-signatures, immutable records, and complete audit trails give you peace of mind.",
    hero: {
      title: 'Digital Contracts: Legal Protection for Every Transaction',
      subtitle: 'Automatically generate legally binding contracts with e-signatures for every transaction.',
    },
    features: [
      {
        title: 'Auto-Generation',
        description: 'Contracts automatically generated for every transaction',
        icon: 'Zap',
      },
      {
        title: 'E-Signature Ready',
        description: 'Integrated e-signature for instant contract signing',
        icon: 'PenTool',
      },
      {
        title: 'Immutable Records',
        description: 'Blockchain-backed records that cannot be altered',
        icon: 'Lock',
      },
      {
        title: 'Audit Trails',
        description: 'Complete history of all contract actions and modifications',
        icon: 'FileText',
      },
      {
        title: 'Template Library',
        description: 'Pre-built templates for common transaction types',
        icon: 'Library',
      },
      {
        title: 'Legal Compliance',
        description: 'Compliant with international digital contract standards',
        icon: 'CheckCircle2',
      },
    ],
    useCases: [
      {
        title: 'B2B Transactions',
        description: 'Secure business-to-business payments with legal contracts',
        roi: '95% dispute reduction',
      },
      {
        title: 'Real Estate',
        description: 'Document property transactions with immutable contracts',
        roi: '100% transparency',
      },
      {
        title: 'Supply Chain',
        description: 'Create contracts for supplier payments and deliveries',
        roi: '80% faster processing',
      },
      {
        title: 'Legal Compliance',
        description: 'Meet regulatory requirements with documented transactions',
        roi: '100% compliance',
      },
    ],
    pricing: {
      starter: 'Included',
      professional: 'Included',
      enterprise: 'Included',
    },
  },
  mediation: {
    id: 'mediation',
    name: 'Mediation Platform',
    slug: 'mediation',
    icon: 'Users',
    shortDescription: 'Fair, transparent dispute resolution in 24-72 hours',
    longDescription: "When disputes arise, Afa'a Pay's mediation platform provides fair, transparent resolution. Our system combines automated processes with human expertise to resolve 95% of disputes in 24-72 hours.",
    hero: {
      title: 'Mediation Platform: Fair Resolution for Every Dispute',
      subtitle: 'Resolve disputes fairly and transparently with 95% success rate in 24-72 hours.',
    },
    features: [
      {
        title: '95% Resolution Rate',
        description: 'Successfully resolve 95% of disputes without escalation',
        icon: 'CheckCircle2',
      },
      {
        title: '24-72 Hour Resolution',
        description: 'Fast resolution timelines to minimize business disruption',
        icon: 'Clock',
      },
      {
        title: 'Neutral Arbitration',
        description: 'Fair, unbiased mediation by trained neutral mediators',
        icon: 'Users',
      },
      {
        title: 'Evidence Management',
        description: 'Secure storage and presentation of dispute evidence',
        icon: 'FileText',
      },
      {
        title: 'Appeal Process',
        description: 'Clear appeal process for further review if needed',
        icon: 'ArrowUp',
      },
      {
        title: 'Transparent Decisions',
        description: 'Clear reasoning provided for all mediation decisions',
        icon: 'Eye',
      },
    ],
    useCases: [
      {
        title: 'E-Commerce Disputes',
        description: 'Resolve buyer/seller disputes over product quality and delivery',
        roi: '95% customer satisfaction',
      },
      {
        title: 'Service Disputes',
        description: 'Mediate disputes between service providers and customers',
        roi: '90% fair resolution',
      },
      {
        title: 'Payment Disputes',
        description: 'Resolve payment-related conflicts with evidence review',
        roi: '100% transparency',
      },
      {
        title: 'Supply Chain Disputes',
        description: 'Mediate B2B disputes over delivery and quality',
        roi: '80% faster resolution',
      },
    ],
    pricing: {
      starter: 'Included',
      professional: 'Included',
      enterprise: 'Included',
    },
  },
  trustScore: {
    id: 'trust-score',
    name: 'Trust Score',
    slug: 'trust-score',
    icon: 'TrendingUp',
    shortDescription: 'Build verifiable reputation that unlocks opportunities',
    longDescription: 'Your Trust Score is your digital reputation. Built on transaction history, contract compliance, and mediation outcomes, it unlocks better credit terms, business opportunities, and customer trust.',
    hero: {
      title: 'Trust Score: Your Digital Reputation',
      subtitle: 'Build a verifiable reputation that unlocks better credit terms and business opportunities.',
    },
    features: [
      {
        title: 'Reputation Tracking',
        description: 'Real-time tracking of your trust score based on transactions',
        icon: 'TrendingUp',
      },
      {
        title: 'Transaction History',
        description: 'Complete, verifiable history of all your transactions',
        icon: 'History',
      },
      {
        title: 'Credit Building',
        description: 'Build credit history that lenders recognize and trust',
        icon: 'CreditCard',
      },
      {
        title: 'Unlock Benefits',
        description: 'Higher scores unlock better rates, higher limits, and opportunities',
        icon: 'Gift',
      },
      {
        title: 'Transparent Metrics',
        description: 'Clear breakdown of what factors into your score',
        icon: 'Eye',
      },
      {
        title: 'Business Growth',
        description: 'Use your score to access better financing and partnerships',
        icon: 'Rocket',
      },
    ],
    useCases: [
      {
        title: 'SME Credit Access',
        description: 'Build credit history to access better financing options',
        roi: '50% lower interest rates',
      },
      {
        title: 'Supplier Relationships',
        description: 'Prove reliability to suppliers for better payment terms',
        roi: '30 days extended credit',
      },
      {
        title: 'Customer Trust',
        description: 'Display your score to customers to build confidence',
        roi: '40% increase in conversions',
      },
      {
        title: 'Business Partnerships',
        description: 'Use your score to unlock new business partnerships',
        roi: '3x more opportunities',
      },
    ],
    pricing: {
      starter: 'Included',
      professional: 'Included',
      enterprise: 'Included',
    },
  },
};

export type ProductKey = keyof typeof products;

