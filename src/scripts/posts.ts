import type { CollectionEntry } from 'astro:content'

export const sortPostsByDate = (posts: CollectionEntry<'blog'>[]) => {
	return posts.sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf())
}
