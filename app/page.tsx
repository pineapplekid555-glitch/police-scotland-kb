'use client';

import { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import QuickLinks from '@/components/QuickLinks';
import RecentlyUpdated from '@/components/RecentlyUpdated';
import AnnouncementsSection from '@/components/AnnouncementsSection';
import FeaturedDocuments from '@/components/FeaturedDocuments';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ps-navy-600 to-ps-navy-700 rounded-lg p-12 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-ps-navy-700">PS</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Police Scotland</h1>
            <p className="text-ps-accent-200">Internal Training & Knowledge Base</p>
          </div>
        </div>
        <p className="text-lg text-ps-accent-100 max-w-2xl">
          Welcome to the official Police Scotland knowledge portal. Access operational procedures, state codes, guidance, and training materials.
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={setSearchQuery} />

      {/* Quick Links */}
      <QuickLinks />

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Recently Updated */}
        <RecentlyUpdated />

        {/* Announcements */}
        <AnnouncementsSection />
      </div>

      {/* Featured Documents */}
      <FeaturedDocuments />
    </div>
  );
}
