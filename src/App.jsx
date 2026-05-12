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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      {/* Page transition overlay */}
      <div className="page-transition" id="page-transition"></div>

      {/* Loading Screen */}
      <LoadingScreen />

      {/* Audio Button */}
      <AudioButton />

      {/* AI Chatbot */}
      <Chatbot />

      {/* Ember Particles Canvas */}
      <Particles />

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

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

/* ── Mobile Menu (inline small component) ── */
function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobile-menu">
      <a href="#about" className="mobile-link" onClick={onClose}>The Scroll</a>
      <a href="#skills" className="mobile-link" onClick={onClose}>Arsenal</a>
      <a href="#projects" className="mobile-link" onClick={onClose}>Conquests</a>
      <a href="#timeline" className="mobile-link" onClick={onClose}>Chronicle</a>
      <a href="#achievements" className="mobile-link" onClick={onClose}>Glory</a>
      <a href="#resume-section" className="mobile-link" onClick={onClose}>The Parchment</a>
      <a href="#contact" className="mobile-link" onClick={onClose}>Ravens</a>
    </div>
  )
}

export default App
