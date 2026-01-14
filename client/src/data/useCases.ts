import { Users, Smartphone, Shield, BarChart3, Building2 } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

/**
 * UseCase interface defining the structure of a use case
 */
export interface UseCase {
  id: string;
  segment: 'individuals' | 'smes' | 'enterprises' | 'financial' | 'government';
  title: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
  results: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

/**
 * All use cases for different business segments
 * Demonstrates how Afa'a Pay solves problems for different types of users
 */
export const useCases: UseCase[] = [
  {
    id: 'individual-seller',
    segment: 'individuals',
    title: 'Individual Seller (C2C)',
    icon: Users,
    description: 'How individuals safely sell items online and get paid securely without payment fraud or non-payment.',
    benefits: [
      'Sell items safely on social media and marketplaces',
      'Escrow protection until buyer confirms delivery',
      'Fair dispute resolution system',
      'Build reputation through trust scores',
      'Easy payment collection via payment links',
      'No technical knowledge required'
    ],
    results: [
      'Sell with confidence',
      '99.9% transaction success rate',
      'Average resolution time 48 hours',
      '100% payment protection',
    ],
    metrics: [
      { label: 'Success Rate', value: '99.9%' },
      { label: 'Resolution Time', value: '48hrs' },
      { label: 'Protection', value: '100%' },
      { label: 'Fraud Rate', value: '<0.1%' },
    ],
  },
  {
    id: 'sme-trader',
    segment: 'smes',
    title: 'SME & Trader',
    icon: Smartphone,
    description: 'How small and medium enterprises use Afa\'a Pay to invoice customers, manage supply chains, and reduce credit loss.',
    benefits: [
      'Accept payments from customers worldwide',
      'Automatic escrow protection for every sale',
      'Dispute resolution in 24-72 hours',
      'Build trust score for better payment terms',
      'Multiple payment methods (MTN, Orange, PayPal, Card)',
      'Real-time sales analytics and reporting',
    ],
    results: [
      'Increased sales by 40%',
      'Reduced chargebacks by 95%',
      'Improved customer retention by 60%',
      'Credit loss reduction of 90%',
    ],
    metrics: [
      { label: 'Sales Increase', value: '+40%' },
      { label: 'Chargeback Reduction', value: '-95%' },
      { label: 'Credit Loss Reduction', value: '-90%' },
      { label: 'Customer Retention', value: '+60%' },
    ],
  },
  {
    id: 'enterprise-business',
    segment: 'enterprises',
    title: 'Enterprise Business',
    icon: Shield,
    description: 'How large corporations manage complex payment operations with Afa\'a Pay payment facilitator.',
    benefits: [
      'Payment facilitator for multiple payment methods',
      'API integration for existing systems',
      'Real-time settlement and reporting',
      'Advanced fraud detection and prevention',
      'Dedicated account management',
      'SLA guarantees and 24/7 support',
    ],
    results: [
      'Reduced payment processing costs by 35%',
      'Improved cash flow by 50%',
      '99.99% uptime guarantee',
      'Enterprise-grade security',
    ],
    metrics: [
      { label: 'Cost Reduction', value: '-35%' },
      { label: 'Cash Flow Improvement', value: '+50%' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Security Level', value: 'Enterprise' },
    ],
  },
  {
    id: 'financial-institution',
    segment: 'financial',
    title: 'Financial Institution',
    icon: BarChart3,
    description: 'How banks and fintech companies integrate Afa\'a Pay to offer payment services to their customers.',
    benefits: [
      'White-label payment solution',
      'API integration for seamless embedding',
      'Compliance with financial regulations',
      'Enterprise-grade security and encryption',
      'Real-time transaction monitoring',
      'Dedicated technical support',
    ],
    results: [
      'Launch payment services in weeks, not months',
      'Reduce infrastructure costs by 60%',
      'Expand customer base by 3x',
      'Improve customer satisfaction by 85%',
    ],
    metrics: [
      { label: 'Launch Time', value: '2-4 weeks' },
      { label: 'Cost Reduction', value: '-60%' },
      { label: 'Customer Growth', value: '+3x' },
      { label: 'Satisfaction', value: '+85%' },
    ],
  },
  {
    id: 'government-agency',
    segment: 'government',
    title: 'Government & Public Sector',
    icon: Building2,
    description: 'How government agencies collect citizen payments securely and transparently.',
    benefits: [
      'Secure payment collection from citizens',
      '100% transparency and audit trails',
      'Multi-channel payment acceptance',
      'Compliance with government regulations',
      'Fraud detection and prevention',
      'Real-time reporting and analytics',
    ],
    results: [
      'Increased tax collection by 25%',
      'Reduced payment fraud by 90%',
      'Improved citizen satisfaction by 70%',
      '100% payment transparency',
    ],
    metrics: [
      { label: 'Collection Increase', value: '+25%' },
      { label: 'Fraud Reduction', value: '-90%' },
      { label: 'Citizen Satisfaction', value: '+70%' },
      { label: 'Transparency', value: '100%' },
    ],
  },
];

/**
 * Get use cases by segment
 * @param segment - The business segment
 * @returns Array of use cases for that segment
 */
export function getUseCasesBySegment(segment: UseCase['segment']): UseCase[] {
  return useCases.filter((uc) => uc.segment === segment);
}

/**
 * Get a single use case by ID
 * @param id - The use case ID
 * @returns The use case object or undefined if not found
 */
export function getUseCaseById(id: string): UseCase | undefined {
  return useCases.find((uc) => uc.id === id);
}

/**
 * Get all segments
 * @returns Array of all available segments
 */
export function getAllSegments(): Array<UseCase['segment']> {
  const segments: Array<UseCase['segment']> = ['individuals', 'smes', 'enterprises', 'financial', 'government'];
  return segments;
}
