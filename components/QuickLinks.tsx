'use client';

import Link from 'next/link';
import { BookOpen, Code, Radio, AlertCircle, Users } from 'lucide-react';

const quickLinks = [
  {
    title: 'State Codes',
    description: 'Operational status and priority codes',
    href: '/docs/operational-codes/state-codes',
    icon: Code,
  },
  {
    title: 'Radio Procedures',
    description: 'Airwave communication protocols',
    href: '/docs/communication/radio-procedures',
    icon: Radio,
  },
  {
    title: 'Arrest Procedure',
    description: 'Step-by-step arrest guidelines',
    href: '/docs/criminal-procedures/arrest-procedure',
    icon: AlertCircle,
  },
  {
    title: 'Officer Safety',
    description: 'Risk assessment and safety principles',
    href: '/docs/officer-safety/safety-principles',
    icon: Users,
  },
];

export default function QuickLinks() {
  return (
    <div className="bg-white dark:bg-ps-navy-800 rounded-lg p-6 shadow-md-card">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BookOpen className="text-ps-navy-600 dark:text-ps-accent-500" />
        Quick Links
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {quickLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="p-4 rounded-lg border border-gray-200 dark:border-ps-navy-700 hover:border-ps-navy-500 dark:hover:border-ps-accent-500 transition bg-gray-50 dark:bg-ps-navy-700 group"
            >
              <div className="flex items-start gap-3">
                <Icon className="text-ps-navy-600 dark:text-ps-accent-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-ps-navy-600 dark:group-hover:text-ps-accent-400 transition">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{link.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
