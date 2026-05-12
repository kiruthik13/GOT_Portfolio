import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [displayNone, setDisplayNone] = useState(false);
  const [subText, setSubText] = useState('Forging the Realm...');

  const loadingMessages = ['Forging the Realm...', 'Kindling the Dragon Fire...', 'Summoning the Herald...', 'The Realm Awakens...'];

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    let msgIdx = 0;
    const interval = setInterval(() => {
      msgIdx = (msgIdx + 1) % loadingMessages.length;
      setSubText(loadingMessages[msgIdx]);
    }, 600);

    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        // Re-enable scrolling when fade out starts
        document.body.style.overflow = 'auto';
        setTimeout(() => setDisplayNone(true), 800);
      }, 2400);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (displayNone) return null;

  return (
    <div id="loading-screen" className={fadeOut ? 'fade-out' : ''}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="loading-runes">
          <span className="loading-rune" style={{ top: '10%', left: '10%', animationDelay: '0s' }}>ᚠ</span>
          <span className="loading-rune" style={{ top: '10%', right: '10%', animationDelay: '0.3s' }}>ᚢ</span>
          <span className="loading-rune" style={{ bottom: '10%', left: '10%', animationDelay: '0.6s' }}>ᚦ</span>
          <span className="loading-rune" style={{ bottom: '10%', right: '10%', animationDelay: '0.9s' }}>ᚨ</span>
          <span className="loading-rune" style={{ top: '50%', left: '5%', transform: 'translateY(-50%)', animationDelay: '0.15s' }}>ᚱ</span>
          <span className="loading-rune" style={{ top: '50%', right: '5%', transform: 'translateY(-50%)', animationDelay: '0.45s' }}>ᚲ</span>
        </div>
        <svg className="loading-sword-svg" viewBox="0 0 60 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="30" cy="148" rx="12" ry="7" fill="#8B6914" stroke="#C9A84C" strokeWidth="0.8" />
          <rect x="27" y="100" width="6" height="48" fill="#5C3A0A" rx="1" />
          <line x1="27" y1="108" x2="33" y2="108" stroke="#C9A84C" strokeWidth="0.5" opacity="0.6" />
          <line x1="27" y1="116" x2="33" y2="116" stroke="#C9A84C" strokeWidth="0.5" opacity="0.6" />
          <line x1="27" y1="124" x2="33" y2="124" stroke="#C9A84C" strokeWidth="0.5" opacity="0.6" />
          <line x1="27" y1="132" x2="33" y2="132" stroke="#C9A84C" strokeWidth="0.5" opacity="0.6" />
          <rect x="10" y="95" width="40" height="8" fill="#8B6914" rx="1" stroke="#C9A84C" strokeWidth="0.6" />
          <circle cx="10" cy="99" r="4" fill="#C9A84C" opacity="0.8" />
          <circle cx="50" cy="99" r="4" fill="#C9A84C" opacity="0.8" />
          <path d="M30 95 L34 30 L30 2 L26 30 Z" fill="url(#blade-grad)" stroke="#C9A84C" strokeWidth="0.4" />
          <line x1="30" y1="88" x2="30" y2="20" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" />
          <defs>
            <linearGradient id="blade-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8E4DC" />
              <stop offset="40%" stopColor="#C9A84C" />
              <stop offset="100%" stopColor="#8B6914" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="loading-title">Kiruthikbairavan C</div>
      <div className="loading-sub" id="loading-sub-text">{subText}</div>
      <div className="loading-bar-track"><div className="loading-bar-fill"></div></div>
    </div>
  );
};

export default LoadingScreen;
