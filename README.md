# LUMIS — Modern E-Commerce Store

A premium, animated e-commerce web application built with React, Vite, Framer Motion, TailwindCSS, and Express.

## Tech Stack

**Frontend:** React 18, Vite, TailwindCSS, Framer Motion, React Router v6  
**Backend:** Node.js, Express  
**Data:** JSON product database

## Project Structure

```
lumis-ecommerce/
├── frontend/
│   └── src/
│       ├── components/       # Reusable UI components
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   ├── ProductCard.jsx
│       │   ├── CartItem.jsx
│       │   ├── CategoryCard.jsx
│       │   └── PageWrapper.jsx
│       ├── pages/            # Route pages
│       │   ├── Home.jsx
│       │   ├── Shop.jsx
│       │   ├── ProductDetail.jsx
│       │   ├── Cart.jsx
│       │   ├── Checkout.jsx
│       │   └── About.jsx
│       ├── context/
│       │   └── CartContext.jsx
│       └── data/
│           └── products.js   # Static fallback data
├── backend/
│   └── server.js
├── data/
│   └── products.json         # Product database
└── README.md
```

## Quick Start

### Option 1: Full Stack (Frontend + Backend)

```bash
# From root directory

# Install all dependencies
npm run install:all

# Start both servers concurrently
npm install  # install concurrently
npm run dev
```

Frontend runs at: http://localhost:5173  
Backend API runs at: http://localhost:3001

### Option 2: Frontend Only (uses static data fallback)

```bash
cd frontend
npm install
npm run dev
```

The frontend will automatically fall back to static data if the backend is unavailable.

### Option 3: Manual Startup

**Terminal 1 — Backend:**
```bash
cd backend
npm install
npm run dev
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## Features

- 🏠 **Home** — Hero section with animated gradient, featured products, categories
- 🛍 **Shop** — Full product grid with category filtering
- 📦 **Product Detail** — Large image, quantity selector, add to cart
- 🛒 **Cart** — Manage items, update quantities, see total
- 💳 **Checkout** — Order summary and visual checkout flow
- ℹ️ **About** — Brand story and values

## Design

- **Theme:** Light cream, charcoal, and gold accent palette
- **Typography:** Playfair Display (display) + DM Sans (body) + DM Mono (data)
- **Animations:** Framer Motion page transitions, scroll-triggered reveals, hover effects
- **Responsive:** Mobile → Tablet → Desktop layouts

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | All products |
| GET | `/api/products/featured` | Featured products |
| GET | `/api/products/:id` | Single product |
| GET | `/api/products/category/:cat` | Products by category |
