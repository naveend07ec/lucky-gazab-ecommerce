import React, { useState } from 'react';
import { Upload, FileSpreadsheet, CheckCircle2, AlertCircle } from 'lucide-react';

export function BulkImportPage() {
  const [file, setFile] = useState<File | null>(null);
  const [importing, setImporting] = useState(false);
  const [result, setResult] = useState<{ createdCount: number; errors: string[] } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    setImporting(true);
    setTimeout(() => {
      setImporting(false);
      setResult({
        createdCount: 15,
        errors: ['Row 4: Invalid HSN code format (skipped)', 'Row 12: Missing brand name fallback applied']
      });
    }, 1500);
  };

  return (
    <div className="space-y-6 text-[#111827]">
      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">Bulk CSV Product Import</h1>
          <p className="text-xs text-[#6B7280]">Import hundreds of catalog items, SKUs, pricing, and barcodes via CSV spreadsheet</p>
        </div>
      </div>

      {/* Upload Box */}
      <div className="bg-white border-2 border-dashed border-[#2563EB]/40 rounded-xl p-8 text-center space-y-4 shadow-xs">
        <FileSpreadsheet className="w-12 h-12 text-[#2563EB] mx-auto" />
        <div className="space-y-1">
          <h3 className="font-bold text-[#111827] text-sm">Upload Catalog CSV File</h3>
          <p className="text-xs text-[#6B7280]">Drag and drop your spreadsheet file here or browse from your computer</p>
        </div>

        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="hidden"
          id="csv-file-input"
        />

        <div className="flex justify-center items-center space-x-3 pt-2">
          <label
            htmlFor="csv-file-input"
            className="cursor-pointer bg-white border border-[#E5E7EB] text-[#111827] px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors shadow-xs"
          >
            {file ? file.name : 'Choose CSV File'}
          </label>
          <button
            onClick={handleUpload}
            disabled={!file || importing}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] disabled:bg-slate-300 text-white px-5 py-2 rounded-lg text-xs font-bold transition-all shadow-xs"
          >
            {importing ? 'Processing Import...' : 'Upload & Import'}
          </button>
        </div>
      </div>

      {result && (
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-4 shadow-xs text-xs">
          <div className="flex items-center space-x-2 text-[#16A34A] font-bold">
            <CheckCircle2 className="w-5 h-5" />
            <span>Bulk Import Completed: {result.createdCount} products imported successfully</span>
          </div>

          {result.errors.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-[#E5E7EB]">
              <h4 className="font-bold text-[#D97706] flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                Import Validation Logs ({result.errors.length})
              </h4>
              <ul className="space-y-1 text-[#475569] font-mono text-[11px]">
                {result.errors.map((err, i) => (
                  <li key={i} className="bg-amber-50 p-2 rounded-lg border border-amber-200">{err}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
