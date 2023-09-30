<script>
  import { user } from '$app/stores';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(async () => {
    const { token } = await get('login/google/callback', {
      code: new URLSearchParams(location.search).get('code'),
    });

    goto('/');
  });

  $: user && goto('/');
</script>

<nav>
  <h1>Yattoos</h1>
  <ul>
    <li><a href="/yattoos">Yattoo Portfolio</a></li>
    <li><a href="/about">About CCH</a></li>
    <li><a href="/login/google">Login with Google</a></li>
    <li><a href="/contact">Contact CCH</a></li>
    <li><a href="/reservations">View Reservations</a></li>
  </ul>
  {#if user}
    $user && (
    <ul>
      <li><a href="/logout">Logout</a></li>
    </ul>
    )
  {/if}
</nav>

<slot />
