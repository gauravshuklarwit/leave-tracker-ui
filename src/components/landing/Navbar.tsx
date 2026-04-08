import React from 'react';
import Link from 'next/link';
import styles from "@/app/page.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>Folio.</Link>
      <div className={styles.navLinks}>
        <Link href="#features" className={styles.navLink}>Features</Link>
        <Link href="#teams" className={styles.navLink}>For Teams</Link>
        <Link href="#pricing" className={styles.navLink}>Pricing</Link>
      </div>
      <Link href="/sign-in" className={styles.navButton}>Sign In</Link>
    </nav>
  );
};
