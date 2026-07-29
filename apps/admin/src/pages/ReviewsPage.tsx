import React, { useState } from 'react';
import { Star, CheckCircle2, Trash2 } from 'lucide-react';

export function ReviewsPage() {
  const [reviews, setReviews] = useState([
    { id: 'r1', user: 'Vikram Singh', product: "L'Oréal Absolut Repair Hair Mask", rating: 5, comment: 'Excellent hair mask for chemically treated hair. Very fast delivery in Indore.', status: 'Approved', date: '2026-07-25' },
    { id: 'r2', user: 'Ananya Sharma', product: 'O3+ Professional Brightening Facial Kit', rating: 5, comment: '100% genuine product. Gives bridal glow within 30 minutes.', status: 'Approved', date: '2026-07-22' }
  ]);

  return (
    <div className="space-y-6 text-[#111827]">
      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">Review Moderation</h1>
          <p className="text-xs text-[#6B7280]">Approve customer star ratings and feedback before publication</p>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 overflow-x-auto text-xs shadow-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#E5E7EB] text-[#475569] uppercase font-bold text-[10px] bg-[#F8FAFC]">
              <th className="py-3 px-3">Customer</th>
              <th className="py-3 px-3">Product Name</th>
              <th className="py-3 px-3">Rating</th>
              <th className="py-3 px-3">Comment</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
            {reviews.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-3 font-bold text-[#111827]">{r.user}</td>
                <td className="py-3.5 px-3 font-medium text-[#475569]">{r.product}</td>
                <td className="py-3.5 px-3 font-bold text-[#D97706]">{r.rating} ★</td>
                <td className="py-3.5 px-3 text-[#374151] max-w-sm truncate">{r.comment}</td>
                <td className="py-3.5 px-3">
                  <span className="bg-emerald-50 text-[#16A34A] text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200 uppercase">
                    {r.status}
                  </span>
                </td>
                <td className="py-3.5 px-3 text-right">
                  <button onClick={() => setReviews(reviews.filter(item => item.id !== r.id))} className="text-[#475569] hover:text-[#DC2626] p-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
