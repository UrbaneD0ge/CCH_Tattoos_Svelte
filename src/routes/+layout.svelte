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

    {#if $page.route.id !== '/reservations'}
      <li><a href="/reservations">Book It!</a></li>
    {/if}
  </ul>
  <!-- <Reserve /> -->
</header>

<div id="container">
  <slot />
</div>

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

  :global(iframe) {
    height: 82svh;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #000;
    color: #fff;
    height: 8vh;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
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

  #container {
    margin: 0 2rem;
    padding: 0 1rem;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: whitesmoke;
  }

  ::-webkit-scrollbar {
    width: 4px;
    background-color: whitesmoke;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
</style>
