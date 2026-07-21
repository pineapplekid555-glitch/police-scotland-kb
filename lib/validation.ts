import { z } from 'zod';

export const createPageSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  category: z.string().min(1),
  content: z.string().min(10),
  excerpt: z.string().optional(),
  tags: z.array(z.string()).optional(),
  published: z.boolean().default(true),
});

export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(1),
  rank: z.enum([
    'guest',
    'recruit',
    'constable',
    'sergeant',
    'inspector',
    'chief_inspector',
    'superintendent',
    'chief_superintendent',
    'admin',
  ]),
});

export type CreatePageInput = z.infer<typeof createPageSchema>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
