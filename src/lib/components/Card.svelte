<script>
  export let title = '';
  export let link = '';
  export let description = '';
</script>

<div class="transition-all transform hover:shadow-lg hover:dark:bg-gray-800 hover:bg-slate-100 hover:rounded-md hover:scale-105 border border-black dark:border-white p-4">
  <h2 class="text-lg font-semibold mb-2">
      <a href={link} class="text-blue-500 underline">{title}</a>
  </h2>
  <p class="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
</div>
