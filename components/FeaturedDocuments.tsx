'use client';

import Link from 'next/link';
import { FileText } from 'lucide-react';

const featuredDocs = [
  {
    title: 'Operational Procedures Handbook',
    description: 'Comprehensive guide to Police Scotland operational procedures',
    category: 'Handbook',
  },
  {
    title: 'State Codes Reference',
    description: 'Complete reference for operational status codes',
    category: 'Reference',
  },
  {
    title: 'Radio Communication Guide',
    description: 'Airwave protocols and communication standards',
    category: 'Communication',
  },
  {
    title: 'Officer Safety Principles',
    description: 'Dynamic risk assessment and safety protocols',
    category: 'Safety',
  },
];

export default function FeaturedDocuments() {
  return (
    <div className="bg-white dark:bg-ps-navy-800 rounded-lg p-6 shadow-md-card">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FileText className="text-ps-navy-600 dark:text-ps-accent-500" />
        Featured Documents
      </h2>
      <div className="grid md:grid-cols-4 gap-4">
        {featuredDocs.map((doc, index) => (
          <Link
            key={index}
            href="#"
            className="p-4 rounded-lg border border-gray-200 dark:border-ps-navy-700 hover:border-ps-navy-500 dark:hover:border-ps-accent-500 transition hover:shadow-md dark:hover:bg-ps-navy-700"
          >
            <div className="flex flex-col h-full">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{doc.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">{doc.description}</p>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-ps-navy-100 dark:bg-ps-navy-700 text-ps-navy-700 dark:text-ps-accent-300 rounded w-fit">
                {doc.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
