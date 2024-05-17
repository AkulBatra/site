<script>
	import { config } from '$lib/config';
	export let post;
</script>

<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
	<article>
		<header class="pt-6 xl:pb-6">
			<div class="space-y-1 text-center">
				<div>
					<h1
						class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
					>
						{post.title}
					</h1>
				</div>
				<dl class="space-y-10">
					<div>
						<dt class="sr-only">Published on</dt>
						<dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
							<time dateTime={post.date}>
								{new Date(post.date).toLocaleDateString(config.locale, {
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}
							</time>
						</dd>
					</div>
				</dl>
			</div>
		</header>
		<div class="prose max-w-none pt-10 pb-8 dark:prose-dark">
			{@html post.content}
		</div>
		<footer class="pt-4 xl:pt-8">
			<a
				href="/blog"
				class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
			>
				&larr; Back to the blog
			</a>
		</footer>
	</article>
</div>
