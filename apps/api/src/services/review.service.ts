export interface ReviewRecord {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  isVerifiedPurchase: boolean;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

const reviewsStore: ReviewRecord[] = [
  {
    id: 'rev-1',
    productId: 'p1',
    userName: 'Kavita Mehta',
    rating: 5,
    title: 'Best Hair Mask for Salon Hair!',
    comment: 'Instantly smooths dry ends. Buying second jar from Lucky GAZAB HI GAZAB!',
    isVerifiedPurchase: true,
    status: 'approved',
    createdAt: new Date(Date.now() - 172800000)
  },
  {
    id: 'rev-2',
    productId: 'p2',
    userName: 'Siddharth Rao',
    rating: 5,
    title: 'Instant Bridal Glow',
    comment: 'O3+ kit delivers genuine salon facial results. Highly recommended.',
    isVerifiedPurchase: true,
    status: 'approved',
    createdAt: new Date(Date.now() - 86400000)
  }
];

export class ReviewService {
  static getProductReviews(productId: string) {
    return reviewsStore.filter(r => (r.productId === productId || productId === 'all') && r.status === 'approved');
  }

  static getAdminReviews() {
    return reviewsStore;
  }

  static submitReview(data: { productId: string; userName: string; rating: number; title: string; comment: string }) {
    const review: ReviewRecord = {
      id: `rev-${Date.now()}`,
      productId: data.productId,
      userName: data.userName,
      rating: data.rating,
      title: data.title,
      comment: data.comment,
      isVerifiedPurchase: true,
      status: 'pending',
      createdAt: new Date()
    };
    reviewsStore.unshift(review);
    return review;
  }

  static updateReviewStatus(id: string, status: 'approved' | 'rejected') {
    const rev = reviewsStore.find(r => r.id === id);
    if (rev) {
      rev.status = status;
    }
    return rev;
  }
}
