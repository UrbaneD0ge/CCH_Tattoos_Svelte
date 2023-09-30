<body>
  <nav>
    <h1>Yattoos</h1>
    <ul>
      <li><a href="/yattoos">Yattoo Portfolio</a></li>
      <li><a href="/about">About CCH</a></li>
      <li><a href="/contact">Contact CCH</a></li>
    </ul>
  </nav>
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
            {reservation.date.toLocaleDateString()}
          </td>
          <td>
            {reservation.file}
          </td>
          <td>
            {reservation.message}
          </td>
        </tr>
      {/each}
    </table>
  </div>
</body>
