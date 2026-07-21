'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Loader } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        setIsLoading(true);
        // Simulate search
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        <input
          ref={inputRef}
          type="search"
          placeholder="Search procedures, codes, guidance..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
          }}
          onFocus={() => setShowResults(true)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-300 dark:border-ps-navy-600 bg-white dark:bg-ps-navy-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-ps-navy-500 focus:ring-2 focus:ring-ps-navy-200 dark:focus:ring-ps-navy-800 transition"
        />
        {isLoading && (
          <Loader className="absolute right-4 top-3.5 text-ps-navy-500 animate-spin" size={20} />
        )}
      </div>
    </div>
  );
}
