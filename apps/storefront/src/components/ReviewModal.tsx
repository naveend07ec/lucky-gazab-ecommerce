'use client';

import React, { useState } from 'react';
import { Star, X, CheckCircle2 } from 'lucide-react';

interface ReviewModalProps {
  productId: string;
  productName: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ReviewModal({ productId, productName, isOpen, onClose }: ReviewModalProps) {
  const [rating, setRating] = useState(5);
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(`http://localhost:4000/api/v1/catalog/products/${productId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, rating, title, comment })
      });
    } catch {
      // Fallback handling
    }
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-panel max-w-lg w-full p-6 space-y-4 relative border-slate-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-bold text-white">Review Submitted!</h3>
            <p className="text-xs text-slate-400">
              Thank you for reviewing <strong>{productName}</strong>. Your review has been submitted to the moderation queue.
            </p>
            <button
              onClick={onClose}
              className="gradient-button px-6 py-2.5 rounded-xl text-xs font-bold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
              Write a Review for {productName}
            </h3>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Select Star Rating</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-amber-400 focus:outline-none"
                  >
                    <Star className={`w-6 h-6 ${star <= rating ? 'fill-amber-400' : 'text-slate-600'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Kavita Mehta"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Review Headline</label>
              <input
                type="text"
                required
                placeholder="e.g. Best hair mask for salon finish!"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Detailed Review</label>
              <textarea
                rows={3}
                required
                placeholder="Share your experience with this product..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:border-brand-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-button py-3 rounded-xl font-bold text-sm"
            >
              {isSubmitting ? 'Submitting Review...' : 'Submit Customer Review'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
