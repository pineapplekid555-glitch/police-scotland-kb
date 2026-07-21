'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';

interface AccordionProps {
  items: {
    title: string;
    content: ReactNode;
  }[];
}

export function Accordion({ items }: AccordionProps) {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="space-y-2 border border-gray-300 dark:border-ps-navy-600 rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setExpanded(expanded === index ? null : index)}
            className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 dark:bg-ps-navy-700 hover:bg-gray-100 dark:hover:bg-ps-navy-600 transition font-medium text-gray-900 dark:text-white border-b border-gray-300 dark:border-ps-navy-600"
          >
            {item.title}
            <ChevronDown
              size={20}
              className={`transition-transform ${
                expanded === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {expanded === index && (
            <div className="px-4 py-3 bg-white dark:bg-ps-navy-800 text-gray-700 dark:text-gray-300">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
