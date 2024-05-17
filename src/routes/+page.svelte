<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import Head from '$lib/components/layout/Head.svelte';
  
    let text = "Welcome";
    let animatedText = "";
    let cursorVisible = true;
    let showParagraph = false;
  
    onMount(() => {
      const characters = text.split("");
  
      function typeWriter(index) {
        if (index < characters.length) {
          animatedText = characters.slice(0, index + 1).join("");
          index++;
          setTimeout(() => typeWriter(index), 200); 
        } else {
          cursorVisible = false;
          setTimeout(() => showParagraph = true, 500);
        }
      }
  
      typeWriter(0);
    });
  </script>
  
  <style>
    @keyframes gradientAnimation {
      0% {
        background-position: 100% 0%;
      }
      100% {
        background-position: -100% 0%;
      }
    }
  
    .cursor {
      display: inline-block;
      vertical-align: bottom;
      width: 0.1em; 
      height: 1.2em;
      animation: blinkCursor 0.8s infinite;
    }
  
    @keyframes blinkCursor {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
    }
  </style>
  
  <Head />
  
  <div class="flex items-center justify-center flex-col pt-40">
    <h1 class="text-center text-4xl font-extrabold leading-10 bg-gradient-to-r from-blue-700 to-blue-400 text-transparent tracking-tight bg-clip-text sm:text-5xl sm:leading-12 md:text-8xl md:leading-16 animate-gradient">
      {animatedText}{#if cursorVisible}<span class="cursor text-blue-600">|</span>{/if}
    </h1>
    {#if showParagraph}
      <p transition:fly="{{ x: 0, y: 50 }}" class="text-center text-lg text-gray-600 dark:text-gray-400">
        <a href="/projects" class="underline">Projects</a> &bull;  
        <a href="/gallery" class="underline">Gallery</a> &bull; 
        <a href="/blog" class="underline">Blog</a>
      </p>
    {/if}
  </div>
  
  