import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { CATEGORIES } from "./src/data/categories";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    category: z.enum(CATEGORIES.map((c) => c.slug) as [string, ...string[]]),
    author: z.string().default("Horizon Immobilier"),
    authorRole: z.string().optional(),
    readingTime: z.number().int().positive().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** Désactiver l'indexation d'un article publié (brouillon soft). */
    draft: z.boolean().default(false),
    /** Chiffres clés extraits en frontmatter pour affichage en hero d'article. */
    keyTakeaways: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
