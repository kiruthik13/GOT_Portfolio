import React from 'react';

const Achievements = () => {
  const achievements = [
    { rank: 'I', trophy: '👑', medal: '1st Prize · Champion', title: 'CTPG Ideathon 2025', desc: 'Crowned supreme champion of ideation and innovation at Kongu Engineering College. The Ease App conquered all challengers to claim the Iron Throne of ideas.', glow: true },
    { rank: 'II', trophy: '🏆', medal: '1st Prize · Winner', title: 'CTPG Proof Of Concept 2025', desc: 'Demonstrated mastery of concept-to-reality, earning the throne of the POC competition — proof that vision without execution is merely a dream.', trophyGlow: 'rgba(201,168,76,0.5)' },
    { rank: 'III', trophy: '⚔️', medal: '2nd Prize · Silver', title: 'KEC Hackathon 2025', desc: 'Battled valiantly through the hackathon wars, claiming silver glory in an arena of the sharpest minds in the kingdom.', trophyGlow: 'rgba(192,192,192,0.4)' },
    { rank: 'IV', trophy: '🤖', medal: 'Certified Scholar', title: 'Robotics Workshop — SKCET, 2023', desc: 'Trained in the ancient arts of robotics and automation at Sri Krishna College of Engineering — expanding the realm of knowledge.', trophyGlow: 'rgba(201,168,76,0.3)' },
    { rank: 'V', trophy: '☕', medal: 'Oracle Certified', title: 'Oracle Java SE 17 — OCP', desc: 'Mastery of the Java programming language, certified by the Oracle order — a seal of professional excellence recognized across the realm.', trophyGlow: 'rgba(201,168,76,0.5)' },
    { rank: 'VI', trophy: '🛡', medal: 'NPTEL Certified', title: 'Cybersecurity — NPTEL', desc: 'Forged in the fires of cybersecurity knowledge through NPTEL\'s ancient scrolls — guardian of the digital fortress.', trophyGlow: 'rgba(201,168,76,0.3)' }
  ];

  return (
    <>
      <div className="section-head reveal">
        <div className="section-label">— Hall of Glory —</div>
        <h2 className="section-title">Achievements & Honours</h2>
        <div className="divider"><div className="div-line"></div><div className="div-gem"></div><div className="div-line r"></div></div>
      </div>
      <div className="ach-grid">
        {achievements.map((ach, idx) => (
          <div key={idx} className="ach-item reveal" style={{ transitionDelay: idx * 0.08 + 's' }}>
            <div className="ach-rank">{ach.rank}</div>
            <div className={`ach-trophy ${ach.glow ? 'gold-glow' : ''}`} style={{ filter: ach.trophyGlow ? `drop-shadow(0 0 10px ${ach.trophyGlow})` : '' }}>
              {ach.trophy}
            </div>
            <div className="ach-medal">{ach.medal}</div>
            <div className="ach-title">{ach.title}</div>
            <div className="ach-desc">{ach.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Achievements;
