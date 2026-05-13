import React, { useState } from 'react';

// Place resume PDF in /public/ folder as: Kiruthikbairavan_Resume.pdf
const RESUME_FILENAME = 'Kiruthikbairavan_Resume.pdf';

const Resume = () => {
  const [pdfMissing, setPdfMissing] = useState(false);

  const handleResumeDownload = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/${RESUME_FILENAME}`, { method: 'HEAD' });
      if (res.ok) {
        // File exists — trigger download
        const link = document.createElement('a');
        link.href = `/${RESUME_FILENAME}`;
        link.download = RESUME_FILENAME;
        link.click();
      } else {
        setPdfMissing(true);
      }
    } catch {
      setPdfMissing(true);
    }
  };

  return (
    <>
      <div className="section-head reveal">
        <div className="section-label">— The Sacred Parchment —</div>
        <h2 className="section-title">Resume &amp; Research Projects</h2>
        <div className="divider"><div className="div-line"></div><div className="div-gem"></div><div className="div-line r"></div></div>
      </div>
      <div className="resume-card reveal">
        <div className="resume-card-title">Kiruthikbairavan C</div>
        <p className="resume-card-sub" style={{ marginBottom: '1.5rem' }}>
          38, ValliyamPalayam Pudhur, Thandapalayam (Post), Erode – 638109<br />
          kiruthikbairavan13@gmail.com · +91 9345304921
        </p>

        <div style={{ borderBottom: '1px solid rgba(201,168,76,0.1)', paddingBottom: '1.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          <div className="section-label" style={{ marginBottom: '0.8rem', textAlign: 'left' }}>— Objective —</div>
          <p className="about-text" style={{ fontSize: '0.95rem', textAlign: 'left', lineHeight: '1.6' }}>
            To work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge appropriately.
          </p>
        </div>

        <div className="resume-btns">
          {pdfMissing ? (
            <button
              className="res-btn filled"
              disabled
              title="Resume coming soon — contact via email"
              style={{ opacity: 0.5, cursor: 'not-allowed' }}
            >
              📜 Resume Coming Soon
            </button>
          ) : (
            <a
              href={`/${RESUME_FILENAME}`}
              onClick={handleResumeDownload}
              className="res-btn filled"
              aria-label="Download Resume PDF"
            >
              📜 Download Resume
            </a>
          )}
          <a href="https://www.linkedin.com/in/kiruthikbairavan-c-3a35b626b" target="_blank" rel="noopener noreferrer" className="res-btn">🔗 LinkedIn</a>
          <a href="mailto:kiruthikbairavan13@gmail.com" className="res-btn">✉ Hire Me</a>
        </div>

        <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '1.5rem', marginTop: '1rem', textAlign: 'left' }}>
          <div className="section-label" style={{ marginBottom: '1rem', textAlign: 'left' }}>— Research Projects &amp; Papers —</div>
          <ul className="resume-pub-list">
            <li>
              Bitcoin Price Prediction using Wide-Deep, Multi-Branch &amp; CNN-BiLSTM Architectures
              <span className="pub-status">Research Paper — In Preparation / Submitted</span>
            </li>
            <li>
              AI-Driven Waste Detection for Gamified Eco-Behaviour Change
              <span className="pub-status">Research Project — CTPG, 2025</span>
            </li>
            <li>
              PPE Safety Detection using YOLOv8 in Industrial Environments
              <span className="pub-status">Research Project — Team Research, 2025</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
