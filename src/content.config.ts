import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Essays: one Markdown file per essay in src/content/essays/.
// `draft: true` keeps an essay out of the build.
const essays = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/essays" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    lang: z.enum(["pt", "en"]).default("en"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essays };
