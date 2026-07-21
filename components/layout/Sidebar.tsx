'use client';

import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import Link from 'next/link';
import { navigation } from '@/data/navigation';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['operational-procedures']);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-white dark:bg-ps-navy-800 border-r border-gray-200 dark:border-ps-navy-700 transform transition-transform duration-300 z-40 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto p-4">
          {/* Close button (Mobile) */}
          <button
            onClick={onClose}
            className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-ps-navy-700 rounded-lg"
          >
            <X size={20} />
          </button>

          {/* Navigation */}
          <nav className="space-y-1">
            {navigation.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-ps-navy-700 transition text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        expandedItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Submenu */}
                {item.children && expandedItems.includes(item.id) && (
                  <div className="ml-2 mt-1 space-y-1 border-l border-gray-300 dark:border-ps-navy-600 pl-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.id}
                        href={child.href}
                        onClick={onClose}
                        className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-ps-navy-700 transition text-sm text-gray-600 dark:text-gray-300"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
