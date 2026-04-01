import React from 'react';
import styles from "@/app/page.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logo}>Folio.</a>
      <div className={styles.navLinks}>
        <a href="#features" className={styles.navLink}>Features</a>
        <a href="#teams" className={styles.navLink}>For Teams</a>
        <a href="#pricing" className={styles.navLink}>Pricing</a>
      </div>
      <a href="/login" className={styles.navButton}>Get Started</a>
    </nav>
  );
};
