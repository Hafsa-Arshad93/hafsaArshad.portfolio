import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
