<script>
	import { config } from '$lib/config';

	export let title = 'Akul Batra';
	export let description = config.description;
	export let author = config.author;
	export let url = config.siteUrl;
	export let domain = config.domain;
	export let rtl = false;
	let titleFromUrl = url.split('/').pop().replace('-', ' ');
	export let img = `${url}/og?message=${rtl ? titleFromUrl : title}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content={author} />

	
</svelte:head>
