import React from 'react';
import styles from "@/app/page.module.css";

export const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.featuresBg} />
      <div className={styles.featuresHeader}>
        <h2 className={styles.featuresTitle}>Breathe easier.</h2>
        <p className={styles.featuresText}>Everything you need to manage your team's time off, built into one calm, collected workspace.</p>
      </div>
      
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>One-Click Requests</h3>
          <p className={styles.cardText}>Employees can request time off, sick leave, or remote days in seconds without navigating confusing enterprise software.</p>
        </div>
        
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>Instant Approvals</h3>
          <p className={styles.cardText}>Managers receive beautifully formatted requests via email or Slack. Approve or decline directly from the notification.</p>
        </div>
        
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>Live Balances</h3>
          <p className={styles.cardText}>Always know exactly how many days you have left. Folio syncs time off across your entire team in real-time.</p>
        </div>
      </div>
    </section>
  );
};
