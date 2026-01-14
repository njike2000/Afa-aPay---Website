# Contributing to Afa'a Pay Website

Thank you for your interest in contributing to the Afa'a Pay website! This guide will help you get started.

---

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Development Setup](#development-setup)
3. [Code Standards](#code-standards)
4. [Commit Guidelines](#commit-guidelines)
5. [Pull Request Process](#pull-request-process)
6. [Testing](#testing)
7. [Documentation](#documentation)

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- Git

### Fork and Clone

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Afa-aPay---Website.git
cd Afa-aPay---Website

# Add upstream remote
git remote add upstream https://github.com/njike2000/Afa-aPay---Website.git
```

---

## Development Setup

### Install Dependencies

```bash
pnpm install
```

### Start Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

### Run Tests

```bash
pnpm test
```

### Run Linter

```bash
pnpm lint
```

---

## Code Standards

### TypeScript

- Use strict mode
- Avoid `any` types
- Add JSDoc comments for functions
- Use interfaces for object types

```typescript
/**
 * Fetches products from the API
 * @param limit - Maximum number of products to fetch
 * @returns Array of products
 * @throws APIError if the request fails
 */
export async function getProducts(limit: number = 10): Promise<Product[]> {
  // ...
}
```

### React Components

- Functional components only
- Use hooks for state management
- Keep components under 200 lines
- Extract logic to custom hooks

```typescript
/**
 * Product card component
 * @param product - The product to display
 * @returns JSX element
 */
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="...">
      {/* content */}
    </div>
  );
}
```

### Naming Conventions

- Components: `PascalCase` (e.g., `ProductCard.tsx`)
- Functions: `camelCase` (e.g., `getProducts()`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_PRODUCTS`)
- Files: `kebab-case` for utilities, `PascalCase` for components

### CSS/Tailwind

- Use Tailwind CSS classes
- Avoid inline styles
- Use responsive prefixes: `sm:`, `md:`, `lg:`
- Group related classes

```tsx
<div className="flex flex-col gap-4 md:flex-row lg:gap-8">
  {/* content */}
</div>
```

---

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without feature changes
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Dependency updates, build changes

### Examples

```
feat(products): add product filtering by category
fix(home): resolve hero section layout issue
docs(architecture): update component hierarchy
test(hooks): add useProducts hook tests
```

### Best Practices

- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Limit first line to 50 characters
- Reference issues when applicable: "fixes #123"

---

## Pull Request Process

### Before Submitting

1. **Update your branch**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run tests**
   ```bash
   pnpm test
   ```

3. **Run linter**
   ```bash
   pnpm lint
   ```

4. **Build**
   ```bash
   pnpm build
   ```

### Submitting a PR

1. Push to your fork
   ```bash
   git push origin feature-branch
   ```

2. Open a Pull Request on GitHub

3. Fill in the PR template with:
   - Description of changes
   - Related issues
   - Type of change (feature, fix, etc.)
   - Testing performed
   - Screenshots (if applicable)

### PR Title Format

```
[TYPE] Brief description of changes
```

Examples:
- `[FEAT] Add product filtering`
- `[FIX] Resolve hero section layout`
- `[DOCS] Update architecture guide`

### PR Checklist

- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] New tests added for new functionality
- [ ] Documentation updated
- [ ] No console errors or warnings
- [ ] Changes are backward compatible

---

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage
```

### Writing Tests

#### Component Tests

```typescript
// __tests__/components/ProductCard.test.tsx
import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/cards/ProductCard';

describe('ProductCard', () => {
  it('renders product information', () => {
    const product = {
      id: '1',
      name: 'Test Product',
      shortDescription: 'Test description',
      slug: 'test',
      features: [],
      icon: () => null,
    };

    render(<ProductCard {...product} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('displays first 3 features', () => {
    const product = {
      id: '1',
      name: 'Test',
      shortDescription: 'Test',
      slug: 'test',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      icon: () => null,
    };

    render(<ProductCard {...product} />);
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.queryByText('Feature 4')).not.toBeInTheDocument();
  });
});
```

#### Hook Tests

```typescript
// __tests__/hooks/useProducts.test.ts
import { renderHook } from '@testing-library/react';
import { useProducts } from '@/hooks/useProducts';

describe('useProducts', () => {
  it('returns all products', () => {
    const { result } = renderHook(() => useProducts());
    expect(result.current).toHaveLength(6);
  });

  it('returns products with correct structure', () => {
    const { result } = renderHook(() => useProducts());
    expect(result.current[0]).toHaveProperty('id');
    expect(result.current[0]).toHaveProperty('name');
  });
});
```

### Test Coverage Goals

- **Overall:** 85%+
- **Components:** 90%+
- **Hooks:** 95%+
- **Services:** 100%

---

## Documentation

### JSDoc Comments

Add JSDoc comments to all functions and components:

```typescript
/**
 * Fetches products from the API
 * @param limit - Maximum number of products to fetch
 * @param category - Filter by category (optional)
 * @returns Promise resolving to array of products
 * @throws APIError if the request fails
 * @example
 * const products = await getProducts(10, 'payment');
 */
export async function getProducts(
  limit: number = 10,
  category?: string
): Promise<Product[]> {
  // ...
}
```

### README Updates

Update README.md if you:
- Add new features
- Change setup instructions
- Add new dependencies
- Modify project structure

### Architecture Documentation

Update ARCHITECTURE.md if you:
- Add new component types
- Change data flow patterns
- Add new services
- Modify state management

---

## Common Issues

### Issue: Tests failing after changes

**Solution:** Run tests locally before pushing

```bash
pnpm test
```

### Issue: TypeScript errors

**Solution:** Run type check

```bash
npx tsc --noEmit
```

### Issue: Linting errors

**Solution:** Fix linting issues

```bash
pnpm lint --fix
```

---

## Questions?

- Check existing issues and discussions
- Read ARCHITECTURE.md for design patterns
- Ask in pull request comments
- Open a new discussion

---

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Report inappropriate behavior

---

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

**Thank you for contributing to Afa'a Pay! 🚀**
