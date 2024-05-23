<script>
    import Title from '$lib/components/Title.svelte';
    import Card from '$lib/components/Card.svelte';
</script>

<div class="flex items-center justify-center">
    <div class="w-full max-w-6xl">
        <div class="space-y-2 pt-6 pb-8 md:space-y-5 text-center">
            <Title title="Projects" subtitle="Things that I'm currently working on." />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <Card
                    title="site"
                    link = "https://github.com/AkulBatra/site"
                    description="personal website"
                    class="p-6 md:p-8"
                />
                <!-- Add more Card components if needed -->
            </div>
        </div>
    </div>
</div>
