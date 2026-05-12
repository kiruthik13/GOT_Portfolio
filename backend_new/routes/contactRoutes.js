const express = require('express');
const { Resend } = require('resend');
const Contact = require('../models/Contact');
const dotenv = require('dotenv');

dotenv.config();
const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

// @desc    Send contact message and save to DB
// @route   POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // 1. Save to MongoDB
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // 2. Send via Resend (Ravens)
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Realm <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL],
      subject: `⚔ Raven from ${name}: ${subject}`,
      html: `
        <div style="font-family: serif; background: #0c0906; color: #b8b0a0; padding: 20px; border: 1px solid #c9a84c;">
          <h2 style="color: #c9a84c; border-bottom: 1px solid #c9a84c; padding-bottom: 10px;">The Raven has Arrived</h2>
          <p><strong>Lord/Lady:</strong> ${name}</p>
          <p><strong>House (Email):</strong> ${email}</p>
          <p><strong>Objective:</strong> ${subject}</p>
          <div style="background: rgba(201,168,76,0.05); padding: 15px; border-left: 3px solid #c9a84c; font-style: italic;">
            "${message}"
          </div>
          <p style="font-size: 0.8rem; margin-top: 20px; color: #8b6914;">— Sent from the Citadel's Records —</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error });
    }

    res.status(201).json({ message: 'Raven sent successfully to the Citadel!' });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ message: 'The Raven was intercepted by dragons (Server Error).' });
  }
});

module.exports = router;
