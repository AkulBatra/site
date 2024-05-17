import { config, user } from '$lib/config.js';

const getPosts = () => {
	return Object.entries(import.meta.glob('/content/posts/**/*.md', { eager: true }));
};

const getProjects = () => {
	return Object.entries(import.meta.glob('/content/projects/**/*.md', { eager: true }));
};



const getEntriesByType = (entryType) => {
	switch (entryType) {
		case 'posts':
			return getPosts();
		case 'projects':
			return getProjects();
	}
};

const getMetadata = (entryType, filepath, entry) => {
	return {
		...entry.metadata,

		content: entry.default.render().html,

		slug: filepath
			.replace(/(\/index)?\.md/, '')
			.split('/')
			.pop(),

	};
};

export const getEntries = (entryType) => {
	if (!config.multiuser && entryType === 'authors') return [user];

	let entries = getEntriesByType(entryType);

	return (
		entries
			.map(([filepath, entry]) => getMetadata(entryType, filepath, entry))
			.filter((entry) => !entry.draft)
			.sort((a, b) => (a.date < b.date ? 1 : -1))
			.map((entry, index, allEntries) => ({
				...entry,
				next: allEntries[index - 1],
				prev: allEntries[index + 1]
			}))
	);
};
