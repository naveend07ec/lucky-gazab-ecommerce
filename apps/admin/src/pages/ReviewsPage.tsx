import React, { useState } from 'react';
import { Star, CheckCircle, XCircle } from 'lucide-react';

export function ReviewsPage() {
  const [reviews, setReviews] = useState([
    { id: 'rev-1', userName: 'Kavita Mehta', rating: 5, title: 'Best Hair Mask for Salon Hair!', comment: 'Instantly smooths dry ends.', status: 'approved' },
    { id: 'rev-2', userName: 'Siddharth Rao', rating: 5, title: 'Instant Bridal Glow', comment: 'O3+ kit delivers genuine salon facial results.', status: 'approved' },
    { id: 'rev-3', userName: 'Rahul K', rating: 4, title: 'Good pigment lipstick', comment: 'Long lasting formula.', status: 'pending' }
  ]);

  const updateStatus = (id: string, newStatus: string) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Review Moderation Queue</h1>
          <p className="text-xs text-slate-400">Approve or reject customer product reviews and star ratings</p>
        </div>
      </div>

      <div className="glass-panel p-5 overflow-x-auto text-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
              <th className="py-3 px-2">Customer Name</th>
              <th className="py-3 px-2">Rating</th>
              <th className="py-3 px-2">Title & Comment</th>
              <th className="py-3 px-2">Status</th>
              <th className="py-3 px-2 text-right">Moderation Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            {reviews.map((r) => (
              <tr key={r.id} className="hover:bg-slate-900/40">
                <td className="py-3 px-2 font-bold text-white">{r.userName}</td>
                <td className="py-3 px-2 font-bold text-amber-400">★ {r.rating} / 5</td>
                <td className="py-3 px-2">
                  <span className="font-semibold text-slate-200 block">{r.title}</span>
                  <span className="text-[10px] text-slate-400">{r.comment}</span>
                </td>
                <td className="py-3 px-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${r.status === 'approved' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : r.status === 'rejected' ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-amber-500/20 text-amber-400 border-amber-500/30'}`}>
                    {r.status.toUpperCase()}
                  </span>
                </td>
                <td className="py-3 px-2 text-right space-x-2">
                  <button
                    onClick={() => updateStatus(r.id, 'approved')}
                    className="bg-emerald-600/80 hover:bg-emerald-600 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(r.id, 'rejected')}
                    className="bg-red-600/80 hover:bg-red-600 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold"
                  >
                    Reject
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
