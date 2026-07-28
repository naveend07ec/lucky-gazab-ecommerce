'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  roles?: string[];
}

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (emailOrPhone: string, pass: string) => Promise<{ success: boolean; message?: string }>;
  register: (data: { name: string; email: string; phone?: string; password: string }) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Restore session from localStorage on mount
    try {
      const storedToken = localStorage.getItem('lucky_gazab_token');
      const storedUser = localStorage.getItem('lucky_gazab_user');
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch {
      // Clear corrupt state
      localStorage.removeItem('lucky_gazab_token');
      localStorage.removeItem('lucky_gazab_user');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (emailOrPhone: string, pass: string) => {
    try {
      const res = await fetch('http://localhost:4000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrPhone, password: pass })
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        return { success: false, message: data.error?.message || 'Login failed' };
      }

      const { user: userObj, accessToken } = data.data;
      setUser(userObj);
      setToken(accessToken);
      localStorage.setItem('lucky_gazab_token', accessToken);
      localStorage.setItem('lucky_gazab_user', JSON.stringify(userObj));
      return { success: true };
    } catch (err: any) {
      // Offline fallback for demo customer
      if (emailOrPhone.toLowerCase() === 'customer@example.com' || emailOrPhone === '9893012345') {
        const dummyUser = { id: 'usr-cust-1', name: 'Indore Customer', email: 'customer@example.com', phone: '9893012345' };
        const dummyToken = 'mock-jwt-token-customer-2026';
        setUser(dummyUser);
        setToken(dummyToken);
        localStorage.setItem('lucky_gazab_token', dummyToken);
        localStorage.setItem('lucky_gazab_user', JSON.stringify(dummyUser));
        return { success: true };
      }
      return { success: false, message: 'Unable to connect to authentication server' };
    }
  };

  const register = async (data: { name: string; email: string; phone?: string; password: string }) => {
    try {
      const res = await fetch('http://localhost:4000/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const resJson = await res.json();
      if (!res.ok || !resJson.success) {
        return { success: false, message: resJson.error?.message || 'Registration failed' };
      }

      const { user: userObj, accessToken } = resJson.data;
      setUser(userObj);
      setToken(accessToken);
      localStorage.setItem('lucky_gazab_token', accessToken);
      localStorage.setItem('lucky_gazab_user', JSON.stringify(userObj));
      return { success: true };
    } catch {
      // Offline fallback registration
      const newUser = { id: `usr-${Date.now()}`, name: data.name, email: data.email, phone: data.phone };
      const dummyToken = `mock-jwt-token-${Date.now()}`;
      setUser(newUser);
      setToken(dummyToken);
      localStorage.setItem('lucky_gazab_token', dummyToken);
      localStorage.setItem('lucky_gazab_user', JSON.stringify(newUser));
      return { success: true };
    }
  };

  const logout = () => {
    // 1. Invalidate session state
    setUser(null);
    setToken(null);

    // 2. Remove token & user from localStorage
    localStorage.removeItem('lucky_gazab_token');
    localStorage.removeItem('lucky_gazab_user');

    // 3. Clear auth cookies
    document.cookie = 'lucky_gazab_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // 4. Redirect immediately to Login page
    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token && !!user,
        isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
