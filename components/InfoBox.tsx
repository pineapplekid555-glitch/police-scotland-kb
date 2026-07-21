'use client';

import { ReactNode } from 'react';
import { Info, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

type InfoBoxType = 'info' | 'warning' | 'success' | 'alert';

interface InfoBoxProps {
  type: InfoBoxType;
  title: string;
  children: ReactNode;
}

const styles: Record<InfoBoxType, { bg: string; border: string; icon: ReactNode; titleColor: string }> = {
  info: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    icon: <Info className="text-blue-600" size={20} />,
    titleColor: 'text-blue-900 dark:text-blue-200',
  },
  warning: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-200 dark:border-yellow-800',
    icon: <AlertTriangle className="text-yellow-600" size={20} />,
    titleColor: 'text-yellow-900 dark:text-yellow-200',
  },
  success: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    icon: <CheckCircle className="text-green-600" size={20} />,
    titleColor: 'text-green-900 dark:text-green-200',
  },
  alert: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-800',
    icon: <AlertCircle className="text-red-600" size={20} />,
    titleColor: 'text-red-900 dark:text-red-200',
  },
};

export function InfoBox({ type, title, children }: InfoBoxProps) {
  const style = styles[type];

  return (
    <div className={`${style.bg} border-l-4 ${style.border} p-4 rounded`}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1">
          <h3 className={`font-semibold ${style.titleColor} mb-1`}>{title}</h3>
          <div className="text-sm text-gray-700 dark:text-gray-300">{children}</div>
        </div>
      </div>
    </div>
  );
}
