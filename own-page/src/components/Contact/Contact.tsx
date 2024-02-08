// Contact.tsx
import React from "react";
import "./Contact.css"; // Import your Contact component CSS file

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>

      <div className="contact-details">
        <div className="contact-item">
          <h3>Email</h3>
          <p>htopolski12@gmail.com</p>
        </div>

        <div className="contact-item">
          <h3>Phone</h3>
          <p>+48 887 317 xxx</p>
        </div>

        <div className="contact-item">
          <h3>Instagram</h3>
          <p>majster_247_</p>
        </div>

        <div className="contact-item">
          <h3>Messenger</h3>
          <p><a href="https://m.me/DilerDanych">m.me/DilerDanych</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
