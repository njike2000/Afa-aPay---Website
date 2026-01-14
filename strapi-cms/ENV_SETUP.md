# Strapi Environment Setup

## Create .env file

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

## Environment Variables

### Server Configuration
- `HOST` - Server host (default: 0.0.0.0)
- `PORT` - Server port (default: 1337)

### Security Keys
Generate these using:
```bash
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
```

- `APP_KEYS` - Application keys for session management
- `API_TOKEN_SALT` - Salt for API tokens
- `ADMIN_JWT_SECRET` - Secret for admin JWT tokens
- `TRANSFER_TOKEN_SALT` - Salt for transfer tokens
- `JWT_SECRET` - Secret for JWT tokens

### Database
- `DATABASE_CLIENT` - sqlite (development) or postgres (production)
- `DATABASE_FILENAME` - SQLite database file path (development only)

For PostgreSQL production:
```
DATABASE_CLIENT=postgres
DATABASE_HOST=your_host
DATABASE_PORT=5432
DATABASE_NAME=afaapay_strapi
DATABASE_USERNAME=your_user
DATABASE_PASSWORD=your_password
```

### API Configuration
- `API_URL` - Public API URL (for production)
- `ADMIN_URL` - Admin panel URL

## First Time Setup

1. Create `.env` file with all required variables
2. Run `pnpm install`
3. Run `pnpm develop`
4. Visit `http://localhost:1337/admin`
5. Create admin account
6. Create content types (see CMS_VERSION_README.md)

## Production Deployment

For production on Manus:
1. Use PostgreSQL database
2. Set `API_URL` to your production domain
3. Generate new security keys
4. Use strong passwords for database
5. Enable HTTPS
