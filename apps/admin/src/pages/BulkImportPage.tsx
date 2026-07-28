import React, { useState } from 'react';
import { Upload, CheckCircle2, AlertCircle, FileText, ArrowRight } from 'lucide-react';

export function BulkImportPage() {
  const [importReport, setImportReport] = useState<any>(null);

  const handleSimulateImport = () => {
    const mockReport = {
      totalRows: 3,
      successCount: 2,
      errorCount: 1,
      report: [
        { rowNumber: 1, name: "Streax Hair Serum 100ml", sku: "STR-SERUM-100", status: "success", message: "Product & variant SKU imported successfully" },
        { rowNumber: 2, name: "Lotus Herbals Sunblock SPF50", sku: "LOT-SUN-SPF50", status: "success", message: "Product & variant SKU imported successfully" },
        { rowNumber: 3, name: "Invalid Item", sku: "", status: "error", message: "SKU is required; Selling price cannot exceed MRP" }
      ]
    };
    setImportReport(mockReport);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Bulk Product Import (CSV/Excel)</h1>
          <p className="text-xs text-slate-400">Upload bulk CSV or Excel catalog spreadsheets with automatic validation report</p>
        </div>
      </div>

      {/* Drag & Drop Upload Zone */}
      <div className="glass-panel p-8 text-center space-y-4 border-dashed border-2 border-brand-500/40">
        <div className="w-16 h-16 bg-brand-950/80 text-brand-400 rounded-full flex items-center justify-center mx-auto border border-brand-800">
          <Upload className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Drag and drop your CSV or Excel file here</h3>
          <p className="text-xs text-slate-400 mt-1">Accepts .csv, .xlsx format (Max size: 10MB)</p>
        </div>
        <button
          onClick={handleSimulateImport}
          className="gradient-button px-6 py-2.5 rounded-xl font-bold text-xs inline-flex items-center space-x-2"
        >
          <FileText className="w-4 h-4" />
          <span>Upload & Validate CSV Spreadsheet</span>
        </button>
      </div>

      {/* Validation Report Table */}
      {importReport && (
        <div className="glass-panel p-6 space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white">Import Validation Report</h3>
            <div className="flex space-x-3 text-xs">
              <span className="text-emerald-400 font-bold">✓ Passed: {importReport.successCount}</span>
              <span className="text-red-400 font-bold">❌ Errors: {importReport.errorCount}</span>
            </div>
          </div>

          <div className="overflow-x-auto text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                  <th className="py-2.5 px-2">Row #</th>
                  <th className="py-2.5 px-2">Product Title</th>
                  <th className="py-2.5 px-2">SKU Code</th>
                  <th className="py-2.5 px-2">Import Status</th>
                  <th className="py-2.5 px-2">Validation Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {importReport.report.map((item: any, idx: number) => (
                  <tr key={idx} className="hover:bg-slate-900/40">
                    <td className="py-2.5 px-2 font-mono font-bold text-slate-400">{item.rowNumber}</td>
                    <td className="py-2.5 px-2 font-semibold text-white">{item.name}</td>
                    <td className="py-2.5 px-2 font-mono text-brand-300">{item.sku || 'N/A'}</td>
                    <td className="py-2.5 px-2">
                      {item.status === 'success' ? (
                        <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                          SUCCESS
                        </span>
                      ) : (
                        <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-500/30">
                          FAILED
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-2 text-slate-400">{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
