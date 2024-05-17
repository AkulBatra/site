<script>
  export let imgSrc;
  export let altText;
  export let certificationText;
  export let link;
</script>

<div class="mb-4">
  <img src={imgSrc} alt={altText} class="w-full h-auto" loading="lazy">
  <p class="text-center mt-2 underline"><a href={link}>{certificationText}</a></p>
</div>
