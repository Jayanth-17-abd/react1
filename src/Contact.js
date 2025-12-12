import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="header">
        Contact Page
      </div>

      <div className="content">
        <h1>Welcome to the Contact Page</h1>
        <p>You can reach out to us anytime using the details below.</p>

        <div className="contact-box">
          <h2>Contact Information</h2>

          <p><strong>Email:</strong> info@example.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Bengaluru, India</p>

          <button className="btn">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
