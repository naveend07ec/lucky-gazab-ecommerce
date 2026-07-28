export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  publishedAt: Date;
}

export interface CmsPageRecord {
  id: string;
  title: string;
  slug: string;
  content: string;
  updatedAt: Date;
}

const blogStore: BlogArticle[] = [
  {
    id: 'b1',
    title: 'Top 5 Salon Professional Hair Care Masks for Damaged Hair in Indore',
    slug: 'top-5-salon-hair-masks-damaged-hair-indore',
    excerpt: 'Discover expert tips from salon professionals on choosing deep conditioning hair repair masks.',
    content: 'Chemically treated or heat-styled hair requires intense conditioning restoring lost moisture...',
    author: 'Lucky Matai',
    category: 'Hair Care Tips',
    tags: ['hair care', 'salon', 'loreal'],
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80',
    publishedAt: new Date(Date.now() - 172800000)
  },
  {
    id: 'b2',
    title: 'Complete Guide to O3+ Professional Facial Kits for Bridal Glow',
    slug: 'guide-to-o3-professional-facial-kits-bridal-glow',
    excerpt: 'Step-by-step breakdown of O3+ brightening facial treatment pods used by top beauty parlors across MP.',
    content: 'O3+ facial kits use active brightening pods to reduce pigmentation and deliver bridal radiance...',
    author: 'Salon Expert',
    category: 'Skin Care & Facials',
    tags: ['skin care', 'facial kit', 'o3+'],
    image: 'https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80',
    publishedAt: new Date(Date.now() - 86400000)
  }
];

const cmsStore: CmsPageRecord[] = [
  {
    id: 'cms-1',
    title: 'Privacy Policy',
    slug: 'privacy-policy',
    content: 'At Lucky\'s GAZAB HI GAZAB, located at UG-2 Raunak Tower Near Anand Bazar Square Indore, we protect customer data...',
    updatedAt: new Date()
  },
  {
    id: 'cms-2',
    title: 'Terms & Conditions',
    slug: 'terms',
    content: 'Terms and conditions governing retail and wholesale purchases from Lucky\'s GAZAB HI GAZAB...',
    updatedAt: new Date()
  },
  {
    id: 'cms-3',
    title: 'Shipping & Return Policy',
    slug: 'shipping-policy',
    content: 'Shipping policy across Madhya Pradesh (CGST/SGST) and interstate (IGST)...',
    updatedAt: new Date()
  }
];

export class CmsBlogService {
  static getBlogPosts() {
    return blogStore;
  }

  static getBlogPostBySlug(slug: string) {
    const post = blogStore.find(p => p.slug === slug);
    if (!post) {
      const error: any = new Error(`Blog post with slug '${slug}' not found`);
      error.statusCode = 404;
      error.code = 'NOT_FOUND';
      throw error;
    }
    return post;
  }

  static createBlogPost(data: { title: string; content: string; excerpt?: string; category?: string; author?: string; tags?: string[] }) {
    if (!data.title || !data.content) {
      const error: any = new Error('Title and content are required');
      error.statusCode = 400;
      error.code = 'VALIDATION_ERROR';
      throw error;
    }
    const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const post: BlogArticle = {
      id: `b-${Date.now()}`,
      title: data.title,
      slug,
      content: data.content,
      excerpt: data.excerpt || data.content.slice(0, 150),
      author: data.author || 'Lucky Matai',
      category: data.category || 'Beauty & Cosmetics Guide',
      tags: data.tags || ['cosmetics'],
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80',
      publishedAt: new Date()
    };
    blogStore.unshift(post);
    return post;
  }

  static getCmsPages() {
    return cmsStore;
  }

  static getCmsPageBySlug(slug: string) {
    const page = cmsStore.find(p => p.slug === slug);
    if (!page) {
      const error: any = new Error(`CMS policy page '${slug}' not found`);
      error.statusCode = 404;
      error.code = 'NOT_FOUND';
      throw error;
    }
    return page;
  }
}
