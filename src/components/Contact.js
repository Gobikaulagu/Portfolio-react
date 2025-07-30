import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:gobikaulagananthan@gmail.com?subject=Message from ${encodeURIComponent(
      form.name
    )}&body=Name: ${encodeURIComponent(form.name)}%0D%0AEmail: ${encodeURIComponent(
      form.email
    )}%0D%0AMessage: ${encodeURIComponent(form.message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        padding: '3rem 1rem',
        background: 'transparent',
        textAlign: 'center',
      }}
    >
      {/* Heading Centered */}
      <h2
        style={{
          color: '#111',
          fontWeight: 800,
          fontSize: '2.5rem',
          marginBottom: '2rem',
        }}
      >
        Contact Me
      </h2>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="contact-form mx-auto"
        style={{
          maxWidth: '450px',
          padding: '2rem',
          background: '#f9f9f9',
          borderRadius: '1rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          margin: '0 auto',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            marginBottom: '1rem',
            padding: '0.85rem',
            border: '1px solid #b2dfdb',
            borderRadius: '1rem',
            fontSize: '1rem',
            width: '100%',
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            marginBottom: '1rem',
            padding: '0.85rem',
            border: '1px solid #b2dfdb',
            borderRadius: '1rem',
            fontSize: '1rem',
            width: '100%',
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          style={{
            marginBottom: '1rem',
            padding: '0.85rem',
            border: '1px solid #b2dfdb',
            borderRadius: '1rem',
            fontSize: '1rem',
            width: '100%',
          }}
        />
        <button
          type="submit"
          style={{
            background: '#FFD43B',
            color: '#222',
            border: 'none',
            padding: '0.85rem',
            borderRadius: '2rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            width: '100%',
            transition: 'background 0.2s',
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
