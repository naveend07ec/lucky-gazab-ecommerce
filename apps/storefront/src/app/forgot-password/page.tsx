'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMsg('');

    try {
      const res = await fetch('http://localhost:4000/api/v1/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrPhone })
      });
      const data = await res.json();
      setMsg(data.data?.message || 'Instructions to reset your password have been sent.');
    } catch {
      setMsg('If an account exists for this Email/Phone, reset instructions have been sent.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 space-y-6">
      <Link href="/login" className="text-xs text-brand-400 hover:underline inline-flex items-center">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Login
      </Link>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-extrabold text-white">Reset Your Password</h1>
        <p className="text-xs text-slate-400">
          Enter your email address or mobile number to receive password recovery instructions
        </p>
      </div>

      <div className="glass-panel p-6 space-y-4 border-slate-800">
        {msg && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{msg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Email or Mobile Number</label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="e.g. customer@example.com or 9893012345"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:border-brand-500"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="gradient-button w-full py-3.5 rounded-xl font-bold text-sm"
          >
            {isSubmitting ? 'Sending Instructions...' : 'Send Password Reset Link'}
          </button>
        </form>
      </div>
    </div>
  );
}
