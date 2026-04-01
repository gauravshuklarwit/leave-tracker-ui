import React from 'react';
import styles from "@/app/page.module.css";

export const AppShowcase = () => {
  return (
    <section className={styles.uiShowcase}>
      <div className={styles.uiHeader}>
        <div className={styles.uiTitle}>
          Pending Approvals
          <span className={styles.uiBadge}>3</span>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line>
          <line x1="9" y1="8" x2="15" y2="8"></line>
          <line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
      </div>
      
      <div className={styles.uiList}>
        <div className={styles.uiItem}>
          <div className={styles.uiUser}>
            <div className={`${styles.uiAvatar} ${styles.c1}`}>E</div>
            <div className={styles.uiInfo}>
              <span className={styles.uiInfoName}>Emma Richards</span>
              <span className={styles.uiInfoType}>Sick Leave • Today</span>
            </div>
          </div>
          <div className={styles.uiActions}>
            <button className={styles.uiBtnReject}>Decline</button>
            <button className={styles.uiBtnApprove}>Approve</button>
          </div>
        </div>
        
        <div className={styles.uiItem}>
          <div className={styles.uiUser}>
            <div className={`${styles.uiAvatar} ${styles.c2}`}>M</div>
            <div className={styles.uiInfo}>
              <span className={styles.uiInfoName}>Marcus Chen</span>
              <span className={styles.uiInfoType}>Annual Vacation • Aug 14 - 28</span>
            </div>
          </div>
          <div className={styles.uiActions}>
            <button className={styles.uiBtnReject}>Decline</button>
            <button className={styles.uiBtnApprove}>Approve</button>
          </div>
        </div>
      </div>
    </section>
  );
};
