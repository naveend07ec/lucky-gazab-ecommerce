/**
 * Ground Truth Data & System Constants for Lucky's GAZAB HI GAZAB
 * Single source of truth for business contact, SEO schemas, and API contracts.
 */

export const GROUND_TRUTH_DATA = {
  businessName: "Lucky's GAZAB HI GAZAB",
  tagline: "Branded Cosmetics, Salon Professional Products & Beauty Accessories",
  categories: [
    "Retail & Wholesale Branded Cosmetics",
    "Salon Professional Products",
    "Beauty Accessories",
    "Hair Care",
    "Skin Care",
    "Personal Care",
    "Professional Salon Range"
  ],
  phoneLandline: "0731-4026665",
  mobile: "9926089665",
  whatsapp: "9926089665",
  email: "mgmatai@hotmail.com",
  address: {
    streetAddress: "UG-2, Raunak Tower, Near Anand Bazar Square, Khajrana Road",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452018",
    addressCountry: "IN"
  },
  country: "India",
  currency: "INR",
  currencySymbol: "₹",
  defaultLanguage: "en-IN",
  businessModel: "B2C retail + B2B wholesale"
} as const;

export const ORGANIZATION_SCHEMA_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": GROUND_TRUTH_DATA.businessName,
  "category": GROUND_TRUTH_DATA.categories,
  "telephone": "+91-731-4026665",
  "mobile": "+91-9926089665",
  "whatsapp": "+91-9926089665",
  "email": GROUND_TRUTH_DATA.email,
  "address": GROUND_TRUTH_DATA.address,
  "gstin": null,
  "openingHours": null,
  "geo": null
};

// Roles & Permissions
export enum UserRole {
  SUPER_ADMIN = "super_admin",
  ADMIN = "admin",
  CATALOG_MANAGER = "catalog_manager",
  ORDER_MANAGER = "order_manager",
  CUSTOMER = "customer"
}

export enum OrderStatus {
  PENDING = "pending",
  PAID = "paid",
  PROCESSING = "processing",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
  REFUNDED = "refunded"
}

export enum PaymentStatus {
  UNPAID = "unpaid",
  PAID = "paid",
  FAILED = "failed",
  REFUNDED = "refunded"
}

export enum PaymentProvider {
  RAZORPAY = "razorpay",
  COD = "cod",
  UPI = "upi",
  CARD = "card",
  NETBANKING = "netbanking",
  WALLET = "wallet"
}

export enum CouponType {
  FLAT = "flat",
  PERCENTAGE = "percentage"
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  error?: {
    code: string;
    message: string;
    details?: any[];
  };
}

export interface ProductVariantDto {
  id: string;
  sku: string;
  size?: string | null;
  color?: string | null;
  shade?: string | null;
  mrp: number;
  sellingPrice: number;
  barcode?: string | null;
  quantity: number;
  status: string;
}

export interface ProductDto {
  id: string;
  name: string;
  slug: string;
  sku: string;
  barcode?: string | null;
  hsnCode?: string | null;
  shortDescription?: string | null;
  description?: string | null;
  highlights?: string[];
  benefits?: string[];
  ingredients?: string | null;
  usageInstructions?: string | null;
  mrp: number;
  sellingPrice: number;
  brandName?: string;
  categoryName?: string;
  variants?: ProductVariantDto[];
  images?: Array<{ url: string; altText: string; isPrimary: boolean }>;
  avgRating: number;
  reviewCount: number;
  status: string;
}
