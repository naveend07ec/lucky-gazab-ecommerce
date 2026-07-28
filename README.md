# Lucky's GAZAB HI GAZAB — Haute Beautē & Salon Professional E-Commerce Monorepo

> **Production-Ready Enterprise E-Commerce Platform** for **Lucky's GAZAB HI GAZAB** (Indore, Madhya Pradesh).

---

## 📌 Executive Summary & Ground Truth Business Details

- **Business Name**: Lucky's GAZAB HI GAZAB
- **Flagship Store Address**: UG-2, Raunak Tower, Near Anand Bazar Square, Khajrana Road, Indore, 452018, Madhya Pradesh, India
- **Landline Helpline**: `0731-4026665`
- **Mobile / WhatsApp**: `9926089665`
- **Official Email**: `mgmatai@hotmail.com`
- **Super Administrator Credentials**:
  - **Email**: `mgmatai@hotmail.com`
  - **Default Password**: `AdminPassword123!`

---

## 🏗️ Architecture & Monorepo Structure

```
GAZAB/
├── apps/
│   ├── api/          # Express REST API + Prisma ORM + PDFKit (Port 4000)
│   ├── storefront/   # Next.js 14 Customer Storefront + Framer Motion (Port 3000)
│   └── admin/        # Vite + React 18 Enterprise Admin Console (Port 5173)
├── packages/
│   └── shared-types/ # Shared TypeScript DTOs, GST Math Utilities & Store Data
├── docker-compose.yml# Production Containerization Orchestration
├── Dockerfile        # Monorepo Multi-Stage Build Specification
├── render.yaml       # Infrastructure as Code for Render Cloud Deployment
└── README.md
```

---

## ⚡ Quick Start — Local Development

### 1. Prerequisites
- **Node.js**: `>= 20.0.0`
- **npm**: `>= 10.0.0`
- **Docker & Docker Compose** (Optional, for containerized running)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/your-username/lucky-gazab-ecommerce.git
cd lucky-gazab-ecommerce

# Install monorepo dependencies
npm install

# Build shared types package
npm run build:types
```

### 3. Run Development Servers
```bash
# Start Express Backend API (http://localhost:4000)
npm run dev:api

# Start Next.js Customer Storefront (http://localhost:3000)
npm run dev:storefront

# Start Vite Admin Dashboard Console (http://localhost:5173)
npm run dev:admin
```

---

## 🐳 Docker Deployment

Run the complete stack with PostgreSQL, Redis, Express API, Next.js Storefront, and Vite Admin using Docker Compose:

```bash
# Build and start container services
docker-compose up --build -d

# Verify running container status
docker-compose ps
```

---

## 🚀 GitHub & Render Cloud Deployment

### Deployment via Render Blueprint (`render.yaml`)

1. Push your code to your **GitHub Repository**.
2. Log into your [Render Dashboard](https://dashboard.render.com/).
3. Click **New +** → **Blueprint**.
4. Connect your GitHub Repository containing `render.yaml`.
5. Render will automatically provision:
   - **PostgreSQL Database** (`lucky-gazab-db`)
   - **Express API Web Service** (`lucky-gazab-api`)
   - **Next.js Customer Storefront** (`lucky-gazab-storefront`)
   - **Vite Admin Dashboard Static Site** (`lucky-gazab-admin`)

---

## 🗄️ Database Migrations & Prisma Commands

```bash
# Generate Prisma Client
npm run prisma:generate --workspace=apps/api

# Run Database Migrations
npm run prisma:migrate --workspace=apps/api

# Seed Catalog & Super Admin Account
npm run seed --workspace=apps/api
```

---

## 🧪 Verification & Automated Testing

Run the monorepo acceptance test suite:
```bash
npx ts-node apps/api/test/order.test.ts
```

All 5 core verification test suites test:
1. Ground Truth Business Data Integrity
2. Cart Pricing, Coupon `GAZAB10`, and MP State CGST/SGST (9% + 9%) Tax Split
3. Order Creation & GST Invoice Numbering (`INV-2026-xxxx`)
4. Order Pipeline State Transitions (Pending → Paid → Shipped)
5. GST Invoice PDF Streaming with PDFKit

---

## 📄 License & Ownership

© 2026 **Lucky's GAZAB HI GAZAB**. All rights reserved. Authorized distribution for retail and salon wholesale products.
