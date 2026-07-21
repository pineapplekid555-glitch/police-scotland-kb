'use client';

import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: Breadcrumb[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1 text-sm mb-6" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center gap-1 text-ps-navy-600 dark:text-ps-accent-400 hover:text-ps-navy-700 dark:hover:text-ps-accent-300 transition">
        <Home size={16} />
        Home
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1">
          <ChevronRight size={16} className="text-gray-400" />
          {item.href ? (
            <Link href={item.href} className="text-ps-navy-600 dark:text-ps-accent-400 hover:text-ps-navy-700 dark:hover:text-ps-accent-300 transition">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
