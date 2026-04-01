import React from 'react';
import styles from "@/app/page.module.css";

export const Hero = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroBgShape} />
      
      <div className={styles.heroTag}>✨ The modern way to reset</div>
      <h1 className={styles.heroTitle}>
        Time off, <i>beautifully</i> managed.
      </h1>
      <p className={styles.heroText}>
        Folio is the most organic, seamless way for teams to manage time off. Employees request leave in seconds. HR approves in one click. Wellness prioritized.
      </p>
      
      <div className={styles.heroCta}>
        <button className={styles.primaryBtn}>
          Start for free
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
        <button className={styles.secondaryBtn}>See how it works</button>
      </div>
    </main>
  );
};
