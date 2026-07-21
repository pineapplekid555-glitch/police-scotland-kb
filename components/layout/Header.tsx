'use client';

import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, Search } from 'lucide-react';
import { useTheme } from '@/lib/theme';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-ps-navy-800 border-b border-gray-200 dark:border-ps-navy-700 shadow-sm-nav">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-ps-navy-700 rounded-lg transition"
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
          <h1 className="text-xl font-bold text-ps-navy-700 dark:text-white">Police Scotland KB</h1>
        </div>

        {/* Search Bar (Mobile Hidden) */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-ps-navy-600 bg-white dark:bg-ps-navy-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-ps-navy-500"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-ps-navy-700 rounded-lg transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
