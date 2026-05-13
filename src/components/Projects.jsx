import React from 'react';

const PROJECTS = [
  {
    num: 'I',
    badge: 'winner',
    badgeText: '⚔ CTPG Ideathon 2025 — 1st Prize',
    title: 'Environment Waste Management System – "Ease" App',
    desc: 'Designed a gamified mobile application with AI waste detection, eco-points rewards, and recycling locator to promote sustainable living. Winner of CTPG Ideathon 2025.',
    tech: ['Flutter', 'AI/ML', 'Firebase', 'Gamification', 'Mobile'],
    github: 'https://github.com/kiruthik13/EASE',
    demo: null,                    // No live demo — button hidden
    featured: true,
    mockupStyle: { background: 'linear-gradient(160deg,rgba(18,26,14,0.9),rgba(10,18,8,0.95))' },
    mockupContent: (
      <div className="proj-mockup-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', padding: '8px' }}>
        <div className="proj-mockup-block" style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>♻️</div>
        <div className="proj-mockup-block" style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🏆</div>
        <div className="proj-mockup-line w90"></div>
        <div className="proj-mockup-line w60"></div>
        <div className="proj-mockup-block" style={{ height: '20px' }}></div>
        <div className="proj-mockup-block" style={{ height: '20px' }}></div>
      </div>
    )
  },
  {
    num: 'II',
    badge: '',
    badgeText: 'Full Stack',
    title: 'Student Attendance Tracker',
    desc: 'Built a full-stack React, Node.js, and MongoDB dashboard with role-based access, real-time attendance tracking, analytics/exports, and secure campus-restricted submission. Deployed using Vercel and Render.',
    tech: ['React', 'Node.js', 'MongoDB', 'Vercel'],
    github: 'https://github.com/kiruthik13/Students_attendance_tracker',
    demo: null,
    featured: false,
    mockupStyle: { background: 'linear-gradient(135deg,rgba(14,14,30,0.8),rgba(8,8,20,0.9))' },
    mockupContent: (
      <div className="proj-mockup-content">
        <div className="proj-mockup-line w90" style={{ height: '7px', background: 'linear-gradient(to right,rgba(30,80,200,0.3),rgba(30,80,200,0.1))' }}></div>
        <div className="proj-mockup-row">
          <div className="proj-mockup-block" style={{ width: '20px', height: '20px' }}></div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px', justifyContent: 'center' }}>
            <div className="proj-mockup-line w80"></div>
            <div className="proj-mockup-line w45"></div>
          </div>
        </div>
        <div className="proj-mockup-row">
          <div className="proj-mockup-block" style={{ width: '20px', height: '20px' }}></div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px', justifyContent: 'center' }}>
            <div className="proj-mockup-line w60"></div>
            <div className="proj-mockup-line w80"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    num: 'III',
    badge: '',
    badgeText: 'Supply Chain',
    title: 'Application Development for Monitoring of Wool from Farm to Fabric',
    desc: 'Designed, developed, and tested within a team of 6 using Figma and MIT App Tools.',
    tech: ['Figma', 'MIT Tools', 'Team × 6'],
    github: null,   // No public repo — button hidden
    demo: null,
    featured: false,
    mockupStyle: { background: 'linear-gradient(135deg,rgba(20,18,10,0.8),rgba(14,12,6,0.9))' },
    mockupContent: (
      <div className="proj-mockup-content">
        <div className="proj-mockup-row" style={{ alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.2rem' }}>🐑</span>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div className="proj-mockup-line w90"></div>
            <div className="proj-mockup-line w60"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    num: 'IV',
    badge: '',
    badgeText: 'Commerce',
    title: 'Ecommerce Solution for Organic Products',
    desc: 'Developed a Flutter-based mobile ecommerce application for organic rice, oils, powders, groceries, and eco-friendly products with admin and customer modules.',
    tech: ['Flutter', 'E-Commerce', 'Team × 5'],
    github: null,   // No public repo — button hidden
    demo: null,
    featured: false,
    mockupStyle: { background: 'linear-gradient(135deg,rgba(26,14,14,0.8),rgba(20,8,8,0.9))' },
    mockupContent: (
      <div className="proj-mockup-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '5px', padding: '8px 10px' }}>
        <div className="proj-mockup-block" style={{ height: '35px', borderColor: 'rgba(139,26,26,0.2)' }}></div>
        <div className="proj-mockup-block" style={{ height: '35px', borderColor: 'rgba(139,26,26,0.2)' }}></div>
        <div className="proj-mockup-block" style={{ height: '35px', borderColor: 'rgba(139,26,26,0.2)' }}></div>
      </div>
    )
  }
];

const ProjectLinks = ({ github, demo }) => (
  <div className="proj-links" style={{ marginTop: '1rem' }}>
    {/* Only render link if URL exists — never show dead # links */}
    {github && (
      <a href={github} target="_blank" rel="noopener noreferrer" className="proj-link">
        ⚔ GitHub
      </a>
    )}
    {demo && (
      <a href={demo} target="_blank" rel="noopener noreferrer" className="proj-link">
        🐉 Live Demo
      </a>
    )}
  </div>
);

const Projects = () => {
  return (
    <>
      <div className="section-head reveal">
        <div className="section-label">— The Conquests —</div>
        <h2 className="section-title">Projects &amp; Campaigns</h2>
        <div className="divider"><div className="div-line"></div><div className="div-gem"></div><div className="div-line r"></div></div>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((proj, idx) => (
          proj.featured ? (
            /* Featured card — two-column layout */
            <div key={idx} className="proj-card featured reveal">
              <div className="proj-mockup mockup-featured" style={proj.mockupStyle}>
                <div className="proj-mockup-screen">
                  <div className="proj-mockup-bar">
                    <div className="proj-mockup-dot" style={{ background: '#C0392B' }}></div>
                    <div className="proj-mockup-dot" style={{ background: '#C9A84C' }}></div>
                    <div className="proj-mockup-dot" style={{ background: '#27ae60' }}></div>
                  </div>
                  {proj.mockupContent}
                </div>
              </div>
              <div className="proj-info" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                <div>
                  <div className="proj-num">{proj.num}</div>
                  <div className={`proj-badge${proj.badge ? ' ' + proj.badge : ''}`}>{proj.badgeText}</div>
                  <h3 className="proj-title">{proj.title}</h3>
                  <p className="proj-desc">{proj.desc}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <div className="tech-stack">
                    {proj.tech.map((t, i) => <span key={i} className="tech">{t}</span>)}
                  </div>
                  <ProjectLinks github={proj.github} demo={proj.demo} />
                </div>
              </div>
            </div>
          ) : (
            /* Standard card */
            <div key={idx} className="proj-card reveal">
              <div className={`proj-mockup mockup-${proj.num.toLowerCase()}`} style={proj.mockupStyle}>
                <div className="proj-mockup-screen">
                  <div className="proj-mockup-bar">
                    <div className="proj-mockup-dot" style={{ background: '#C0392B' }}></div>
                    <div className="proj-mockup-dot" style={{ background: '#C9A84C' }}></div>
                    <div className="proj-mockup-dot" style={{ background: '#27ae60' }}></div>
                  </div>
                  {proj.mockupContent}
                </div>
              </div>
              <div className="proj-info">
                <div className="proj-num">{proj.num}</div>
                <div className={`proj-badge${proj.badge ? ' ' + proj.badge : ''}`}>{proj.badgeText}</div>
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-desc">{proj.desc}</p>
                <div className="tech-stack">
                  {proj.tech.map((t, i) => <span key={i} className="tech">{t}</span>)}
                </div>
                <ProjectLinks github={proj.github} demo={proj.demo} />
              </div>
            </div>
          )
        ))}
      </div>
    </>
  );
};

export default Projects;
