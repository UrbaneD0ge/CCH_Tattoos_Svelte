<script>
  import { page } from '$app/stores';
</script>

<header>
  <a href="/"><h1>Yattoos</h1></a>
  <ul>
    <!-- {#if $page.route.id !== '/merch'}
      <li><a href="/merch">Merch</a></li>
    {/if} -->

    {#if $page.route.id !== '/about'}
      <li><a href="/about">About CCH</a></li>
    {/if}

    {#if $page.route.id !== '/book'}
      <li id="bookIt"><a href="/book">Book Now!</a></li>
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
  }

  :global(iframe) {
    height: 86svh;
    margin-block: auto;
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
    font-size: 1.2rem;
  }

  header ul li a:hover {
    text-decoration: none;
    border-bottom: solid 3px #443cd0;
    /* color: #4039b9 !important; */
  }

  #bookIt:hover {
    color: #4039b9 !important;
  }

  #container {
    margin: 0 2rem;
    padding: 0 1rem;
  }

  @media (max-width: 600px) {
    /* header {
      flex-direction: column;
      align-items: flex-start;
      height: auto;
    } */

    header ul {
      margin-top: 1rem;
    }

    #container {
      margin: 0;
      padding: 0;
    }
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
