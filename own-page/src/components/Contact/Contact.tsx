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
          <h3>Instagram</h3>
          <p>majster_247_</p>
        </div>

        <div className="contact-item">
              <h3>On-demand Programming</h3>
              <pre>
                Need help with programming assignments, labs, or personal projects?<br></br>
                Struggling with a topic, or have a specific coding task in mind?
                <br></br>
                <br></br>
                Get in touch for custom solutions tailored to your requirements.
                <br></br>
                <br></br>
                To request assistance, please provide:<br></br>
                - A clear description of the task<br></br>
                - Deadline and any specific requirements<br></br>
                <br></br>
                <br></br>
                All work is written from scratch to ensure originality and meet your
                specifications, delivered as ready-to-submit code.<br></br>
                Available for C, C++, and Python projects of all levels.<br></br>
                <br></br>
                <br></br>
                Contact on Discord: <strong>majster247</strong> or by email if needed.
              </pre>
          </div>

      </div>
    </div>
  );
};

export default Contact;
