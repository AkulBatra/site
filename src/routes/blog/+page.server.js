import { getEntries } from '$utils/entries.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const posts = getEntries('posts');
	if (!posts) {
		error(404, 'No post found');
	}


	return {
		posts: posts,
	};
}
