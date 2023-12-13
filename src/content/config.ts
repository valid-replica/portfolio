import { z, defineCollection } from 'astro:content'

const projectCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.string().array()
	})
})

const blogCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.date(),
			image: image(),
			description: z.string(),
			featured: z.boolean().default(false)
		})
})

export const collections = {
	projects: projectCollection,
	blogs: blogCollection
}
