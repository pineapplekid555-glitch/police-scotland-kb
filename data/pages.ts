export interface Page {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  href: string;
  slug: string;
  lastUpdated: string;
  author: string;
}

export const allPages: Page[] = [
  {
    id: 'state-codes',
    title: 'State Codes',
    description: 'Operational status codes used in Police Scotland',
    category: 'Operational Codes',
    href: '/docs/operational-codes/state-codes',
    slug: 'state-codes',
    content: 'Comprehensive guide to state codes...',
    lastUpdated: '2026-07-21',
    author: 'Training Team',
  },
  {
    id: 'radio-procedures',
    title: 'Radio Procedures',
    description: 'Airwave communication protocols and procedures',
    category: 'Communication',
    href: '/docs/communication/radio-procedures',
    slug: 'radio-procedures',
    content: 'Radio communication guide...',
    lastUpdated: '2026-07-20',
    author: 'Communications Unit',
  },
  {
    id: 'arrest-procedure',
    title: 'Arrest Procedure',
    description: 'Step-by-step guidelines for conducting arrests',
    category: 'Criminal Procedures',
    href: '/docs/criminal-procedures/arrest',
    slug: 'arrest-procedure',
    content: 'Arrest procedure guidelines...',
    lastUpdated: '2026-07-19',
    author: 'Criminal Procedures Unit',
  },
  {
    id: 'officer-safety',
    title: 'Officer Safety Principles',
    description: 'Dynamic risk assessment and officer safety protocols',
    category: 'Officer Safety',
    href: '/docs/officer-safety/principles',
    slug: 'officer-safety-principles',
    content: 'Officer safety principles...',
    lastUpdated: '2026-07-18',
    author: 'Safety Committee',
  },
  {
    id: 'vehicle-stops',
    title: 'Vehicle Stop Procedures',
    description: 'Safe and effective vehicle stopping procedures',
    category: 'Roads Policing',
    href: '/docs/roads-policing/vehicle-stops',
    slug: 'vehicle-stop-procedures',
    content: 'Vehicle stopping procedures...',
    lastUpdated: '2026-07-17',
    author: 'Roads Policing Unit',
  },
];
