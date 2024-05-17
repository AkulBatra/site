<script>
	import { fly } from 'svelte/transition';
  
	function slowFly(node, { duration, delay }) {
	  return fly(node, { duration: 750, delay });
	}
  
	export let pathname = '';
  </script>
  
  {#key pathname}
	<div in:slowFly|local={{ duration: 750, delay: 500 }}>
	  <slot />
	</div>
  {/key}
  