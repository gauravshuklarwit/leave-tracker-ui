import React from 'react';
import styles from "@/app/page.module.css";

export const Teams = () => {
  return (
    <section id="teams" className={styles.teams}>
      <div className={styles.teamsHeader}>
        <h2 className={styles.teamsTitle}>Loved by the whole team.</h2>
        <p className={styles.teamsText}>Folio adapts to your company structure, making life easier for everyone.</p>
      </div>
      
      <div className={styles.teamGrid}>
        <div className={styles.teamRole}>
          <div className={styles.roleTag}>For Employees</div>
          <h3 className={styles.roleTitle}>Book time off in seconds</h3>
          <p className={styles.roleText}>No more confusing spreadsheets or legacy HR tools. See your balance, select your dates, and you're done.</p>
        </div>
        <div className={styles.teamRole}>
          <div className={styles.roleTag}>For Managers</div>
          <h3 className={styles.roleTitle}>Approve from anywhere</h3>
          <p className={styles.roleText}>Get pinged in Slack or Email. Review overlapping leaves instantly and approve with a single tap.</p>
        </div>
        <div className={styles.teamRole}>
          <div className={styles.roleTag}>For HR</div>
          <h3 className={styles.roleTitle}>Automated compliance</h3>
          <p className={styles.roleText}>Accruals, roll-overs, and local holidays are calculated automatically. Export reports for payroll in one click.</p>
        </div>
      </div>
    </section>
  );
};
