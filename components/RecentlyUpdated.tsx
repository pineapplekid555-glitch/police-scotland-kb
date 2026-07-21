'use client';

import Link from 'next/link';
import { Clock } from 'lucide-react';

const recentUpdates = [
  {
    title: 'Vehicle Stop Procedures',
    date: 'Updated 2 days ago',
    category: 'Roads Policing',
  },
  {
    title: 'TASER Policy Review',
    date: 'Updated 5 days ago',
    category: 'Officer Safety',
  },
  {
    title: 'Phonetic Alphabet Guide',
    date: 'Updated 1 week ago',
    category: 'Communication',
  },
  {
    title: 'Dynamic Risk Assessment',
    date: 'Updated 2 weeks ago',
    category: 'Officer Safety',
  },
];

export default function RecentlyUpdated() {
  return (
    <div className="bg-white dark:bg-ps-navy-800 rounded-lg p-6 shadow-md-card">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Clock className="text-ps-navy-600 dark:text-ps-accent-500" />
        Recently Updated
      </h2>
      <div className="space-y-4">
        {recentUpdates.map((update, index) => (
          <Link
            key={index}
            href="#"
            className="p-4 rounded-lg border border-gray-200 dark:border-ps-navy-700 hover:border-ps-navy-500 dark:hover:border-ps-accent-500 transition hover:bg-gray-50 dark:hover:bg-ps-navy-700"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{update.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{update.date}</p>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-ps-navy-100 dark:bg-ps-navy-700 text-ps-navy-700 dark:text-ps-accent-300 rounded">
                {update.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
