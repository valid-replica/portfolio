import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
	schema: z.object({
		date: z.string(),
		title: z.string()
	})
})

export const collections = {
	blogs: blogCollection
}
