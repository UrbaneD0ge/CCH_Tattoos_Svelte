<script>
  import { page } from '$app/stores';
  import Reserve from '$lib/components/Reserve.svelte';
</script>

<nav>
  <a href="/"><h1>Yattoos</h1></a>
  <ul>
    {#if $page.route.id !== '/yattoos'}
      <li><a href="/yattoos">Yattoo Portfolio</a></li>
    {/if}

    {#if $page.route.id !== '/about'}
      <li><a href="/about">About CCH</a></li>
    {/if}

    {#if $page.route.id !== '/login/google'}
      <li><a href="/login/google">Login with Google</a></li>
    {/if}

    {#if $page.route.id !== '/contact'}
      <li><a href="/contact">Contact CCH</a></li>
    {/if}

    {#if $page.route.id !== '/reservations'}
      <li><a href="/reservations">View Reservations</a></li>
    {/if}
  </ul>
  <Reserve />
</nav>

<slot />

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #000;
    color: #fff;
  }

  a h1 {
    margin: 0;
    text-decoration: none none none none !important;
    color: #fff;
  }

  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    margin-left: 1rem;
  }

  nav ul li:first-child {
    margin-left: 0;
  }

  nav ul li a {
    color: #fff;
    text-decoration: none;
  }

  nav ul li a:hover {
    text-decoration: underline;
  }

  /* nav ul li a.active {
    text-decoration: underline;
  }

  nav ul li a.active:hover {
    text-decoration: none;
  }

  nav ul li a.active {
    text-decoration: underline;
  }

  nav ul li a.active:hover {
    text-decoration: none;
  }

  nav ul li a.active {
    text-decoration: underline;
  }

  nav ul li a.active:hover {
    text-decoration: none;
  }

  nav ul li a.active {
    text-decoration: underline;
  }

  nav ul li a.active:hover {
    text-decoration: none;
  }

  nav ul li a.active {
    text-decoration: underline;
  }

  nav ul li a.active:hover {
    text-decoration: none;
  }

  nav ul li a.active {
    text-decoration: underline;
  }

  nav ul li a.active:hover {
    text-decoration: none;
  }

  nav ul li a.active {
    text-decoration: underline;
  }

  nav ul li a.active:hover {
    text-decoration: none;
  }

  nav ul li a.active {
    text-decoration: underline;
  }

  nav ul li a.active:hover {
    text-decoration: none;
  }

  nav ul li a.active {
    text-decoration: underline;
  }

  nav ul li a.active:hover {
    text-decoration: none;
  } */
</style>
