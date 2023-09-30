<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(async () => {
    const { token } = await get('login/google/callback', {
      code: new URLSearchParams(location.search).get('code'),
    });

    goto('/');
  });
</script>

<h1>Logged in!</h1>
