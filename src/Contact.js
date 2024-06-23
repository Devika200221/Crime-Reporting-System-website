import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      setError('Please fill in all fields');
    } else {
      // Send the form data to the server or API
      console.log('Form submitted:', { name, email, message });
      setError(null);
    }
  };

  return (
    <div className="container">
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information:-</h2>
        <p>Address: Udyambag Police Station, Belagavi  </p>
        <p>Phone: 0831-2405238</p>
        <p>Pincode: 590008</p>
        <p>Email: [info@example.com](mailto:<br></br>udyambagbgm@ksp.gov.in)</p>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message:</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <br />
          <label>
            Message:
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
          </label>
          <br />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;