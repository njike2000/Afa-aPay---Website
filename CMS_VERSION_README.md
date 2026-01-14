# Afa'a Pay - CMS Version

This branch (`cms-version`) integrates **Strapi CMS** with the existing React frontend to manage blog articles, testimonials, and use cases dynamically.

## Architecture

```
├── client/                    # React frontend (same as main)
│   ├── src/
│   │   ├── pages/            # Pages (Home, Blog, Demo, Product)
│   │   ├── components/       # Reusable components
│   │   ├── locales/          # i18n translations (EN/FR)
│   │   └── services/         # API services for Strapi
│   └── ...
├── server/                    # Express backend (same as main)
├── strapi-cms/               # NEW: Strapi CMS backend
│   ├── src/
│   │   ├── api/
│   │   │   ├── blog-article/ # Blog articles content type
│   │   │   ├── testimonial/  # Testimonials content type
│   │   │   └── use-case/     # Use cases content type
│   │   └── ...
│   └── package.json
└── ...
```

## Setup Instructions

### 1. Install Dependencies

```bash
# Install main project dependencies
pnpm install

# Install Strapi dependencies
cd strapi-cms
pnpm install
cd ..
```

### 2. Run Strapi CMS

```bash
cd strapi-cms
pnpm develop
```

Strapi will start at `http://localhost:1337`

### 3. Run React Frontend

```bash
pnpm dev
```

Frontend will start at `http://localhost:3000`

### 4. Access Strapi Admin Panel

1. Navigate to `http://localhost:1337/admin`
2. Create admin account on first visit
3. Create content types:
   - **Blog Article** (Title, Content, Author, Date, Category, Language)
   - **Testimonial** (Name, Company, Quote, Rating, Language)
   - **Use Case** (Title, Description, Segment, Benefits, Language)

## Content Models

### Blog Article
- `title` (String, required)
- `slug` (String, unique)
- `content` (Rich text)
- `author` (String)
- `date` (Date)
- `category` (String)
- `language` (Enum: en, fr)

### Testimonial
- `name` (String, required)
- `company` (String)
- `quote` (Text, required)
- `rating` (Number 1-5)
- `language` (Enum: en, fr)

### Use Case
- `title` (String, required)
- `description` (Text)
- `segment` (Enum: individuals, smes, enterprises, financial, government)
- `benefits` (Array of strings)
- `language` (Enum: en, fr)

## API Endpoints

### Blog Articles
- `GET /api/blog-articles` - Get all articles
- `GET /api/blog-articles/:id` - Get single article
- `POST /api/blog-articles` - Create article (authenticated)
- `PUT /api/blog-articles/:id` - Update article (authenticated)
- `DELETE /api/blog-articles/:id` - Delete article (authenticated)

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/:id` - Get single testimonial
- `POST /api/testimonials` - Create testimonial (authenticated)

### Use Cases
- `GET /api/use-cases` - Get all use cases
- `GET /api/use-cases?segment=smes` - Filter by segment
- `GET /api/use-cases/:id` - Get single use case

## Frontend Integration

The React frontend fetches content from Strapi API:

```typescript
// services/strapiService.ts
import axios from 'axios';

const STRAPI_URL = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';

export const getBlogArticles = async (language: string) => {
  const response = await axios.get(`${STRAPI_URL}/api/blog-articles?filters[language][$eq]=${language}`);
  return response.data.data;
};

export const getTestimonials = async (language: string) => {
  const response = await axios.get(`${STRAPI_URL}/api/testimonials?filters[language][$eq]=${language}`);
  return response.data.data;
};

export const getUseCases = async (segment: string, language: string) => {
  const response = await axios.get(
    `${STRAPI_URL}/api/use-cases?filters[segment][$eq]=${segment}&filters[language][$eq]=${language}`
  );
  return response.data.data;
};
```

## Bilingual Support

All content types include a `language` field (en/fr) to support bilingual content. The frontend automatically filters content based on the selected language using i18next.

## Environment Variables

Create `.env` file in `strapi-cms/`:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys_here
API_TOKEN_SALT=your_salt_here
ADMIN_JWT_SECRET=your_secret_here
TRANSFER_TOKEN_SALT=your_salt_here
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=your_jwt_secret
```

## Deployment

### Deploy Strapi to Manus
1. Create a separate Manus project for Strapi backend
2. Configure database (PostgreSQL recommended for production)
3. Set environment variables in Manus dashboard

### Deploy React Frontend
1. Update `REACT_APP_STRAPI_URL` to production Strapi URL
2. Push to `cms-version` branch
3. Deploy via Manus

## Branches

- **main** - Current production version (without CMS)
- **original-website** - Backup of current working version
- **cms-version** - CMS integration version (this branch)

## Next Steps

1. Set up Strapi database (PostgreSQL for production)
2. Create content types in Strapi admin panel
3. Populate sample content (blog articles, testimonials, use cases)
4. Update React components to fetch from Strapi API
5. Test bilingual content switching
6. Deploy to production

## Support

For issues or questions, refer to:
- [Strapi Documentation](https://docs.strapi.io)
- [React Documentation](https://react.dev)
- [i18next Documentation](https://www.i18next.com)
