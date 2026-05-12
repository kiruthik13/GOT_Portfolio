import React, { useState } from 'react';

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const submitForm = async () => {
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const msg = document.getElementById('form-message').value.trim();

    if (!name || !email || !msg) {
      alert('Speak your purpose, traveller. Fill all fields.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: 'Portfolio Contact',
          message: msg
        })
      });

      if (response.ok) {
        setSuccess(true);
        // Clear form
        document.getElementById('form-name').value = '';
        document.getElementById('form-email').value = '';
        document.getElementById('form-message').value = '';
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert('The Raven was intercepted! (Check console for errors)');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      alert('The Citadel is unreachable at the moment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
        <a href="https://www.linkedin.com/in/kiruthikbairavan-c" className="contact-item" target="_blank">
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
        <div className="form-field">
          <label>Your Name</label>
          <input type="text" id="form-name" placeholder="Lord / Lady ..." />
        </div>
        <div className="form-field">
          <label>Your Email</label>
          <input type="email" id="form-email" placeholder="raven@kingdom.com" />
        </div>
        <div className="form-field">
          <label>Your Message</label>
          <textarea id="form-message" rows="4" placeholder="Speak your purpose, traveller..."></textarea>
        </div>
        <button className="form-submit" onClick={submitForm} disabled={loading}>
          {loading ? '⚔  Dispatching Raven...' : '⚔  Send the Raven  ⚔'}
        </button>
        {success && <div className="form-success" style={{ display: 'block' }}>✦ &nbsp; Your raven has been dispatched. Lord Kiruthik shall respond. &nbsp; ✦</div>}
        <p className="form-note">* This form opens your mail client. For direct contact: kiruthikbairavan13@gmail.com</p>
      </div>
    </>
  );
};

export default Contact;
