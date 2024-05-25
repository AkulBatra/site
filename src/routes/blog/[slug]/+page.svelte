<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blog from '$lib/components/Blog.svelte';
	export let data;
	const post = data.post;
</script>


<Blog {post}  />