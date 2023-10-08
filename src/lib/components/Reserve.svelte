<script>
  import { enhance } from '$app/forms';
</script>

<div id="yattForm">
  <form action="/" method="POST" use:enhance>
    <div>
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="email" placeholder="Email" required />
    </div>
    <div>
      <input type="tel" name="phone" placeholder="(404) ###-####" />
      <input type="datetime-local" name="date" required />
    </div>
    <textArea
      type="text"
      name="message"
      cols="20"
      rows="3"
      placeholder="Message"
    /><br />
    <button type="submit" value="Submit">Submit</button>
  </form>
</div>

<style>
  #yattForm {
    width: 50%;
  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  input,
  textarea {
    margin: 0.5rem;
    border-radius: 5px;
    width: 85%;
  }
</style>
