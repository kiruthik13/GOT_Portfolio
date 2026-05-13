import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onDone }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [displayNone, setDisplayNone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Simulate progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    const handleLoad = () => {
      // We wait for the simulated progress to hit 100 and a bit more
      setTimeout(() => {
        setFadeOut(true);
        document.body.style.overflow = 'auto';
        setTimeout(() => {
          setDisplayNone(true);
          if (onDone) onDone();
        }, 1000);
      }, 3000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearInterval(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, [onDone]);

  if (displayNone) return null;

  return (
    <div id="loading-screen" className={fadeOut ? 'fade-out' : ''}>
      <div className="loading-content">
        <div className="loading-dragon-art">
          <img src="/loading-art.png" alt="Dragon Sigil" />
          <div className="fire-beam"></div>
        </div>

        <div className="loading-runes-circle">
          <span className="rune">ᚠ</span>
          <span className="rune">ᚢ</span>
          <span className="rune">ᚦ</span>
          <span className="rune">ᚨ</span>
          <span className="rune">ᚱ</span>
          <span className="rune">ᚲ</span>
        </div>

        <div className="loading-info">
          <h2 className="loading-name">KIRUTHIKBAIRAVAN C</h2>
          <div className="loading-status">SUMMONING THE HERALD...</div>
          
          <div className="loading-bar-wrap">
            <div className="loading-bar-track">
              <div className="loading-bar-fill" style={{ width: `${progress}%` }}>
                <div className="bar-glow"></div>
              </div>
            </div>
            <div className="loading-percentage">{progress}%</div>
          </div>
        </div>
      </div>

      <div className="loading-embers"></div>
    </div>
  );
};

export default LoadingScreen;
