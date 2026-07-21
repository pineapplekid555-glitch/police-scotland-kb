'use client';

import { useState } from 'react';
import { FileDown, Printer } from 'lucide-react';
import html2pdf from 'html2pdf.js';

interface PageActionsProps {
  pageTitle: string;
  pageRef?: React.RefObject<HTMLDivElement>;
}

export function PageActions({ pageTitle, pageRef }: PageActionsProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handlePrintPDF = async () => {
    setIsExporting(true);
    try {
      if (pageRef?.current) {
        const element = pageRef.current;
        const opt = {
          margin: 10,
          filename: `${pageTitle.toLowerCase().replace(/\s+/g, '-')}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
        };
        await html2pdf().set(opt).from(element).save();
      }
    } catch (error) {
      console.error('PDF export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handlePrintPDF}
        disabled={isExporting}
        className="flex items-center gap-2 px-3 py-2 bg-ps-navy-600 text-white rounded-lg hover:bg-ps-navy-700 transition disabled:opacity-50"
      >
        <FileDown size={18} />
        {isExporting ? 'Exporting...' : 'Export PDF'}
      </button>
      <button
        onClick={handlePrint}
        className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
      >
        <Printer size={18} />
        Print
      </button>
    </div>
  );
}
