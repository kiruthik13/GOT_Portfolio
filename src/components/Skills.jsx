import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('bars');

  useEffect(() => {
    const revEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          e.target.querySelectorAll('.bar-fill').forEach((bar) => {
            setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, 400);
          });
        }
      });
    }, { threshold: 0.12 });
    revEls.forEach((el) => io.observe(el));
    return () => revEls.forEach((el) => io.unobserve(el));
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="section-head reveal">
        <div className="section-label">— The Arsenal —</div>
        <h2 className="section-title">Skills & Mastery</h2>
        <div className="divider"><div className="div-line"></div><div className="div-gem"></div><div className="div-line r"></div></div>
      </div>

      <div className="skills-tabs">
        <button className={`skill-tab ${activeTab === 'bars' ? 'active' : ''}`} onClick={() => handleTabChange('bars')}>⚔ Skill Bars</button>
        <button className={`skill-tab ${activeTab === 'tree' ? 'active' : ''}`} onClick={() => handleTabChange('tree')}>🌳 Skill Tree</button>
      </div>

      {activeTab === 'bars' && (
        <div className="skills-panel active" id="bars-panel">
          <div className="skills-grid">
            <div className="skill-card reveal">
              <div className="skill-house-label">House of the Web</div>
              <div className="skill-card-title">Web Development</div>
              <div className="skill-row"><div className="skill-meta"><span>React.js</span><span>85%</span></div><div className="bar-track"><div className="bar-fill" data-w="85"></div></div></div>
              <div className="skill-row"><div className="skill-meta"><span>Node.js</span><span>78%</span></div><div className="bar-track"><div className="bar-fill" data-w="78"></div></div></div>
              <div className="skill-row"><div className="skill-meta"><span>MongoDB</span><span>75%</span></div><div className="bar-track"><div className="bar-fill" data-w="75"></div></div></div>
              <div className="cert-row"><span className="cert-icon">🎓</span>Full Stack Mastery</div>
            </div>
            <div className="skill-card reveal">
              <div className="skill-house-label">House of the Dragon App</div>
              <div className="skill-card-title">Application Development</div>
              <div className="skill-row"><div className="skill-meta"><span>Flutter / Dart</span><span>88%</span></div><div className="bar-track"><div className="bar-fill" data-w="88"></div></div></div>
              <div className="skill-row"><div className="skill-meta"><span>Firebase</span><span>80%</span></div><div className="bar-track"><div className="bar-fill" data-w="80"></div></div></div>
              <div className="skill-row"><div className="skill-meta"><span>Mobile Architecture</span><span>82%</span></div><div className="bar-track"><div className="bar-fill" data-w="82"></div></div></div>
              <div className="cert-row"><span className="cert-icon">🛡</span>Mobile Conquests</div>
            </div>
            <div className="skill-card reveal">
              <div className="skill-house-label">House of the Iron Throne</div>
              <div className="skill-card-title">Core Mastery</div>
              <div className="skill-row"><div className="skill-meta"><span>Java</span><span>90%</span></div><div className="bar-track"><div className="bar-fill" data-w="90"></div></div></div>
              <div className="skill-row"><div className="skill-meta"><span>Problem Solving</span><span>88%</span></div><div className="bar-track"><div className="bar-fill" data-w="88"></div></div></div>
              <div className="skill-row"><div className="skill-meta"><span>Algorithm Design</span><span>85%</span></div><div className="bar-track"><div className="bar-fill" data-w="85"></div></div></div>
              <div className="cert-row"><span className="cert-icon">☕</span>Oracle Java SE17 Certified</div>
            </div>
            <div className="skill-card reveal">
              <div className="skill-house-label">The Maester's Craft</div>
              <div className="skill-card-title">Intelligence & Design</div>
              <div className="skill-row"><div className="skill-meta"><span>AI Integration</span><span>72%</span></div><div className="bar-track"><div className="bar-fill" data-w="72"></div></div></div>
              <div className="skill-row"><div className="skill-meta"><span>UI/UX Research</span><span>82%</span></div><div className="bar-track"><div className="bar-fill" data-w="82"></div></div></div>
              <div className="skill-row"><div className="skill-meta"><span>System Design</span><span>75%</span></div><div className="bar-track"><div className="bar-fill" data-w="75"></div></div></div>
              <div className="cert-row"><span className="cert-icon">⚖</span>Oracle Apex Certified</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tree' && (
        <div className="skills-panel active" id="tree-panel">
          <div className="skill-tree-svg-wrap">
            <svg id="skill-tree-svg" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '900px', display: 'block', margin: '0 auto' }}>
              <path className="skill-tree-edge" d="M450 80 L220 180" />
              <path className="skill-tree-edge" d="M450 80 L450 180" />
              <path className="skill-tree-edge" d="M450 80 L680 180" />
              <path className="skill-tree-edge" d="M220 200 L120 300" />
              <path className="skill-tree-edge" d="M220 200 L220 300" />
              <path className="skill-tree-edge" d="M220 200 L320 300" />
              <path className="skill-tree-edge" d="M450 200 L350 300" />
              <path className="skill-tree-edge" d="M450 200 L450 300" />
              <path className="skill-tree-edge" d="M450 200 L550 300" />
              <path className="skill-tree-edge" d="M680 200 L580 300" />
              <path className="skill-tree-edge" d="M680 200 L680 300" />
              <path className="skill-tree-edge" d="M680 200 L780 300" />
              <path className="skill-tree-edge" d="M350 320 L280 410" />
              <path className="skill-tree-edge" d="M120 320 L80 410" />
              <path className="skill-tree-edge" d="M580 320 L620 410" />

              <g className="skill-tree-node" transform="translate(450,60)">
                <circle className="stn-circle" r="30" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="1.5" />
                <text y="5" textAnchor="middle" fontFamily="Cinzel Decorative,serif" fontSize="8" fill="#C9A84C">Kiruthik</text>
                <text y="17" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="6" fill="#8B6914">REALM</text>
              </g>

              <g className="skill-tree-node" transform="translate(220,190)">
                <rect x="-45" y="-20" width="90" height="40" rx="2" fill="rgba(14,20,26,0.9)" stroke="rgba(201,168,76,0.4)" strokeWidth="1" />
                <text y="-3" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="8" fill="#C9A84C">Frontend</text>
                <text y="10" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="6" fill="#B8B0A0">Web Dev</text>
              </g>
              <g className="skill-tree-node" transform="translate(450,190)">
                <rect x="-45" y="-20" width="90" height="40" rx="2" fill="rgba(14,20,26,0.9)" stroke="rgba(201,168,76,0.4)" strokeWidth="1" />
                <text y="-3" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="8" fill="#C9A84C">Backend</text>
                <text y="10" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="6" fill="#B8B0A0">Server + DB</text>
              </g>
              <g className="skill-tree-node" transform="translate(680,190)">
                <rect x="-45" y="-20" width="90" height="40" rx="2" fill="rgba(14,20,26,0.9)" stroke="rgba(201,168,76,0.4)" strokeWidth="1" />
                <text y="-3" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="8" fill="#C9A84C">Mobile</text>
                <text y="10" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="6" fill="#B8B0A0">App Dev</text>
              </g>

              <g className="skill-tree-node" transform="translate(120,310)">
                <circle className="stn-circle" r="22" fill="rgba(14,26,14,0.8)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                <text y="-2" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="7" fill="#E8E4DC">React</text>
                <text y="9" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="5.5" fill="#8B6914">85%</text>
              </g>
              <g className="skill-tree-node" transform="translate(220,310)">
                <circle className="stn-circle" r="22" fill="rgba(14,26,14,0.8)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                <text y="-2" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="7" fill="#E8E4DC">UI/UX</text>
                <text y="9" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="5.5" fill="#8B6914">82%</text>
              </g>
              <g className="skill-tree-node" transform="translate(320,310)">
                <circle className="stn-circle" r="22" fill="rgba(14,26,14,0.8)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                <text y="-2" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="7" fill="#E8E4DC">JS/TS</text>
                <text y="9" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="5.5" fill="#8B6914">80%</text>
              </g>
              <g className="skill-tree-node" transform="translate(350,310)">
                <circle className="stn-circle" r="22" fill="rgba(20,14,8,0.8)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                <text y="-2" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="7" fill="#E8E4DC">Java</text>
                <text y="9" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="5.5" fill="#8B6914">90%</text>
              </g>
              <g className="skill-tree-node" transform="translate(450,310)">
                <circle className="stn-circle" r="22" fill="rgba(20,14,8,0.8)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                <text y="-2" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="7" fill="#E8E4DC">Node</text>
                <text y="9" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="5.5" fill="#8B6914">78%</text>
              </g>
              <g className="skill-tree-node" transform="translate(550,310)">
                <circle className="stn-circle" r="22" fill="rgba(20,14,8,0.8)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                <text y="-2" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="7" fill="#E8E4DC">MongoDB</text>
                <text y="9" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="5.5" fill="#8B6914">75%</text>
              </g>
              <g className="skill-tree-node" transform="translate(580,310)">
                <circle className="stn-circle" r="22" fill="rgba(14,14,26,0.8)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                <text y="-2" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="7" fill="#E8E4DC">Flutter</text>
                <text y="9" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="5.5" fill="#8B6914">88%</text>
              </g>
              <g className="skill-tree-node" transform="translate(680,310)">
                <circle className="stn-circle" r="22" fill="rgba(14,14,26,0.8)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                <text y="-2" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="7" fill="#E8E4DC">Firebase</text>
                <text y="9" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="5.5" fill="#8B6914">80%</text>
              </g>
              <g className="skill-tree-node" transform="translate(780,310)">
                <circle className="stn-circle" r="22" fill="rgba(14,14,26,0.8)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                <text y="-2" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="7" fill="#E8E4DC">Figma</text>
                <text y="9" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="5.5" fill="#8B6914">82%</text>
              </g>

              <g className="skill-tree-node" transform="translate(80,420)">
                <rect x="-38" y="-16" width="76" height="32" rx="2" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.5)" strokeWidth="1" />
                <text y="-2" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="6.5" fill="#C9A84C">⚡ Next.js</text>
                <text y="10" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="5" fill="#8B6914">Unlocked</text>
              </g>
              <g className="skill-tree-node" transform="translate(280,420)">
                <rect x="-42" y="-16" width="84" height="32" rx="2" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.5)" strokeWidth="1" />
                <text y="-2" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="6.5" fill="#C9A84C">☕ OCP SE17</text>
                <text y="10" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="5" fill="#8B6914">Certified</text>
              </g>
              <g className="skill-tree-node" transform="translate(620,420)">
                <rect x="-40" y="-16" width="80" height="32" rx="2" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.5)" strokeWidth="1" />
                <text y="-2" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="6.5" fill="#C9A84C">🤖 AI/ML</text>
                <text y="10" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="5" fill="#8B6914">In Progress</text>
              </g>
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
