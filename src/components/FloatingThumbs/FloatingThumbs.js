import React, { useState, useEffect } from 'react';
import styles from './FloatingThumbs.module.css'; // Optional: use CSS Modules
import { useLocation } from 'react-router-dom';

const getStatsig = () => {
  if (typeof window === 'undefined' || !window.Statsig?.instances) {
    return null;
  }
  return window.Statsig.instances['client-XlqSMkAavOmrePNeWfD0fo2cWcjxkZ0cJZz64w7bfHX'];
}

const hasInteractedBefore = () => {
  const currentUrl = window.location.href;
  return localStorage.getItem(currentUrl) !== null;
};

const FloatingThumbs = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showThanks, setShowThanks] = useState(false);
  const [showFeedbackThanks, setShowFeedbackThanks] = useState(false);
  const [hasSpentEnoughTime, setHasSpentEnoughTime] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    setIsOpen(true);
    setShowFeedback(false);
    setShowFeedbackThanks(false);
    setFeedback('');
    setShowThanks(false);
    setHasSpentEnoughTime(false);
    setClickedButton(null);
    setHoveredButton(null);

    const statsig = getStatsig();
    const timeoutBeforeShow = statsig 
      ? statsig.getDynamicConfig('how_long_before_show_feedback_docs').get('timeout', 30000)
      : 30000;

    const timer = setTimeout(() => {
      setHasSpentEnoughTime(true);
    }, timeoutBeforeShow); 

    return () => clearTimeout(timer); 
  }, [location]);

  async function sendDocsFeedback(url, feedback, assignee) {
    const endpoint = "https://us-central1-y42bq-368018.cloudfunctions.net/send-docs-feedback";
    const payload = { URL: url, Feedback: feedback, Assignee: assignee };
  
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }
  
    return response.json();
  }

  const handleThumbClick = (direction) => {
    setClickedButton(direction);
    const currentUrl = window.location.href;
    
    if (direction === 'down') {
      setShowFeedback(true);
    } else if (direction === 'up') {
      setTimeout(() => {
        setShowThanks(true);
        setTimeout(() => {
          setIsOpen(false);
          localStorage.setItem(currentUrl, 'up');
        }, 2000); // Close after 2 seconds
      }, 300); // Wait 500ms to show the thanks message
    }
    const statsig = getStatsig();
    if (statsig) {
      statsig.logEvent('ThumbClick', direction, {
        direction: direction,
        url: window.location.href,
      });
    }
  };

  const handleSubmitFeedback = () => {
    const currentUrl = window.location.href;
    setShowFeedback(false);
    setTimeout(() => {
      setIsOpen(false)
      localStorage.setItem(currentUrl, 'down');
    }, 2000);    
    setFeedback('');
    setShowFeedbackThanks(true);
    const statsig = getStatsig();
    if (statsig) {
      statsig.logEvent('FeedbackSubmitted', feedback);
    }
    const url = window.location.href
      .replace(/^https?:\/\/|^www\./g, '')  // Remove protocol and www
      .replace(/\?.*$/, '')                 // Remove query parameters
      .replace(/\/$/, '');                  // Remove trailing slash only
    const DEFAULT_ASSIGNEE = 'U087FSV8F0S';
    const assignee = statsig 
      ? statsig.getDynamicConfig('docs_url_assignments').get(url, DEFAULT_ASSIGNEE)
      : DEFAULT_ASSIGNEE;
    sendDocsFeedback(window.location.href, feedback, assignee);
  };
  const statsig = getStatsig();
  const isFeedbackEnabled = statsig ? statsig.checkGate('docs_feedback_enabled') : false;

  if (!isFeedbackEnabled || !isOpen || !hasSpentEnoughTime || (hasInteractedBefore() && (!showFeedback && !showThanks))) return null;

  return (
    <div className={showFeedback ? styles.feedbackDialog : styles.dialog}>
      <div className={styles.closeButton}>
        <div onClick={() => {
          setIsOpen(false);
          const currentUrl = window.location.href;
          localStorage.setItem(currentUrl, 'closed');
        }}>
          <img
            src='/img/icons/icon-x.png'
            alt='Close'
            width='20'
            height='20'
          />
        </div>
      </div>
      <div className={(showThanks || showFeedbackThanks) ? styles.thanksContent : styles.content}>
        {showThanks || showFeedbackThanks ? (
          <>
          <img
            src={showFeedbackThanks ? '/img/icons/icon-sent.png' : '/img/icons/icon-heart.png'}
            alt='Sent'
            width='24'
            height='24'
          />
              <div className={styles.thanksMessage}>{showThanks ? 'Thank You!' : 'Thanks! Your message was sent.'}</div>
          <img 
              className={styles.statsigLogo}
              src='/img/icons/statsig-disabled.png'
              alt='Statsig'
              width='60'
            />
          </>
        ) : (
          <>
            {!showFeedback && (
              <>
                <div className={styles.contentHolder + " " + styles.title}>Like this doc?</div>
                <div className={styles.icons + " " + styles.contentHolder}>
                  <div 
                    className={`${styles.greyCorners} ${styles.iconContainerUp}  ${styles.iconContainer} ${clickedButton === 'up' ? styles.clickedUp : ''}`}
                    onClick={() => handleThumbClick('up')}
                    onMouseEnter={() => setHoveredButton('up')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <img
                      className={`${styles.icon} ${styles.iconUp} ${clickedButton === 'up' ? styles.clickedUp : ''}`}
                      src={clickedButton === 'up' || hoveredButton === 'up' ? "/img/icons/icon-thumbs-up-green.png" : "/img/icons/icon-thumbs-up.png"}
                      alt="Thumbs Up"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div 
                    className={`${styles.greyCorners} ${styles.iconContainerDown} ${styles.iconContainer} ${clickedButton === 'down' ? styles.clickedDown : ''}`}
                    onClick={() => handleThumbClick('down')}
                    onMouseEnter={() => setHoveredButton('down')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <img
                      className={`${styles.icon} ${styles.iconDown} ${clickedButton === 'down' ? styles.clickedDown : ''}`}
                      src={clickedButton === 'down' || hoveredButton === 'down' ? "/img/icons/icon-thumbs-down-red.png" : "/img/icons/icon-thumbs-down.png"}
                      alt="Thumbs Down"
                      width="24"
                      height="24"
                    />
                  </div>
                </div>
                  <img 
                    className={styles.statsigLogo}
                    src='/img/icons/statsig-disabled.png'
                    alt='Statsig'
                    width='60'
                  />
              </>
            )}
            {showFeedback && (
              <div className={styles.feedbackDialog}>
                <div className={styles.title}>What went wrong?</div>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className={styles.feedbackInput}
                  placeholder="Your message gets sent to a Statsig engineer"
                />
                <button onClick={handleSubmitFeedback} className={styles.submitButton}>
                  Submit
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FloatingThumbs;
