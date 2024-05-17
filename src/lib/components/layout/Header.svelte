<script>
    import { config, navLinks } from '$lib/config';
    import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
    import MobileMenu from '$lib/components/MobileMenu.svelte';
</script>

<style>

    .nav-link {
        transition: color 0.3s ease;
    }

    .nav-link:hover {
        color: #4299e1;
        background: linear-gradient(to right, #2563eb, #60a5fa);
        -webkit-background-clip: text;
        color: transparent;
    }
</style>

<header class="flex items-center justify-between py-10">
    <div>
        <a href="/" aria-label={config.headerTitle}>
            <div class="flex items-center justify-between">
                <div class="hidden text-4xl font-semibold sm:block font-title">
                    {config.headerTitle}
                </div>
            </div>
        </a>
    </div>
    <div class="flex items-center text-base leading-5">
        <div class="hidden sm:block">
            {#each navLinks as link}
                <a href={link.href} class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-2 nav-link">
                    {link.title}
                </a>
            {/each}
        </div>
        <ThemeSwitch />
        <!--
        <a href="https://gitlab.com/users/AkulBatra/projects" class="mx-4 w-10 h-10 dark:fill-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 380"><path class="cls-1" d="M282.83,170.73l-.27-.69-26.14-68.22a6.81,6.81,0,0,0-2.69-3.24,7,7,0,0,0-8,.43,7,7,0,0,0-2.32,3.52l-17.65,54H154.29l-17.65-54A6.86,6.86,0,0,0,134.32,99a7,7,0,0,0-8-.43,6.87,6.87,0,0,0-2.69,3.24L97.44,170l-.26.69a48.54,48.54,0,0,0,16.1,56.1l.09.07.24.17,39.82,29.82,19.7,14.91,12,9.06a8.07,8.07,0,0,0,9.76,0l12-9.06,19.7-14.91,40.06-30,.1-.08A48.56,48.56,0,0,0,282.83,170.73Z"/></svg>
        </a>    
        -->
        <MobileMenu />
        
    </div>
</header>
