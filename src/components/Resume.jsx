import React from 'react';

const Resume = () => {
  return (
    <>
      <div className="section-head reveal">
        <div className="section-label">— The Sacred Parchment —</div>
        <h2 className="section-title">Resume & Publications</h2>
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
          <a href="Kiruthikbairavan_Resume.pdf" download className="res-btn filled">📜 Download Resume</a>
          <a href="https://www.linkedin.com/in/kiruthikbairavan-c-3a35b626b" target="_blank" className="res-btn">🔗 LinkedIn</a>
          <a href="mailto:kiruthikbairavan13@gmail.com" className="res-btn">✉ Hire Me</a>
        </div>
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '1.5rem', marginTop: '1rem', textAlign: 'left' }}>
          <div className="section-label" style={{ marginBottom: '1rem', textAlign: 'left' }}>— Research & Publications —</div>
          <ul className="resume-pub-list">
            <li>Bitcoin Price Prediction using Wide-Deep, Multi-Branch & CNN-BiLSTM Architectures — Conference Paper, 2025</li>
            <li>AI-Driven Waste Detection for Gamified Eco-Behaviour Change — CTPG Research, 2025</li>
            <li>PPE Safety Detection using YOLOv8 in Industrial Environments — Team Research, 2025</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
