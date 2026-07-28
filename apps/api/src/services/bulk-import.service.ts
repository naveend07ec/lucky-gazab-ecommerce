import { CatalogService } from './catalog.service';

export interface BulkImportRow {
  name: string;
  brand?: string;
  category?: string;
  sku: string;
  mrp: number;
  sellingPrice: number;
  stock: number;
  size?: string;
  shade?: string;
}

export interface ValidationReportItem {
  rowNumber: number;
  name: string;
  sku: string;
  status: 'success' | 'error';
  message: string;
}

export class BulkImportService {
  static processBulkImport(rows: BulkImportRow[]) {
    const report: ValidationReportItem[] = [];
    let successCount = 0;

    rows.forEach((row, index) => {
      const rowNum = index + 1;
      const errors: string[] = [];

      if (!row.name || row.name.trim() === '') {
        errors.push('Product name is required');
      }
      if (!row.sku || row.sku.trim() === '') {
        errors.push('SKU is required');
      }
      if (isNaN(row.mrp) || row.mrp <= 0) {
        errors.push('MRP must be a positive number');
      }
      if (isNaN(row.sellingPrice) || row.sellingPrice <= 0) {
        errors.push('Selling price must be a positive number');
      }
      if (row.sellingPrice > row.mrp) {
        errors.push('Selling price cannot exceed MRP');
      }

      if (errors.length > 0) {
        report.push({
          rowNumber: rowNum,
          name: row.name || 'Unnamed',
          sku: row.sku || 'N/A',
          status: 'error',
          message: errors.join('; ')
        });
      } else {
        CatalogService.createProduct({
          name: row.name,
          brand: row.brand || "L'Oréal Professionnel",
          category: row.category || 'Salon Professional Products',
          sku: row.sku.toUpperCase(),
          mrp: row.mrp,
          sellingPrice: row.sellingPrice,
          variants: [
            {
              id: `v-bulk-${Date.now()}-${index}`,
              sku: row.sku.toUpperCase(),
              size: row.size || 'Standard',
              shade: row.shade || undefined,
              mrp: row.mrp,
              sellingPrice: row.sellingPrice,
              stock: row.stock || 25
            }
          ]
        });

        successCount++;
        report.push({
          rowNumber: rowNum,
          name: row.name,
          sku: row.sku,
          status: 'success',
          message: 'Product & variant SKU imported successfully'
        });
      }
    });

    return {
      totalRows: rows.length,
      successCount,
      errorCount: rows.length - successCount,
      report
    };
  }
}
