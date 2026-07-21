'use client';

import { useState } from 'react';
import { Search, Loader } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
}

interface GlobalSearchProps {
  open: boolean;
  onClose: () => void;
}

export function GlobalSearch({ open, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);

    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
      <div
        className="fixed top-0 left-0 right-0 bg-white dark:bg-ps-navy-800 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-3xl mx-auto p-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              autoFocus
              type="search"
              placeholder="Search across all documentation..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-ps-navy-300 dark:border-ps-navy-600 bg-white dark:bg-ps-navy-700 text-gray-900 dark:text-white focus:outline-none focus:border-ps-navy-500"
            />
          </div>

          {isLoading && (
            <div className="mt-4 flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Loader className="animate-spin" size={18} />
              Searching...
            </div>
          )}

          {results.length > 0 && (
            <div className="mt-4 space-y-2">
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={result.href}
                  onClick={onClose}
                  className="block p-3 rounded-lg bg-gray-50 dark:bg-ps-navy-700 hover:bg-gray-100 dark:hover:bg-ps-navy-600 transition"
                >
                  <div className="font-semibold text-gray-900 dark:text-white">{result.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{result.description}</div>
                  <div className="text-xs text-ps-navy-600 dark:text-ps-accent-400">{result.category}</div>
                </Link>
              ))}
            </div>
          )}

          {query.length >= 2 && results.length === 0 && !isLoading && (
            <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
              No results found for "{query}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
