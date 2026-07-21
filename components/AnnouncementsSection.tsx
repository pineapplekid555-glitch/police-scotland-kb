'use client';

import { AlertCircle, Info } from 'lucide-react';

const announcements = [
  {
    type: 'alert',
    title: 'System Maintenance Scheduled',
    message: 'Knowledge base will be unavailable on Sunday 12:00-14:00 UTC for updates.',
    icon: AlertCircle,
  },
  {
    type: 'info',
    title: 'New Training Module Available',
    message: 'Vehicle pursuit procedures training module now live. Mandatory completion by month end.',
    icon: Info,
  },
];

export default function AnnouncementsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Announcements</h2>
      {announcements.map((announcement, index) => {
        const Icon = announcement.icon;
        const isAlert = announcement.type === 'alert';
        return (
          <div
            key={index}
            className={`p-4 rounded-lg border-l-4 ${
              isAlert
                ? 'bg-red-50 dark:bg-red-900/20 border-red-500'
                : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
            }`}
          >
            <div className="flex items-start gap-3">
              <Icon size={20} className={isAlert ? 'text-red-600' : 'text-blue-600'} />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{announcement.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{announcement.message}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
