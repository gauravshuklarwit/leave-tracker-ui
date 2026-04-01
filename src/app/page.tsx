import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>Folio.</a>
        <div className={styles.navLinks}>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#teams" className={styles.navLink}>For Teams</a>
          <a href="#pricing" className={styles.navLink}>Pricing</a>
        </div>
        <a href="/login" className={styles.navButton}>Get Started</a>
      </nav>

      {/* Hero Section */}
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

      {/* App Showcase / Interactive Demo Feel */}
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
          {/* Item 1 */}
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
          
          {/* Item 2 */}
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

      {/* Features Section */}
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
    </div>
  );
}
