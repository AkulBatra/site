<script>
    import Title from '$lib/components/Title.svelte';
    import { page } from '$app/stores';

    export let title = '';
    export let subtitle = '';
    export let posts = [];
    export let more = true;
    export let h2 = false;
</script>

<style>
    .underline-animation {
        position: relative;
        display: inline-block;
    }

    .underline-animation:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        background: linear-gradient(to right, #2563eb, #60a5fa);
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease-out;
    }

    .underline-animation:hover:before {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
</style>

<div class="flex justify-center items-center">
    <div class="w-full max-w-2xl divide-y divide-gray-200 dark:divide-gray-700">
        <div class="space-y-2 pt-6 pb-8 md:space-y-5">
            <div>
                <Title {title} {subtitle} {h2} class="underline-animation" />
            </div>
        </div>
        {#if !posts.length}
            No posts found.
        {:else}
            <ul class="my-2">
                {#each posts as post}
                    <li class="py-4">
                        <div class="space-y-2">
                            <div>
                                <h2 class="text-2xl font-bold leading-8 tracking-tight">
                                    <a href={`/blog/${post.slug}`} class="text-gray-900 dark:text-gray-100 underline-animation">
                                        {post.title}
                                    </a>
                                </h2>
                                <p class="text-sm text-gray-600 dark:text-gray-400">{post.date}</p>
                            </div>
                            {#if more}
                                <div class="text-base font-medium leading-6">
                                    <a
                                        href={`/blog/${post.slug}`}
                                        class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                        aria-label={`Read "${post.title}"`}
                                    >
                                        Read more &rarr;
                                    </a>
                                </div>
                            {/if}
                        </div>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
</div>
