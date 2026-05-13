import React from 'react'
import LoadingScreen from './components/LoadingScreen.jsx'
import Cursor from './components/Cursor.jsx'
import Particles from './components/Particles.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import GithubStats from './components/GithubStats.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Timeline from './components/Timeline.jsx'
import Achievements from './components/Achievements.jsx'
import Resume from './components/Resume.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Chatbot from './components/Chatbot.jsx'

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  // loadingDone: true only after loading screen fade-out completes
  // This prevents Particles & ember canvas from rendering during the loading sequence
  const [loadingDone, setLoadingDone] = React.useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu  = () => setMenuOpen(false);

  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      {/* Page transition overlay */}
      <div className="page-transition" id="page-transition"></div>

      {/* Loading Screen — signals parent when fade-out completes */}
      <LoadingScreen onDone={() => setLoadingDone(true)} />

      {/* Audio Button */}
      <AudioButton />

      {/* AI Chatbot */}
      <Chatbot />

      {/* Ember Particles Canvas — only after loading screen is fully gone */}
      {loadingDone && <Particles />}

      {/* Mobile Menu with overlay backdrop */}
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />

      {/* Navigation */}
      <Navbar menuOpen={menuOpen} onToggleMenu={toggleMenu} />

      {/* Main Content */}
      <section id="hero">
        <Hero />
      </section>

      <div className="section-wrap">
        <section id="about">
          <About />
        </section>
      </div>

      <div className="section-wrap">
        <section id="github-stats" style={{textAlign:'center'}}>
          <GithubStats />
        </section>
      </div>

      <div className="section-wrap">
        <section id="skills">
          <Skills />
        </section>
      </div>

      <div className="section-wrap">
        <section id="projects">
          <Projects />
        </section>
      </div>

      <div className="section-wrap">
        <section id="timeline">
          <Timeline />
        </section>
      </div>

      <div className="section-wrap">
        <section id="achievements">
          <Achievements />
        </section>
      </div>

      <div className="section-wrap">
        <section id="resume-section" style={{textAlign:'center'}}>
          <Resume />
        </section>
      </div>

      <div className="section-wrap">
        <section id="education">
          <Education />
        </section>
      </div>

      <div className="section-wrap">
        <section id="contact" style={{textAlign:'center'}}>
          <Contact />
        </section>
      </div>

      <Footer />
    </>
  )
}

/* ── Audio Button (inline small component) ── */
function AudioButton() {
  const [playing, setPlaying] = React.useState(false)
  const audioRef = React.useRef({ ctx: null, nodes: [] })

  function buildAudio() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const master = ctx.createGain()
    master.gain.value = 0.08
    master.connect(ctx.destination)

    const osc1 = ctx.createOscillator()
    osc1.type = 'sine'
    osc1.frequency.value = 55
    const g1 = ctx.createGain(); g1.gain.value = 0.5
    osc1.connect(g1); g1.connect(master)

    const osc2 = ctx.createOscillator()
    osc2.type = 'sine'
    osc2.frequency.value = 82.4
    const g2 = ctx.createGain(); g2.gain.value = 0.3
    osc2.connect(g2); g2.connect(master)

    const osc3 = ctx.createOscillator()
    osc3.type = 'triangle'
    osc3.frequency.value = 164.8
    const g3 = ctx.createGain(); g3.gain.value = 0.08
    osc3.connect(g3); g3.connect(master)

    const lfo = ctx.createOscillator()
    lfo.frequency.value = 0.12
    const lfoGain = ctx.createGain(); lfoGain.gain.value = 8
    lfo.connect(lfoGain); lfoGain.connect(osc1.frequency)

    const nodes = [osc1, osc2, osc3, lfo]
    nodes.forEach(n => n.start())
    audioRef.current = { ctx, nodes }
  }

  function handleAudio() {
    if (playing) {
      audioRef.current.nodes.forEach(n => { try { n.stop() } catch(e) {} })
      if (audioRef.current.ctx) audioRef.current.ctx.close()
      audioRef.current = { ctx: null, nodes: [] }
      setPlaying(false)
    } else {
      buildAudio()
      setPlaying(true)
    }
  }

  return (
    <button
      id="audio-btn"
      title="Toggle Ambient Sound"
      className={playing ? 'playing' : ''}
      onClick={handleAudio}
    >
      {playing ? '🔊' : '🔇'}
    </button>
  )
}

/* ── Mobile Menu — closes on link click, Escape key, and outside click ── */
function MobileMenu({ isOpen, onClose }) {
  // Close on Escape key
  React.useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const NAV_LINKS = [
    { href: '#about',         label: 'The Scroll' },
    { href: '#skills',        label: 'Arsenal' },
    { href: '#projects',      label: 'Conquests' },
    { href: '#timeline',      label: 'Chronicle' },
    { href: '#achievements',  label: 'Glory' },
    { href: '#resume-section',label: 'The Parchment' },
    { href: '#contact',       label: 'Ravens' },
  ];

  return (
    <>
      {/* Overlay backdrop — clicking outside closes menu */}
      {isOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="mobile-link"
            onClick={onClose}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}

export default App
