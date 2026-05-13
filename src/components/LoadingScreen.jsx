import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onDone }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [displayNone, setDisplayNone] = useState(false);
  const [subText, setSubText] = useState('Forging the Realm...');

  const loadingMessages = [
    'Forging the Realm...',
    'Kindling the Dragon Fire...',
    'Summoning the Herald...',
    'The Realm Awakens...',
    'Dracarys...'
  ];

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    let msgIdx = 0;
    const interval = setInterval(() => {
      msgIdx = (msgIdx + 1) % loadingMessages.length;
      setSubText(loadingMessages[msgIdx]);
    }, 800);

    const handleLoad = () => {
      // Simulate slightly longer loading for dramatic effect
      setTimeout(() => {
        setFadeOut(true);
        document.body.style.overflow = 'auto';
        setTimeout(() => {
          setDisplayNone(true);
          if (onDone) onDone();
        }, 1000);
      }, 3500);
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
  }, [onDone]);

  if (displayNone) return null;

  return (
    <div id="loading-screen" className={fadeOut ? 'fade-out' : ''}>
      <div className="dragon-loading-container">
        {/* Dragon Head SVG */}
        <div className="dragon-head-wrap">
          <svg className="dragon-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="fire-filter" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="turbulence" baseFrequency="0.05 0.1" numOctaves="3" seed="2">
                  <animate attributeName="baseFrequency" dur="5s" values="0.05 0.1;0.06 0.15;0.05 0.1" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="20" />
              </filter>
              <linearGradient id="dragon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C9A84C" />
                <stop offset="100%" stopColor="#8B6914" />
              </linearGradient>
            </defs>

            {/* Fire Breath - uses filter for "real" movement */}
            <path 
              className="dragon-fire" 
              d="M50,60 Q50,90 20,120 Q50,110 80,120 Q50,90 50,60" 
              fill="url(#fire-grad)" 
              filter="url(#fire-filter)"
            />
            
            <linearGradient id="fire-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#FF4500" />
              <stop offset="100%" stopColor="#8B0000" stopOpacity="0" />
            </linearGradient>

            {/* Stylized Dragon Head */}
            <path 
              className="dragon-path"
              d="M30,40 C30,30 40,20 50,20 C60,20 70,30 70,40 L75,55 L65,55 L60,45 L50,50 L40,45 L35,55 L25,55 Z M50,25 C45,25 42,28 42,32 M58,32 C58,28 55,25 50,25" 
              fill="url(#dragon-grad)" 
              stroke="#000" 
              strokeWidth="0.5"
            />
            {/* Eyes */}
            <circle cx="42" cy="35" r="1.5" fill="#FF0000">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="58" cy="35" r="1.5" fill="#FF0000">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        <div className="loading-runes">
          <span className="loading-rune" style={{ top: '10%', left: '10%', animationDelay: '0s' }}>ᚠ</span>
          <span className="loading-rune" style={{ top: '10%', right: '10%', animationDelay: '0.3s' }}>ᚢ</span>
          <span className="loading-rune" style={{ bottom: '10%', left: '10%', animationDelay: '0.6s' }}>ᚦ</span>
          <span className="loading-rune" style={{ bottom: '10%', right: '10%', animationDelay: '0.9s' }}>ᚨ</span>
        </div>
      </div>

      <div className="loading-content">
        <div className="loading-title">Kiruthikbairavan C</div>
        <div className="loading-sub">{subText}</div>
        <div className="loading-bar-track">
          <div className="loading-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
