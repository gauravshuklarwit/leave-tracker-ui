import React from 'react';
import styles from "@/app/page.module.css";

export const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.pricingHeader}>
        <h2 className={styles.pricingTitle}>Simple, transparent pricing.</h2>
        <p className={styles.pricingText}>Start for free, upgrade when you need to.</p>
      </div>

      <div className={styles.pricingCards}>
        <div className={styles.pricingCard}>
          <h3 className={styles.planName}>Starter</h3>
          <div className={styles.planPrice}>$0<span>/mo</span></div>
          <p className={styles.planDesc}>Perfect for small teams getting started.</p>
          <ul className={styles.planFeatures}>
            <li>Up to 10 users</li>
            <li>Basic time off policies</li>
            <li>Slack & Email integrations</li>
            <li>Community support</li>
          </ul>
          <button className={styles.planBtn}>Get Started</button>
        </div>
        
        <div className={`${styles.pricingCard} ${styles.pricingCardFeatured}`}>
          <div className={styles.popularBadge}>Most Popular</div>
          <h3 className={styles.planName}>Pro</h3>
          <div className={styles.planPrice}>$4<span>/user/mo</span></div>
          <p className={styles.planDesc}>Everything you need for growing companies.</p>
          <ul className={styles.planFeatures}>
            <li>Unlimited users</li>
            <li>Custom policies & accruals</li>
            <li>HRIS integrations</li>
            <li>Priority support</li>
          </ul>
          <button className={`${styles.planBtn} ${styles.planBtnFeatured}`}>Start Free Trial</button>
        </div>
      </div>
    </section>
  );
};
