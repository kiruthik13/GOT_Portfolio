import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: 'Greetings, traveller. I am the Herald of Lord Kiruthikbairavan. Ask me anything about his skills, projects, or achievements. 🗡️', role: 'bot' }]);
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const K = {
    name: "Kiruthikbairavan C",
    role: "Full Stack Developer, Flutter Engineer & AI Enthusiast",
    location: "Erode, Tamil Nadu (targeting Coimbatore)",
    education: "MSc Software Systems, Kongu Engineering College (2022–2027), CGPA 7.4",
    email: "kiruthikbairavan13@gmail.com",
    phone: "9345304921",
    skills: "React.js (85%), Flutter/Dart (88%), Java (90%), Node.js (78%), MongoDB (75%), Firebase (80%), Figma (82%), AI/ML (72%)",
    certifications: "Oracle Java SE17 OCP, Oracle Apex, NPTEL Cybersecurity",
    internship: "Twincord Technologies (Full Stack Development)",
    projects: {
      ease: "AI-powered gamified waste management app with waste detection AI, honour points system, and recycling locator. Won CTPG Ideathon 2025 1st Place.",
      attendance: "Full Stack React/Node.js/MongoDB attendance tracker with role-based access and analytics. Deployed on Vercel.",
      ecommerce: "Flutter-based organic products e-commerce app built with a team of 5.",
      wool: "Supply chain app from farm to fabric, designed with Figma, built with MIT App Inventor. Team of 6."
    },
    achievements: ["CTPG Ideathon 2025 — 1st Place", "CTPG POC 2025 — 1st Place", "KEC Hackathon 2025 — 2nd Place", "Oracle Java SE17 Certified", "NPTEL Cybersecurity Certified"],
    available: "YES — actively seeking fresher Full Stack / Software Engineer roles in Coimbatore / Tamil Nadu. Open to remote and hybrid opportunities."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, typing]);

  const getResponse = (q) => {
    q = q.toLowerCase();
    if (/ease|waste|environment|ideathon|1st|first|champion/.test(q)) return `⚔️ <strong>Ease App</strong> is ${K.name}'s crown jewel. ${K.projects.ease}`;
    if (/skill|tech|stack|language|know|can|flutter|react|java|node/.test(q)) return `🛡️ Lord ${K.name} commands: <strong>${K.skills}</strong>. Also certified in: ${K.certifications}.`;
    if (/achieve|win|award|hackathon|glory/.test(q)) return `👑 The Hall of Glory: <strong>${K.achievements.join(' · ')}</strong>`;
    if (/hire|available|job|work|intern|fresher|salary|looking/.test(q)) return `📜 ${K.available}<br><br>Contact: <strong>${K.email}</strong> · ${K.phone}`;
    if (/project|built|made|app|web/.test(q)) return `⚔ Four campaigns have been conquered:<br>1. ${K.projects.ease}<br>2. ${K.projects.attendance}<br>3. ${K.projects.ecommerce}<br>4. ${K.projects.wool}`;
    if (/edu|college|cgpa|score|study/.test(q)) return `🏰 ${K.education}`;
    if (/contact|email|phone|reach|call/.test(q)) return `📬 Send ravens to: <strong>${K.email}</strong> or call the tower: ${K.phone}`;
    if (/intern|twincord/.test(q)) return `🎓 Lord Kiruthik served as an intern at <strong>${K.internship}</strong>.`;
    if (/certif|oracle|java|nptel/.test(q)) return `📜 Certifications earned: <strong>${K.certifications}</strong>`;
    if (/location|where|coimbatore|erode|tamil/.test(q)) return `📍 Based in <strong>${K.location}</strong>`;
    if (/hello|hi|greet|hey/.test(q)) return `⚔️ Hail, traveller! I am the Royal Herald of Lord Kiruthikbairavan. Ask me about his skills, projects, achievements, or availability for hire.`;
    return `🗡️ The Herald ponders your question about "<em>${q}</em>".<br><br>Try asking about: <strong>Skills · Projects · Achievements · Hiring · Education</strong><br><br>Or contact directly: <a href="mailto:${K.email}" style="color:var(--gold);">${K.email}</a>`;
  };

  const sendMessage = (text) => {
    const userMsg = text || inputValue.trim();
    if (!userMsg) return;
    setMessages(prev => [...prev, { text: userMsg, role: 'user' }]);
    setInputValue('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { text: getResponse(userMsg), role: 'bot' }]);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      <button id="chat-fab" title="Ask about Kiruthik" onClick={() => setIsOpen(!isOpen)}>⚔</button>
      <div className={`chat-panel ${isOpen ? 'open' : ''}`} id="chat-panel">
        <div className="chat-header">
          <span className="chat-header-icon">🐉</span>
          <div className="chat-header-text">
            <div className="chat-header-title">ROYAL HERALD</div>
            <div className="chat-header-sub">Ask about Kiruthik's realm</div>
          </div>
          <button className="chat-close" onClick={() => setIsOpen(false)}>✕</button>
        </div>
        <div className="chat-messages" id="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.role}`} dangerouslySetInnerHTML={{ __html: m.text }}></div>
          ))}
          {typing && <div className="chat-typing" style={{ display: 'flex' }}><span></span><span></span><span></span></div>}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-quick-btns">
          <button className="chat-quick-btn" onClick={() => sendMessage('Tell me about the Ease App project')}>⚔ Ease App</button>
          <button className="chat-quick-btn" onClick={() => sendMessage('What are his skills?')}>🛡 Skills</button>
          <button className="chat-quick-btn" onClick={() => sendMessage('What achievements does he have?')}>👑 Wins</button>
          <button className="chat-quick-btn" onClick={() => sendMessage('Is he available for hire?')}>📜 Hire</button>
        </div>
        <div className="chat-input-wrap">
          <input className="chat-input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Ask the Herald..." type="text" />
          <button className="chat-send" onClick={() => sendMessage()}>➤</button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
