'use client';

import { ReactNode } from 'react';

interface TableProps {
  headers: string[];
  rows: (string | ReactNode)[][];
  className?: string;
}

export function Table({ headers, rows, className = '' }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full border-collapse text-sm ${className}`}>
        <thead>
          <tr className="bg-ps-navy-100 dark:bg-ps-navy-700 border border-gray-300 dark:border-ps-navy-600">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white border border-gray-300 dark:border-ps-navy-600"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border border-gray-300 dark:border-ps-navy-600 ${
                rowIndex % 2 === 0
                  ? 'bg-white dark:bg-ps-navy-800'
                  : 'bg-gray-50 dark:bg-ps-navy-700'
              }`}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-ps-navy-600"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
