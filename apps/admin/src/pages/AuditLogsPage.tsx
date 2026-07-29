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
    <div className="space-y-6 text-[#111827]">
      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">Security Audit & System Health Logs</h1>
          <p className="text-xs text-[#6B7280]">Track admin actor actions, permission checks, IP logging, and system error traces</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-3 border-b border-[#E5E7EB] pb-2 text-xs">
        <button
          onClick={() => setActiveTab('audit')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'audit' ? 'bg-[#2563EB] text-white' : 'text-[#6B7280] hover:bg-slate-100'}`}
        >
          Audit Logs ({auditLogs.length})
        </button>
        <button
          onClick={() => setActiveTab('system')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'system' ? 'bg-[#2563EB] text-white' : 'text-[#6B7280] hover:bg-slate-100'}`}
        >
          System Health Logs ({systemLogs.length})
        </button>
      </div>

      {activeTab === 'audit' && (
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 overflow-x-auto text-xs shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E5E7EB] text-[#475569] uppercase font-bold text-[10px] bg-[#F8FAFC]">
                <th className="py-3 px-3">Timestamp</th>
                <th className="py-3 px-3">Actor ID</th>
                <th className="py-3 px-3">Action Permission</th>
                <th className="py-3 px-3">Target Entity</th>
                <th className="py-3 px-3">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-3 font-mono text-[11px] text-[#6B7280]">{log.date}</td>
                  <td className="py-3 px-3 font-bold text-[#111827]">{log.actor}</td>
                  <td className="py-3 px-3 font-mono text-[#2563EB] font-semibold">{log.action}</td>
                  <td className="py-3 px-3 text-[#374151]">{log.entity}</td>
                  <td className="py-3 px-3 font-mono text-[#6B7280]">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'system' && (
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 overflow-x-auto text-xs shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E5E7EB] text-[#475569] uppercase font-bold text-[10px] bg-[#F8FAFC]">
                <th className="py-3 px-3">Timestamp</th>
                <th className="py-3 px-3">Level</th>
                <th className="py-3 px-3">Log Message</th>
                <th className="py-3 px-3">Context</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
              {systemLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-3 font-mono text-[11px] text-[#6B7280]">{log.date}</td>
                  <td className="py-3 px-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${log.level === 'INFO' ? 'bg-blue-50 text-[#2563EB] border-blue-200' : 'bg-amber-50 text-[#D97706] border-amber-200'}`}>
                      {log.level}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-mono text-[#111827]">{log.message}</td>
                  <td className="py-3 px-3 font-mono text-[#2563EB] font-semibold">{log.context}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
