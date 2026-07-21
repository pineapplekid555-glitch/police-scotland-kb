'use client';

import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = 'text', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 dark:bg-gray-950 rounded-lg overflow-hidden">
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-sm font-mono text-gray-300">
          {title}
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm text-gray-100 font-mono">
          <code>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded transition"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check size={18} className="text-green-400" />
          ) : (
            <Copy size={18} className="text-gray-300" />
          )}
        </button>
      </div>
    </div>
  );
}
