<script>
  import { enhance } from '$app/forms';
</script>

<div>
  <form action="/" method="POST" use:enhance>
    <input type="text" name="name" placeholder="Name" required />
    <input type="text" name="email" placeholder="Email" required />
    <br />
    <input type="text" name="phone" placeholder="(404) ###-####" />
    <input type="date" name="date" required />
    <br />
    <textArea type="text" name="message" cols="40" /><br />
    <!-- <input type="file" name="file" placeholder="Inspiration" accept="image/*" /> -->
    <button type="submit" value="Submit">Submit</button>
  </form>
</div>
