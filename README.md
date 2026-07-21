# Police Scotland Knowledge Base

A modern, responsive internal training portal for Police Scotland operational procedures, codes, and guidance.

## Features

- 📖 Comprehensive knowledge base with operational procedures
- 🔍 Full-text search across all pages
- 🌙 Light/Dark mode support
- 📱 Fully responsive design
- 🔐 Role-based access control
- 📊 Admin dashboard
- 📄 PDF export functionality
- ⌨️ Keyboard shortcuts
- ♿ WCAG AA accessible

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Search**: Fuse.js
- **Authentication**: NextAuth.js
- **Type Safety**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/pineapplekid555-glitch/police-scotland-kb.git
cd police-scotland-kb
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── api/                # API routes
├── components/             # Reusable components
├── lib/                    # Utilities and helpers
├── data/                   # Static knowledge base content
├── public/                 # Static assets
└── styles/                 # Global styles
```

## User Roles

- **Guest**: Read-only access to public pages
- **Recruit**: Basic operational content
- **Constable**: Full operational procedures
- **Sergeant**: Management-level procedures
- **Inspector+**: Administrative access
- **Admin**: Full system access

## License

This project is for Police Scotland roleplay/training purposes only.
