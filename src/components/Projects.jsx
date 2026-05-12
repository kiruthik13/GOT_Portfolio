import React from 'react';

const Projects = () => {
  return (
    <>
      <div className="section-head reveal">
        <div className="section-label">— The Conquests —</div>
        <h2 className="section-title">Projects & Campaigns</h2>
        <div className="divider"><div className="div-line"></div><div className="div-gem"></div><div className="div-line r"></div></div>
      </div>
      <div className="projects-grid">
        {/* PROJECT I — Featured */}
        <div className="proj-card featured reveal">
          <div className="proj-mockup mockup-featured" style={{ background: 'linear-gradient(160deg,rgba(18,26,14,0.9),rgba(10,18,8,0.95))' }}>
            {/* Mockup content preserved */}
            <div className="proj-mockup-screen">
              <div className="proj-mockup-bar">
                <div className="proj-mockup-dot" style={{ background: '#C0392B' }}></div>
                <div className="proj-mockup-dot" style={{ background: '#C9A84C' }}></div>
                <div className="proj-mockup-dot" style={{ background: '#27ae60' }}></div>
              </div>
              <div className="proj-mockup-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', padding: '8px' }}>
                <div className="proj-mockup-block" style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>♻️</div>
                <div className="proj-mockup-block" style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🏆</div>
                <div className="proj-mockup-line w90"></div>
                <div className="proj-mockup-line w60"></div>
                <div className="proj-mockup-block" style={{ height: '20px' }}></div>
                <div className="proj-mockup-block" style={{ height: '20px' }}></div>
              </div>
            </div>
          </div>
          <div className="proj-info" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            <div>
              <div className="proj-num">I</div>
              <div className="proj-badge winner">⚔ CTPG Ideathon 2025 — 1st Prize</div>
              <h3 className="proj-title">Environment Waste Management System – “Ease” App</h3>
              <p className="proj-desc">Designed a gamified mobile application with AI waste detection, eco-points rewards, and recycling locator to promote sustainable living. Winner of CTPG Ideathon 2025.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div className="tech-stack"><span className="tech">Flutter</span><span class="tech">AI/ML</span><span className="tech">Firebase</span><span class="tech">Gamification</span><span class="tech">Mobile</span></div>
              <div className="proj-links" style={{ marginTop: '1rem' }}>
                <a href="https://github.com/kiruthik13/EASE" target="_blank" className="proj-link">⚔ GitHub</a>
                <a href="#" className="proj-link">🐉 Live Demo</a>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT II */}
        <div className="proj-card reveal">
          <div className="proj-mockup mockup-attend" style={{ background: 'linear-gradient(135deg,rgba(14,14,30,0.8),rgba(8,8,20,0.9))' }}>
            {/* Mockup content preserved */}
            <div className="proj-mockup-screen">
              <div className="proj-mockup-bar">
                <div className="proj-mockup-dot" style={{ background: '#C0392B' }}></div>
                <div className="proj-mockup-dot" style={{ background: '#C9A84C' }}></div>
                <div className="proj-mockup-dot" style={{ background: '#27ae60' }}></div>
              </div>
              <div className="proj-mockup-content">
                <div className="proj-mockup-line w90" style={{ height: '7px', background: 'linear-gradient(to right,rgba(30,80,200,0.3),rgba(30,80,200,0.1))' }}></div>
                <div className="proj-mockup-row">
                  <div className="proj-mockup-block" style={{ width: '20px', height: '20px' }}></div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px', justifyContent: 'center' }}>
                    <div className="proj-mockup-line w80"></div>
                    <div className="proj-mockup-line w45"></div>
                  </div>
                </div>
                <div className="proj-mockup-row"><div className="proj-mockup-block" style={{ width: '20px', height: '20px' }}></div><div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px', justifyContent: 'center' }}><div className="proj-mockup-line w60"></div><div className="proj-mockup-line w80"></div></div></div>
              </div>
            </div>
          </div>
          <div className="proj-info">
            <div className="proj-num">II</div>
            <div className="proj-badge">Full Stack</div>
            <h3 className="proj-title">Student Attendance Tracker</h3>
            <p className="proj-desc">Built a full-stack React, Node.js, and MongoDB dashboard with role-based access, real-time attendance tracking, analytics/exports, and secure campus-restricted submission. Deployed using Vercel and Render.</p>
            <div className="tech-stack"><span className="tech">React</span><span class="tech">Node.js</span><span class="tech">MongoDB</span><span class="tech">Vercel</span></div>
            <div className="proj-links"><a href="https://github.com/kiruthik13/Students_attendance_tracker" target="_blank" className="proj-link">⚔ GitHub</a></div>
          </div>
        </div>

        {/* PROJECT III */}
        <div className="proj-card reveal">
          <div className="proj-mockup mockup-wool" style={{ background: 'linear-gradient(135deg,rgba(20,18,10,0.8),rgba(14,12,6,0.9))' }}>
            {/* Mockup content preserved */}
            <div className="proj-mockup-screen">
              <div className="proj-mockup-bar">
                <div className="proj-mockup-dot" style={{ background: '#C0392B' }}></div>
                <div className="proj-mockup-dot" style={{ background: '#C9A84C' }}></div>
                <div className="proj-mockup-dot" style={{ background: '#27ae60' }}></div>
              </div>
              <div className="proj-mockup-content">
                <div className="proj-mockup-row" style={{ alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1.2rem' }}>🐑</span>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px' }}><div className="proj-mockup-line w90"></div><div className="proj-mockup-line w60"></div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="proj-info">
            <div className="proj-num">III</div>
            <div className="proj-badge">Supply Chain</div>
            <h3 className="proj-title">Application Development for Monitoring of Wool from Farm to Fabric</h3>
            <p className="proj-desc">Designed, developed, and tested within a team of 6 using Figma and MIT App Tools.</p>
            <div className="tech-stack"><span className="tech">Figma</span><span class="tech">MIT Tools</span><span class="tech">Team × 6</span></div>
            <div className="proj-links"><a href="#" className="proj-link">⚔ GitHub</a></div>
          </div>
        </div>

        {/* PROJECT IV */}
        <div className="proj-card reveal">
          <div className="proj-mockup mockup-ecom" style={{ background: 'linear-gradient(135deg,rgba(26,14,14,0.8),rgba(20,8,8,0.9))' }}>
            {/* Mockup content preserved */}
            <div className="proj-mockup-screen">
              <div className="proj-mockup-bar">
                <div className="proj-mockup-dot" style={{ background: '#C0392B' }}></div>
                <div className="proj-mockup-dot" style={{ background: '#C9A84C' }}></div>
                <div className="proj-mockup-dot" style={{ background: '#27ae60' }}></div>
              </div>
              <div className="proj-mockup-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '5px', padding: '8px 10px' }}>
                <div className="proj-mockup-block" style={{ height: '35px', borderColor: 'rgba(139,26,26,0.2)' }}></div>
                <div className="proj-mockup-block" style={{ height: '35px', borderColor: 'rgba(139,26,26,0.2)' }}></div>
                <div className="proj-mockup-block" style={{ height: '35px', borderColor: 'rgba(139,26,26,0.2)' }}></div>
              </div>
            </div>
          </div>
          <div className="proj-info">
            <div className="proj-num">IV</div>
            <div className="proj-badge">Commerce</div>
            <h3 className="proj-title">Ecommerce Solution for Organic Products</h3>
            <p className="proj-desc">Developed a Flutter-based mobile ecommerce application for organic rice, oils, powders, groceries, and eco-friendly products with admin and customer modules.</p>
            <div className="tech-stack"><span className="tech">Flutter</span><span class="tech">E-Commerce</span><span class="tech">Team × 5</span></div>
            <div className="proj-links"><a href="#" className="proj-link">⚔ GitHub</a></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
