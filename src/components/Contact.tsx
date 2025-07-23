import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7f22zsi',       // Replace with your Service ID
        'template_guab41k',      // Replace with your Template ID
        formRef.current!,
        'snXMH96W5j8d_wDrf'        // Replace with your Public Key
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
        },
        (error) => {
          setStatus('Failed to send message. Try again later.');
        }
      );
  };

  return (
    <section
      id="contact"
      style={{
        padding: '3rem 1rem',
        textAlign: 'center',
        backgroundImage: `url('/contact.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#00ffe0' }}>
        Contact Me
      </h2>

      <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
        Got a project or a question? I’d love to hear from you. Let’s connect!
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>

      {status && <p style={{ marginTop: '1rem', color: '#00ffe0' }}>{status}</p>}
    </section>
  );
};

// Style objects
const inputStyle = {
  padding: '0.75rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  padding: '0.75rem',
  backgroundColor: '#00ffe0',
  color: '#000',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default Contact;
