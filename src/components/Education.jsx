import React from 'react';

const Education = () => {
  const education = [
    { year: '2022 – 2027 · In Progress', degree: 'MSc Software Systems', place: 'Kongu Engineering College, Tamil Nadu', score: '⚔ CGPA: 7.4' },
    { year: '2022 · Completed', degree: 'Higher Secondary Education', place: 'Vivekananda Vidyalaya Muthur', score: 'Score: 65%' },
    { year: '2020 · Completed', degree: 'SSLC', place: 'Vivekananda Vidyalaya Muthur', score: 'Score: 84%' }
  ];

  return (
    <>
      <div className="section-head reveal">
        <div className="section-label">— The Citadel —</div>
        <h2 className="section-title">Education & Training</h2>
        <div className="divider"><div className="div-line"></div><div className="div-gem"></div><div className="div-line r"></div></div>
      </div>
      <div className="edu-timeline">
        {education.map((edu, idx) => (
          <div key={idx} className="edu-item reveal" style={{ transitionDelay: idx * 0.12 + 's' }}>
            <div className="edu-dot"></div>
            <div className="edu-year">{edu.year}</div>
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-place">{edu.place}</div>
            <div className="edu-score">{edu.score}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
