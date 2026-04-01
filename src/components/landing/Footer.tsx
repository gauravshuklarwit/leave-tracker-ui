import React from 'react';
import styles from "@/app/page.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <span className={`${styles.logo} ${styles.footerLogo}`}>Folio.</span>
          <p className={styles.footerDesc}>Time off, beautifully managed.</p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerColumn}>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#teams">For Teams</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <div className={styles.footerColumn}>
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Folio. All rights reserved.</p>
      </div>
    </footer>
  );
};
