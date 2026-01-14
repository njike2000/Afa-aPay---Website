import { useMemo } from 'react';
import { products } from '@/data/products';

/**
 * Hook to get all products
 * @returns Array of all products
 */
export function useProducts() {
  return useMemo(() => {
    return Object.values(products);
  }, []);
}

/**
 * Hook to get a product by slug
 * @param slug - The product slug
 * @returns The product object or undefined if not found
 */
export function useProductBySlug(slug: string | undefined) {
  return useMemo(() => {
    if (!slug) return undefined;
    const allProducts = Object.values(products);
    return allProducts.find((p: any) => p.slug === slug);
  }, [slug]);
}

/**
 * Hook to get all product slugs
 * @returns Array of product slugs
 */
export function useProductSlugs(): string[] {
  return useMemo(() => {
    return Object.values(products).map((p: any) => p.slug);
  }, []);
}
