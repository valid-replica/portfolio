import { z, defineCollection } from 'astro:content'

const projectCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.string().array()
	})
})

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
		description: z.string(),
		featured: z.boolean().default(false)
	})
})

export const collections = {
	project: projectCollection,
	blog: blogCollection
}
