<script>
  import { page } from '$app/stores';
</script>

<header>
  <a href="/"><h1>Yattoos</h1></a>
  <ul>
    {#if $page.route.id !== '/yattoos'}
      <li><a href="/yattoos">Yattoo Portfolio</a></li>
    {/if}

    {#if $page.route.id !== '/about'}
      <li><a href="/about">About CCH</a></li>
    {/if}

    {#if $page.route.id !== '/contact'}
      <li><a href="/contact">Contact CCH</a></li>
    {/if}

    {#if $page.route.id !== '/reservations'}
      <li><a href="/reservations">View Reservations</a></li>
    {/if}
  </ul>
  <!-- <Reserve /> -->
</header>

<slot />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');

  :global(html, body) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  :global(*) {
    font-family: 'Sriracha', sans-serif;
  }

  :global(a) {
    text-decoration: none;
    color: #4039b9;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #000;
    color: #fff;
  }

  a h1 {
    margin-right: 10px;
    text-decoration: none !important;
    color: #fff;
  }

  header ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  header ul li {
    margin-left: 1rem;
  }

  header ul li:first-child {
    margin-left: 0;
  }

  header ul li a {
    color: #fff;
    text-decoration: none;
  }

  header ul li a:hover {
    text-decoration: underline;
  }
</style>
