import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lastUpdateDate: z.coerce.date().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lastUpdateDate: z.coerce.date().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    projectType: z.string(),
  }),
});

const clients = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lastUpdateDate: z.coerce.date().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    projectType: z.string(),
  }),
});

export const collections = { blog, projects, clients };
