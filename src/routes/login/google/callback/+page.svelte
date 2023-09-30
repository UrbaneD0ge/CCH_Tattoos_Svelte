<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(async () => {
    goto('/');
  });
</script>

<h1>Logged in!</h1>
