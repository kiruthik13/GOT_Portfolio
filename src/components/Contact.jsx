import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS credentials from env vars — set these in .env
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const formRef = useRef(null);

  const [fields, setFields] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast]   = useState(false);
  const [sendError, setSendError] = useState('');

  const validate = () => {
    const e = {};
    if (fields.name.trim().length < 2)      e.name    = 'Name must be at least 2 characters.';
    if (!EMAIL_REGEX.test(fields.email))    e.email   = 'Enter a valid email address.';
    if (fields.message.trim().length < 10)  e.message = 'Message must be at least 10 characters.';
    return e;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFields(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const submitForm = async (ev) => {
    ev.preventDefault();
    setSendError('');

    // Honeypot — bots fill this, humans don't
    if (fields.honeypot) return;

    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSendError('EmailJS is not configured. Please set VITE_EMAILJS_* env vars.');
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setFields({ name: '', email: '', message: '', honeypot: '' });
      setToast(true);
      setTimeout(() => setToast(false), 5000);
    } catch (err) {
      console.error('[Contact] EmailJS error:', err);
      setSendError('The raven was intercepted! Please try again or email directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toast notification */}
      {toast && (
        <div className="contact-toast" role="status" aria-live="polite">
          ✦ &nbsp; Your raven has been dispatched &nbsp; ✦
        </div>
      )}

      <div className="section-head reveal">
        <div className="section-label">— Send a Raven —</div>
        <h2 className="section-title">Summon the Lord</h2>
        <div className="divider"><div className="div-line"></div><div className="div-gem"></div><div className="div-line r"></div></div>
      </div>

      <div className="contact-grid reveal">
        <a href="mailto:kiruthikbairavan13@gmail.com" className="contact-item">
          <div className="contact-icon-box">✉</div>
          <div className="contact-label">Send Raven</div>
        </a>
        <a href="https://www.linkedin.com/in/kiruthikbairavan-c" className="contact-item" target="_blank" rel="noopener noreferrer">
          <div className="contact-icon-box" style={{ fontFamily: 'Cinzel,serif', fontSize: '1rem', letterSpacing: 0 }}>in</div>
          <div className="contact-label">LinkedIn</div>
        </a>
        <a href="tel:9345304921" className="contact-item">
          <div className="contact-icon-box">☎</div>
          <div className="contact-label">Call the Tower</div>
        </a>
        <div className="contact-item">
          <div className="contact-icon-box">📍</div>
          <div className="contact-label" style={{ maxWidth: '200px', textAlign: 'center', lineHeight: '1.4' }}>
            38, ValliyamPalayam Pudhur,<br />Erode – 638109
          </div>
        </div>
      </div>

      <div className="contact-form reveal">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="section-label">— Or Write a Scroll —</div>
        </div>

        <form ref={formRef} onSubmit={submitForm} noValidate>
          {/* Honeypot — hidden from real users, catches bots */}
          <input
            type="text"
            name="honeypot"
            value={fields.honeypot}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="form-field">
            <label htmlFor="form-name">Your Name</label>
            <input
              id="form-name"
              type="text"
              name="name"
              value={fields.name}
              onChange={handleChange}
              placeholder="Lord / Lady ..."
              aria-invalid={!!errors.name}
            />
            {errors.name && <div className="form-error">⚠ {errors.name}</div>}
          </div>

          <div className="form-field">
            <label htmlFor="form-email">Your Email</label>
            <input
              id="form-email"
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              placeholder="raven@kingdom.com"
              aria-invalid={!!errors.email}
            />
            {errors.email && <div className="form-error">⚠ {errors.email}</div>}
          </div>

          <div className="form-field">
            <label htmlFor="form-message">Your Message</label>
            <textarea
              id="form-message"
              name="message"
              rows="4"
              value={fields.message}
              onChange={handleChange}
              placeholder="Speak your purpose, traveller..."
              aria-invalid={!!errors.message}
            />
            {errors.message && <div className="form-error">⚠ {errors.message}</div>}
          </div>

          {sendError && <div className="form-error" style={{ marginBottom: '1rem', textAlign: 'center' }}>⚠ {sendError}</div>}

          <button className="form-submit" type="submit" disabled={loading}>
            {loading ? '⚔  Dispatching Raven...' : '⚔  Send the Raven  ⚔'}
          </button>
        </form>

        <p className="form-note">* For direct contact: kiruthikbairavan13@gmail.com</p>
      </div>
    </>
  );
};

export default Contact;
