import Fuse from 'fuse.js';
import { allPages } from '@/data/pages';

const fuse = new Fuse(allPages, {
  keys: ['title', 'description', 'content', 'category'],
  threshold: 0.3,
  minMatchCharLength: 2,
});

export async function searchContent(query: string) {
  return fuse.search(query).slice(0, 20).map(result => ({
    id: result.item.id,
    title: result.item.title,
    description: result.item.description,
    category: result.item.category,
    href: result.item.href,
    score: result.score,
  }));
}
