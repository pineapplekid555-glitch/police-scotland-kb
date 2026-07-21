export interface ContentBlock {
  type: 'heading' | 'paragraph' | 'list' | 'table' | 'code' | 'info' | 'warning' | 'success' | 'callout';
  content: string | string[][];
  level?: number;
}

export const pageTemplates = {
  operational: {
    sections: ['Overview', 'Procedure Steps', 'Safety Considerations', 'Related Documents'],
  },
  guide: {
    sections: ['Introduction', 'Key Points', 'Examples', 'Best Practices', 'Resources'],
  },
  reference: {
    sections: ['Overview', 'Reference Table', 'Definitions', 'Legal References'],
  },
};

export const infoBoxTypes = {
  info: {
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-500',
    icon: 'info-circle',
  },
  warning: {
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    borderColor: 'border-yellow-500',
    icon: 'alert-triangle',
  },
  success: {
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-500',
    icon: 'check-circle',
  },
  alert: {
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    borderColor: 'border-red-500',
    icon: 'alert-circle',
  },
};
