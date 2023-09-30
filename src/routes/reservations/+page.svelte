<script>
  export let data;
  $: ({ Reservations } = data);
</script>

<div>
  <table>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Date</th>
      <th>File</th>
      <th>Message</th>
    </tr>
    {#each Reservations as reservation}
      <tr>
        <td>
          {reservation.name}
        </td>
        <td>
          {reservation.email}
        </td>
        <td>
          {reservation.phone}
        </td>
        <td>
          {reservation.date.toLocaleString()}
        </td>
        <td>
          <a href={reservation.file}>{reservation.file ? '🖼' : '-'}</a>
        </td>
        <td>
          {reservation.message || '-'}
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
</style>
