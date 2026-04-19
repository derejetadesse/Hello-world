# Threadline — Next.js + Printify T-Shirt Store

Modern e-commerce starter built with Next.js (App Router) and Printify.

## Features

- Homepage with hero section and featured products
- Product catalog page (`/products`)
- Dynamic product detail page (`/products/[id]`)
- Printify API integration with robust local fallback catalog
- API route for product data at `/api/products`
- Clean, responsive UI

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Printify Setup

To fetch products directly from Printify, add env vars:

```bash
PRINTIFY_API_TOKEN=your_token_here
PRINTIFY_SHOP_ID=your_shop_id_here
```

Without these, the app uses local mock products so development still works.
