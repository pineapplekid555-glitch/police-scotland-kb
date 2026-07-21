'use client';

import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import './globals.css';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/lib/theme';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-ps-navy-900 text-gray-900 dark:text-white">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
            <div className="flex flex-1 overflow-hidden">
              <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
              <main className="flex-1 overflow-auto">
                <div className="max-w-7xl mx-auto px-4 py-8">
                  {children}
                </div>
              </main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
