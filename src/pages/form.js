import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  {/* You still need to add the hidden input with the form name to your JSX form */}
  <input type="hidden" name="form-name" value="contact" />
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    </Layout>
)