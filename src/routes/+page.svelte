<script>
  import { session } from '$app/stores';
  import Reservations from '$lib/components/Reservations.svelte';
  import { page } from '$app/stores';
  $session = session;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

{#if $session.user}
  <p>Logged in as {$session.user.name}</p>
{/if}

{#if $session.error}
  <p>{$session.error}</p>
{/if}

{#if $session.loading}
  <p>Logging in...</p>
{/if}

{#if !$session.user && !$session.loading}
  <p><a href="/login">Log in</a></p>
{/if}

{#if $session.user}
  <p><a href="/logout">Log out</a></p>
{/if}

{#if $page.route.id === '/reservations'}
  <Reservations />
{/if}
