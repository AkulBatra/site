<script>
    import Title from '$lib/components/Title.svelte';
    let title = "About me";
</script>

<div class="flex justify-center items-center">
    <div class="w-full max-w-2xl divide-y divide-gray-200 dark:divide-gray-700">
        <div class="space-y-2 pt-6 pb-8 md:space-y-5">
            <div>
                <Title {title} />
            </div>
        </div>
        <div class="pt-8">
            <h1 class="text-2xl">Yeah...I don't really know what to write here.</h1>
        </div>
    </div>
</div>
