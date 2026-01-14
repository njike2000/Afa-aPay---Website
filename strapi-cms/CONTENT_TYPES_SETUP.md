# Strapi Content Types Setup Guide

This guide explains how to create and configure the three main content types for Afa'a Pay CMS.

## Prerequisites

1. Strapi running at `http://localhost:1337`
2. Admin account created
3. Logged into admin panel at `http://localhost:1337/admin`

## Creating Content Types

### 1. Blog Article Content Type

**Steps:**
1. Go to Content-Type Builder (left sidebar)
2. Click "Create new collection type"
3. Name: `Blog Article` (singular), `Blog Articles` (plural)
4. Click "Continue"

**Fields to Add:**

| Field Name | Type | Options |
|-----------|------|---------|
| title | String | Required, Unique |
| slug | String | Required, Unique |
| content | Rich Text | Required |
| excerpt | Text | - |
| author | String | - |
| date | Date | - |
| category | String | - |
| language | Enumeration | Required, Values: en, fr |
| featured | Boolean | Default: false |
| image | Media | - |

**After creating fields:**
1. Click "Save"
2. Go to Settings (in the collection type)
3. Enable "Draft & Publish"
4. Click "Save"

### 2. Testimonial Content Type

**Steps:**
1. Go to Content-Type Builder
2. Click "Create new collection type"
3. Name: `Testimonial` (singular), `Testimonials` (plural)
4. Click "Continue"

**Fields to Add:**

| Field Name | Type | Options |
|-----------|------|---------|
| name | String | Required |
| company | String | - |
| position | String | - |
| quote | Text | Required |
| rating | Integer | Min: 1, Max: 5 |
| language | Enumeration | Required, Values: en, fr |
| image | Media | - |

**After creating fields:**
1. Click "Save"
2. Go to Settings
3. Enable "Draft & Publish"
4. Click "Save"

### 3. Use Case Content Type

**Steps:**
1. Go to Content-Type Builder
2. Click "Create new collection type"
3. Name: `Use Case` (singular), `Use Cases` (plural)
4. Click "Continue"

**Fields to Add:**

| Field Name | Type | Options |
|-----------|------|---------|
| title | String | Required |
| slug | String | Required, Unique |
| description | Text | Required |
| segment | Enumeration | Required, Values: individuals, smes, enterprises, financial, government |
| benefits | JSON | - |
| results | Text | - |
| language | Enumeration | Required, Values: en, fr |
| image | Media | - |

**After creating fields:**
1. Click "Save"
2. Go to Settings
3. Enable "Draft & Publish"
4. Click "Save"

## Setting Up Permissions

### Public Access (for reading content)

1. Go to Settings → Users & Permissions Plugin → Roles
2. Click "Public"
3. Under "Permissions", expand each content type:
   - **Blog Articles**: Check "find" and "findOne"
   - **Testimonials**: Check "find" and "findOne"
   - **Use Cases**: Check "find" and "findOne"
4. Click "Save"

### Authenticated Access (for creating/editing content)

1. Go to Settings → Users & Permissions Plugin → Roles
2. Click "Authenticated"
3. Under "Permissions", expand each content type:
   - Check "create", "read", "update", "delete"
4. Click "Save"

## Adding Sample Content

### Sample Blog Article (English)

**Title:** How to Reduce Payment Fraud by 90%
**Slug:** how-to-reduce-payment-fraud
**Content:** 
```
Learn the top strategies businesses are using to eliminate payment fraud and protect their revenue.

Key points:
- Use escrow protection for all transactions
- Implement digital contracts
- Monitor transaction patterns
- Use trust scores to verify parties
```
**Author:** Sarah Johnson
**Date:** 2025-01-10
**Category:** Security
**Language:** en

### Sample Testimonial (English)

**Name:** John Doe
**Company:** TechStart Inc
**Position:** CEO
**Quote:** "Afa'a Pay transformed how we handle payments. We've reduced fraud by 95% and increased customer trust significantly."
**Rating:** 5
**Language:** en

### Sample Use Case (English)

**Title:** E-commerce Store Owner
**Slug:** ecommerce-store-owner
**Description:** How online sellers use Afa'a Pay to accept payments safely and build customer trust
**Segment:** smes
**Benefits:** 
```json
[
  "Accept payments from customers worldwide",
  "Automatic escrow protection",
  "Dispute resolution in 24-72 hours",
  "Build trust score for better terms"
]
```
**Language:** en

## Verifying Setup

### Check API Endpoints

Test the API endpoints to verify content types are working:

```bash
# Get all blog articles
curl http://localhost:1337/api/blog-articles

# Get all testimonials
curl http://localhost:1337/api/testimonials

# Get all use cases
curl http://localhost:1337/api/use-cases

# Filter by language
curl "http://localhost:1337/api/blog-articles?filters[language][$eq]=en"
```

### Test in React Frontend

The React frontend should now fetch content from Strapi. Check:
1. Blog page loads articles from CMS
2. Testimonials section displays from CMS
3. Use cases filter by segment and language

## Troubleshooting

### Content not appearing in API

1. Check if content is published (Draft & Publish enabled)
2. Verify permissions are set correctly
3. Check browser console for API errors
4. Verify Strapi is running on correct port

### Language filtering not working

1. Ensure `language` field is set on all content
2. Check filter syntax in API call
3. Verify language values match (en, fr)

### CORS errors

1. Go to Settings → Configurations → Middlewares
2. Configure CORS for your frontend URL
3. Restart Strapi

## Next Steps

1. Create content in multiple languages (en, fr)
2. Test filtering by language in React
3. Set up media uploads
4. Configure webhooks for content updates
5. Deploy to production
