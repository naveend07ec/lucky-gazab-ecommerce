import React, { useState } from 'react';
import { ShieldCheck, Terminal, AlertTriangle, User } from 'lucide-react';

export function AuditLogsPage() {
  const [activeTab, setActiveTab] = useState<'audit' | 'system'>('audit');

  const auditLogs = [
    { id: 'aud-1', actor: 'Lucky Matai (Super Admin)', action: 'products.create', entity: 'Product (SKU: LOR-ABS-MASK-250)', ip: '127.0.0.1', date: '2026-07-28 12:15:00' },
    { id: 'aud-2', actor: 'Order Manager', action: 'orders.status_update', entity: 'Order GAZAB-2026-1001 → SHIPPED', ip: '127.0.0.1', date: '2026-07-28 12:10:00' },
    { id: 'aud-3', actor: 'Super Admin', action: 'coupons.create', entity: 'Coupon GAZAB10 (10% OFF)', ip: '127.0.0.1', date: '2026-07-27 18:30:00' }
  ];

  const systemLogs = [
    { id: 'sys-1', level: 'INFO', message: 'Express API Server initialized on port 4000', context: 'main.ts', date: '2026-07-28 12:00:00' },
    { id: 'sys-2', level: 'INFO', message: 'Prisma Client connected to PostgreSQL schema', context: 'db.ts', date: '2026-07-28 12:00:01' },
    { id: 'sys-3', level: 'WARN', message: 'Razorpay webhook signature verified in test mode', context: 'order.service.ts', date: '2026-07-28 12:05:00' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Security Audit & System Health Logs</h1>
          <p className="text-xs text-slate-400">Track admin actor actions, permission checks, IP logging, and system error traces</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-3 border-b border-slate-800 pb-2 text-xs">
        <button
          onClick={() => setActiveTab('audit')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'audit' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-900'}`}
        >
          Audit Logs ({auditLogs.length})
        </button>
        <button
          onClick={() => setActiveTab('system')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'system' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-900'}`}
        >
          System Health Logs ({systemLogs.length})
        </button>
      </div>

      {activeTab === 'audit' && (
        <div className="glass-panel p-5 overflow-x-auto text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                <th className="py-3 px-2">Timestamp</th>
                <th className="py-3 px-2">Actor ID</th>
                <th className="py-3 px-2">Action Permission</th>
                <th className="py-3 px-2">Target Entity</th>
                <th className="py-3 px-2">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-200">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-900/40">
                  <td className="py-3 px-2 font-mono text-[11px] text-slate-400">{log.date}</td>
                  <td className="py-3 px-2 font-semibold text-white">{log.actor}</td>
                  <td className="py-3 px-2 font-mono text-brand-300">{log.action}</td>
                  <td className="py-3 px-2 text-slate-300">{log.entity}</td>
                  <td className="py-3 px-2 font-mono text-slate-400">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'system' && (
        <div className="glass-panel p-5 overflow-x-auto text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                <th className="py-3 px-2">Timestamp</th>
                <th className="py-3 px-2">Level</th>
                <th className="py-3 px-2">Log Message</th>
                <th className="py-3 px-2">Context</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-200">
              {systemLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-900/40">
                  <td className="py-3 px-2 font-mono text-[11px] text-slate-400">{log.date}</td>
                  <td className="py-3 px-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${log.level === 'INFO' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-amber-500/20 text-amber-400 border-amber-500/30'}`}>
                      {log.level}
                    </span>
                  </td>
                  <td className="py-3 px-2 font-mono text-slate-200">{log.message}</td>
                  <td className="py-3 px-2 font-mono text-brand-300">{log.context}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
