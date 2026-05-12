import React from 'react';

const Timeline = () => {
  const experiences = [
    { year: '2025 — PRESENT', role: 'CTPG Ideathon 2025 — 1st Place Champion', org: 'Kongu Engineering College · Ease App (AI Waste Detection)', badge: '⚔ Champion', badgeClass: 'gold' },
    { year: '2025', role: 'CTPG Proof of Concept — 1st Place', org: 'Kongu Engineering College · Full Stack Dashboard Project', badge: '👑 Winner', badgeClass: 'gold' },
    { year: '2025', role: 'Full Stack Development Projects', org: 'Self-Directed · React · Node.js · MongoDB · Firebase', badge: '🛡 Developer' },
    { year: '2025', role: 'KEC Hackathon — 2nd Place', org: 'Kongu Engineering College · Competitive Programming', badge: '⚔ Runner-Up' },
    { year: '2024', role: 'Software Engineer Intern', org: 'Twincord Technologies · Full Stack Development', badge: '🎓 Internship' },
    { year: '2024', role: 'Flutter Mobile App Development', org: 'Organic Products E-Commerce · Team of 5', badge: '📱 Mobile' },
    { year: '2023', role: 'Robotics Workshop', org: 'SKCET, Coimbatore · Automation & Robotics', badge: '🤖 Training' },
    { year: '2022', role: 'MSc Software Systems — Commenced', org: 'Kongu Engineering College, Erode, Tamil Nadu', badge: '🏰 Scholar' }
  ];

  return (
    <>
      <div className="section-head reveal">
        <div className="section-label">— The Chronicle —</div>
        <h2 className="section-title">Experience Timeline</h2>
        <div className="divider"><div className="div-line"></div><div className="div-gem"></div><div className="div-line r"></div></div>
      </div>
      <div className="exp-timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="exp-item reveal" style={{ transitionDelay: idx * 0.12 + 's' }}>
            <div className="exp-dot"></div>
            <div className="exp-year">{exp.year}</div>
            <div className="exp-role">
              {exp.role} {exp.badge && <span className={`exp-badge ${exp.badgeClass || ''}`}>{exp.badge}</span>}
            </div>
            <div className="exp-org">{exp.org}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
