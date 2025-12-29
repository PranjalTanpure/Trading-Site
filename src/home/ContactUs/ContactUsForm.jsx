import React from "react";
import "./ContactUsForm.css";

export default function ContactUsForm() {
  return (
    <div className="layout-container">

      {/* LEFT CONTENT */}
      <div className="left-section">
        <h1>Write Your Information Here</h1>
        <p>
          You can add your own content, text, images, or anything else here.
          This area is flexible and does not affect the form layout.
        </p>
    <div className="contact-info">
      <a href="tel:+11223445678" className="contact-item">
        <i className="bx bx-phone"></i>
        <span>+1 122 344 5678</span>
      </a>

      <a href="mailto:info@example.com" className="contact-item">
        <i className="bx bx-envelope"></i>
        <span>info@example.com</span>
      </a>

      <a
        href="https://www.google.com/maps?q=123+Main+St,+Anytown,+USA"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <i className="bx bx-map"></i>
        <span>123 Main St, Anytown, USA</span>
      </a>
    </div>

        
      </div>

      {/* RIGHT FORM */}
    <div className="right-section">
      <form
        className="form-box"
        action="https://docs.google.com/forms/d/e/1FAIpQLSeudy4XLpZuz_hTtmW-MCvYSUYGJMFHwvLZzSb9f1xAjl2zkA/formResponse"
        method="POST"
        target="_self"
      >
        <label>Full Name *</label>
        <input
          type="text"
          name="entry.2005620554"
          placeholder="Enter your full name"
          required
        />

        <label>Phone Number *</label>
        <input
          type="tel"
          name="entry.1166974658"
          placeholder="Enter your phone number"
          required
        />

        <label>Email Address *</label>
        <input
          type="email"
          name="entry.1045781291"
          placeholder="Enter your email"
          required
        />

        <label>Address *</label>
        <input
          type="text"
          name="entry.1065046570"
          placeholder="Enter your address"
          required
        />

        <button type="submit">Submit</button>
      </form>
    


      </div>

    </div>
  );
}
