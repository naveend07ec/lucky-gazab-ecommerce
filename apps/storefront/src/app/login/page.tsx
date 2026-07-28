'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { LogIn, Mail, Lock, CheckCircle2, AlertCircle } from 'lucide-react';

function LoginFormContent() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/account';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setIsSubmitting(true);

    const result = await login(emailOrPhone, password);
    setIsSubmitting(false);

    if (result.success) {
      setSuccessMsg('Login successful! Redirecting to your account dashboard...');
      setTimeout(() => {
        router.push(redirectUrl);
      }, 800);
    } else {
      setErrorMsg(result.message || 'Invalid email/phone or password');
    }
  };

  return (
    <div className="glass-panel p-6 space-y-4 border-slate-800">
      {successMsg && (
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {errorMsg && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        <div>
          <label className="block text-slate-300 font-semibold mb-1">Email Address or Mobile Number</label>
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

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-slate-300 font-semibold">Password</label>
            <Link href="/forgot-password" className="text-[11px] text-brand-400 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <div className="relative">
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:border-brand-500"
            />
            <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center space-x-2 text-slate-400 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded border-slate-800 bg-slate-900 text-brand-600 focus:ring-brand-500"
            />
            <span>Remember me on this browser</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="gradient-button w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 mt-2"
        >
          {isSubmitting ? (
            <span>Authenticating...</span>
          ) : (
            <>
              <LogIn className="w-4 h-4" />
              <span>Sign In to Account</span>
            </>
          )}
        </button>
      </form>

      <div className="border-t border-slate-800/80 pt-4 text-center text-xs text-slate-400">
        Don't have an account yet?{' '}
        <Link href="/register" className="text-brand-400 font-bold hover:underline">
          Register New Account
        </Link>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16 space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-gradient-to-tr from-brand-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto text-white font-extrabold text-2xl shadow-lg shadow-brand-600/30">
          G
        </div>
        <h1 className="text-2xl font-extrabold text-white">Sign In to Your Account</h1>
        <p className="text-xs text-slate-400">
          Access your orders, saved shipping addresses, and wholesale pricing at {GROUND_TRUTH_DATA.businessName}
        </p>
      </div>
      <Suspense fallback={<div className="text-center text-xs text-slate-400 py-8">Loading login form...</div>}>
        <LoginFormContent />
      </Suspense>
    </div>
  );
}
