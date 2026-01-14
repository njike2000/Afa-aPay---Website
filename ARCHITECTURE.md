# Afa'a Pay Website - Architecture Guide

**Version:** 1.0  
**Last Updated:** January 2025  
**Status:** Production Ready

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Component Architecture](#component-architecture)
4. [Data Flow](#data-flow)
5. [State Management](#state-management)
6. [API Integration](#api-integration)
7. [Error Handling](#error-handling)
8. [Testing Strategy](#testing-strategy)
9. [Performance Optimization](#performance-optimization)
10. [Deployment](#deployment)

---

## Overview

The Afa'a Pay website is a modern React/TypeScript application built with:

- **Frontend:** React 18 + TypeScript + Tailwind CSS
- **Routing:** Wouter (lightweight router)
- **Internationalization:** react-i18next (EN/FR)
- **UI Components:** shadcn/ui + Lucide Icons
- **State Management:** React Context + Hooks
- **Build Tool:** Vite
- **Testing:** Vitest + React Testing Library

### Key Principles

✅ **Component-Driven** - Small, focused, reusable components  
✅ **Type-Safe** - Full TypeScript coverage  
✅ **Maintainable** - Clear separation of concerns  
✅ **Testable** - Comprehensive test coverage  
✅ **Performant** - Optimized rendering and bundling  
✅ **Accessible** - WCAG 2.1 AA compliance  
✅ **Bilingual** - English and French support  

---

## Project Structure

```
client/src/
├── components/
│   ├── ui/                          # Reusable UI components (shadcn/ui)
│   ├── sections/                    # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProductsGrid.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── UseCasesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingSection.tsx
│   │   └── CTASection.tsx
│   ├── cards/                       # Reusable card components
│   │   ├── ProductCard.tsx
│   │   ├── UseCaseCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── PricingCard.tsx
│   ├── OrganizationSelector.tsx     # Segment selector
│   ├── LanguageSwitcher.tsx         # Language switcher
│   ├── ErrorBoundary.tsx            # Error handling
│   └── NotFound.tsx                 # 404 page
├── pages/
│   ├── Home.tsx                     # Home page
│   ├── Product.tsx                  # Product detail page
│   ├── Blog.tsx                     # Blog listing page
│   ├── Demo.tsx                     # Interactive demo
│   └── ...
├── data/
│   ├── products.ts                  # Product definitions
│   ├── useCases.ts                  # Use case definitions
│   ├── testimonials.ts              # Testimonial data
│   └── pricing.ts                   # Pricing tiers
├── hooks/
│   ├── useProducts.ts               # Product hooks
│   ├── useUseCases.ts               # Use case hooks
│   ├── useTestimonials.ts           # Testimonial hooks
│   └── usePagination.ts             # Pagination logic
├── services/
│   ├── api.ts                       # API client
│   ├── productService.ts            # Product service
│   └── useCaseService.ts            # Use case service
├── contexts/
│   ├── LanguageContext.tsx          # Language context
│   └── SegmentContext.tsx           # Segment context
├── types/
│   ├── product.ts                   # Product types
│   ├── useCase.ts                   # Use case types
│   └── common.ts                    # Common types
├── locales/
│   ├── en.json                      # English translations
│   └── fr.json                      # French translations
├── __tests__/
│   ├── components/                  # Component tests
│   ├── hooks/                       # Hook tests
│   ├── services/                    # Service tests
│   └── pages/                       # Page tests
├── App.tsx                          # Main app component
├── main.tsx                         # Entry point
└── index.css                        # Global styles
```

---

## Component Architecture

### Component Hierarchy

```
App
├── Router
│   ├── Home
│   │   ├── HeroSection
│   │   ├── ProductsGrid
│   │   │   └── ProductCard (x6)
│   │   ├── HowItWorks
│   │   ├── UseCasesSection
│   │   │   └── UseCaseCard (x5)
│   │   ├── TestimonialsSection
│   │   │   └── TestimonialCard (x3)
│   │   ├── PricingSection
│   │   │   └── PricingCard (x3)
│   │   └── CTASection
│   ├── Product
│   ├── Blog
│   ├── Demo
│   └── NotFound
├── LanguageSwitcher
└── ErrorBoundary
```

### Component Types

#### 1. **Page Components** (in `pages/`)
- Top-level route components
- Manage page-level state
- Compose section components
- Example: `Home.tsx`

#### 2. **Section Components** (in `components/sections/`)
- Reusable page sections
- Compose card components
- Handle section-level logic
- Example: `ProductsGrid.tsx`

#### 3. **Card Components** (in `components/cards/`)
- Individual item display
- Minimal logic
- Highly reusable
- Example: `ProductCard.tsx`

#### 4. **UI Components** (in `components/ui/`)
- Primitive UI elements
- From shadcn/ui library
- No business logic
- Example: `Button.tsx`, `Card.tsx`

### Component Size Guidelines

```
Page Components:     50-100 lines
Section Components:  80-150 lines
Card Components:     60-100 lines
UI Components:       20-50 lines
```

---

## Data Flow

### Unidirectional Data Flow

```
Data Layer (data/)
    ↓
Custom Hooks (hooks/)
    ↓
Components (components/)
    ↓
User Interaction
    ↓
Event Handlers
    ↓
State Update
    ↓
Re-render
```

### Example: Product Display

```typescript
// 1. Data Layer
// data/products.ts
export const products: Product[] = [...]

// 2. Custom Hook
// hooks/useProducts.ts
export function useProducts(): Product[] {
  return useMemo(() => products, []);
}

// 3. Section Component
// components/sections/ProductsGrid.tsx
export default function ProductsGrid() {
  const products = useProducts();
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// 4. Card Component
// components/cards/ProductCard.tsx
export default function ProductCard({ product }: Props) {
  return <div>{product.name}</div>;
}
```

---

## State Management

### Local State (Component Level)

```typescript
const [isOpen, setIsOpen] = useState(false);
```

### Context State (App Level)

```typescript
// contexts/LanguageContext.tsx
export const LanguageContext = createContext<LanguageContextType>(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
```

### Custom Hooks (Logic Extraction)

```typescript
// hooks/useProducts.ts
export function useProducts() {
  return useMemo(() => products, []);
}
```

### Memoization

```typescript
// Prevent unnecessary re-renders
const memoizedValue = useMemo(() => computeExpensiveValue(), [dep]);

// Prevent function recreation
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

---

## API Integration

### Service Layer Pattern

```typescript
// services/api.ts
export async function get<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new APIError(...);
  return response.json();
}

// services/productService.ts
export async function getProducts(): Promise<Product[]> {
  return api.get('/products');
}

// In component
const products = await productService.getProducts();
```

### Error Handling

```typescript
try {
  const data = await api.get('/products');
  setProducts(data);
} catch (error) {
  if (error instanceof APIError) {
    console.error(`HTTP ${error.status}: ${error.message}`);
    showErrorMessage('Failed to load products');
  }
}
```

---

## Error Handling

### Error Boundary

```typescript
// components/ErrorBoundary.tsx
export class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}
```

### API Errors

```typescript
// services/api.ts
export class APIError extends Error {
  constructor(public status: number, public message: string) {
    super(message);
  }
}

// Usage
try {
  await api.get('/products');
} catch (error) {
  if (error instanceof APIError) {
    // Handle API error
  }
}
```

---

## Testing Strategy

### Unit Tests

```typescript
// __tests__/components/ProductCard.test.tsx
describe('ProductCard', () => {
  it('renders product information', () => {
    const product = { id: '1', name: 'Test' };
    render(<ProductCard product={product} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### Hook Tests

```typescript
// __tests__/hooks/useProducts.test.ts
describe('useProducts', () => {
  it('returns all products', () => {
    const { result } = renderHook(() => useProducts());
    expect(result.current).toHaveLength(6);
  });
});
```

### Service Tests

```typescript
// __tests__/services/api.test.ts
describe('API Service', () => {
  it('throws APIError on failed request', async () => {
    expect(api.get('/invalid')).rejects.toThrow(APIError);
  });
});
```

---

## Performance Optimization

### Code Splitting

```typescript
// Dynamic imports for route-based code splitting
const Home = lazy(() => import('@/pages/Home'));
const Product = lazy(() => import('@/pages/Product'));

<Suspense fallback={<Loading />}>
  <Home />
</Suspense>
```

### Memoization

```typescript
// Prevent unnecessary re-renders
const ProductCard = memo(function ProductCard({ product }) {
  return <div>{product.name}</div>;
});

// Memoize expensive computations
const memoizedProducts = useMemo(() => {
  return products.filter(p => p.active);
}, [products]);
```

### Image Optimization

```typescript
// Use next-gen formats
<img src="image.webp" alt="..." />

// Lazy load images
<img loading="lazy" src="..." alt="..." />
```

### Bundle Analysis

```bash
# Analyze bundle size
pnpm build --analyze

# Expected sizes:
# - JS: < 300 kB (gzipped)
# - CSS: < 50 kB (gzipped)
# - Total: < 350 kB (gzipped)
```

---

## Deployment

### Build Process

```bash
# Development
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview
```

### Environment Variables

```env
# .env.production
VITE_API_URL=https://api.afaapay.com
VITE_ANALYTICS_ENDPOINT=https://analytics.afaapay.com
```

### Deployment Checklist

- [ ] All tests passing
- [ ] No TypeScript errors
- [ ] Bundle size acceptable
- [ ] Performance metrics good
- [ ] Accessibility audit passed
- [ ] SEO meta tags present
- [ ] Environment variables set
- [ ] Monitoring configured

---

## Best Practices

### 1. Component Design

✅ Single Responsibility Principle  
✅ Props-based configuration  
✅ Composition over inheritance  
✅ Avoid prop drilling with Context  

### 2. State Management

✅ Keep state as local as possible  
✅ Use Context for global state  
✅ Memoize expensive computations  
✅ Avoid unnecessary re-renders  

### 3. Error Handling

✅ Use Error Boundaries  
✅ Handle API errors gracefully  
✅ Show user-friendly messages  
✅ Log errors for debugging  

### 4. Testing

✅ Test behavior, not implementation  
✅ Use descriptive test names  
✅ Aim for 85%+ coverage  
✅ Test edge cases  

### 5. Performance

✅ Code split by route  
✅ Lazy load images  
✅ Memoize expensive operations  
✅ Monitor Core Web Vitals  

---

## Common Patterns

### Pattern 1: Fetching Data

```typescript
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  api.get('/products')
    .then(setData)
    .catch(setError)
    .finally(() => setLoading(false));
}, []);
```

### Pattern 2: Form Handling

```typescript
const [formData, setFormData] = useState({ name: '', email: '' });
const [errors, setErrors] = useState({});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await api.post('/submit', formData);
  } catch (error) {
    setErrors(error.data);
  }
};
```

### Pattern 3: Conditional Rendering

```typescript
{loading && <Skeleton />}
{error && <ErrorMessage error={error} />}
{data && <Content data={data} />}
{!loading && !error && !data && <EmptyState />}
```

---

## Troubleshooting

### Issue: Component re-renders too often

**Solution:** Use `React.memo()` or `useMemo()`

```typescript
const ProductCard = memo(function ProductCard({ product }) {
  return <div>{product.name}</div>;
});
```

### Issue: API calls not working

**Solution:** Check environment variables and API service

```typescript
console.log('API URL:', import.meta.env.VITE_API_URL);
```

### Issue: TypeScript errors

**Solution:** Run type check and fix issues

```bash
npx tsc --noEmit
```

---

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/)

---

## Contributing

See `CONTRIBUTING.md` for contribution guidelines.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 2025 | Initial architecture documentation |

---

**Last Updated:** January 14, 2025  
**Maintainer:** Afa'a Pay Team
