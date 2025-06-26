import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <>
      {/* Navbar removed */}

      {/* Page Content */}
      <div className="page-container">
        <h1 style={{ textAlign: "center" }}>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
        <hr />

        <h3>General Enquiries</h3>
        <p>
          <strong>Vivekanand College Main Campus</strong><br />
          Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071<br />
          India<br /><br />
          Phone: <strong>+91 12345 67890</strong><br />
          Email: <strong>info@vivekanandcollege.edu</strong><br />
          Office Hours: Monday - Friday, 9 AM - 5 PM
        </p>

        <hr />

        <h3>Get in Touch</h3>
        <form style={{ maxWidth: "500px" }}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} /><br />

          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} /><br />

          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows="5" required style={{ width: "100%", padding: "8px", marginBottom: "10px" }}></textarea><br />

          <button type="submit" className="primary-btn">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
