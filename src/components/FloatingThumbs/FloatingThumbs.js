// src/components/FloatingDialog.js
import React, { useState, useEffect } from 'react';
import styles from './FloatingThumbs.module.css'; // Optional: use CSS Modules
import { useLocation } from 'react-router-dom';

const hasInteractedBefore = () => {
  const currentUrl = window.location.href;
  return localStorage.getItem(currentUrl) !== null;
};

const FloatingDialog = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showThanks, setShowThanks] = useState(false);
  const [hasSpentEnoughTime, setHasSpentEnoughTime] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    setShowFeedback(false);
    setFeedback('');
    setShowThanks(false);
    setHasSpentEnoughTime(false);

    const timer = setTimeout(() => {
      setHasSpentEnoughTime(true);
    }, 5000); // 30 seconds

    return () => clearTimeout(timer); // Cleanup
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
    const currentUrl = window.location.href;
    localStorage.setItem(currentUrl, direction); // Save interaction to local storage
    if (direction === 'down') {
      setShowFeedback(true);
    } else if (direction === 'up') {
      console.log('up clicked');
      setShowThanks(true);
      setTimeout(() => setIsOpen(false), 2000); // Close after 2 seconds
    }
    Statsig.instance().logEvent('ThumbClick', direction,{
      direction: direction,
      url: window.location.href,
    });
    console.log(`Thumb clicked: ${direction}`);
  };

  const handleSubmitFeedback = () => {
    // Logic to send feedback to a Statsig engineer
    console.log('Feedback submitted:', feedback);
    setShowFeedback(false);
    setTimeout(() => setIsOpen(false), 2000);    setFeedback('');
    setShowThanks(true);
    Statsig.instance().logEvent('FeedbackSubmitted', feedback);
    //save window.location.href without https://, http://, www., or a trailing slash. Or any query params. Remove it all.
    const url = window.location.href
      .replace(/^https?:\/\/|^www\./g, '')  // Remove protocol and www
      .replace(/\?.*$/, '')                 // Remove query parameters
      .replace(/\/$/, '');                  // Remove trailing slash only
    const assigneeConfig = Statsig.instance().getDynamicConfig('docs_url_assignments');
    console.log(url);
    const assignee = assigneeConfig.get(url, 'U087FSV8F0S');
    console.log(assignee);
    sendDocsFeedback(window.location.href, feedback, assignee);
  };

  if (!isOpen || !hasSpentEnoughTime || (hasInteractedBefore() && (!showFeedback && !showThanks))) return null;

  return (
    <div className={styles.dialog}>
      <div className={styles.content}>
        <div className={styles.closeButton + " " + styles.contentHolder}>
          <div onClick={() => {
            setIsOpen(false);
            const currentUrl = window.location.href;
            localStorage.setItem(currentUrl, 'closed');
          }}>X</div>
        </div>
        {showThanks ? (
          <div className={styles.thanksMessage}>Thanks!</div>
        ) : (
          <>
            {!showFeedback && (
              <>
                <div className={styles.contentHolder + " " + styles.title}>Like this doc?</div>
                <div className={styles.icons + " " + styles.contentHolder}>
                  <img
                    className={styles.icon}
                    src="/img/icons/icon-thumbs-up.png"
                    alt="Thumbs Up"
                    width="24"
                    height="24"
                    onClick={() => handleThumbClick('up')}
                  />
                  <img
                    className={styles.icon}
                    src="/img/icons/icon-thumbs-down.png"
                    alt="Thumbs Down"
                    width="24"
                    height="24"
                    onClick={() => handleThumbClick('down')}
                  />
                </div>
              </>
            )}
            {showFeedback && (
              <div className={styles.feedbackForm}>
                <div className={styles.feedbackTitle}>What went wrong?</div>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className={styles.feedbackInput}
                />
                <div className={styles.feedbackNote}>
                  <em>Your message gets sent to a Statsig engineer</em>
                </div>
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

export default FloatingDialog;
