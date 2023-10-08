<script>
  import { signIn, signOut } from '@auth/sveltekit/client';
  import { page } from '$app/stores';
  export let data;
  $: ({ Reservations } = data);
</script>

{#if $page.data.session?.user}
  <div class="authStatus">
    <p>Signed in as {$page.data.session.user.email}</p>
    <img
      height="50"
      alt="your avatar"
      src={$page.data.session.user.image}
      style="clip-path: circle(50%);"
    />
    <button on:click={signOut}>Sign out</button>
  </div>
{:else}
  <p>Not signed in.</p>
  <button on:click={() => signIn('google')}>Sign in</button>
{/if}

<div>
  <table>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Date</th>
      <th>Message</th>
      <th>Delete</th>
    </tr>
    {#each Reservations as reservation (reservation._id)}
      <tr>
        <td>
          {reservation.name}
        </td>
        <td>
          <a href="mailto:{reservation.email}">{reservation.email}</a>
        </td>
        <td>
          <a href="tel:{reservation.phone}">{reservation.phone}</a>
        </td>
        <td>
          {reservation.date.toLocaleString()}
        </td>
        <td>
          {reservation.message || '-'}
        </td>
        <td>
          <form action="?/delete" method="post">
            <input type="hidden" name="_id" value={reservation._id} />
            <button id="DELETE">DELETE</button>
          </form>
        </td>
      </tr>
    {/each}
  </table>
</div>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .authStatus {
    display: inline-flex;
    align-items: center;
  }
</style>
