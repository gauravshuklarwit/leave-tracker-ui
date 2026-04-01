import styles from './dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.dashboardLayout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <a href="/" className={styles.logo}>Folio.</a>
        
        <nav className={styles.navMenu}>
          <a href="/dashboard" className={`${styles.navItem} ${styles.active}`}>
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="9" rx="1" />
              <rect x="14" y="3" width="7" height="5" rx="1" />
              <rect x="14" y="12" width="7" height="9" rx="1" />
              <rect x="3" y="16" width="7" height="5" rx="1" />
            </svg>
            Dashboard
          </a>
          <a href="/dashboard/leaves" className={styles.navItem}>
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Leave Requests
          </a>
          <a href="/dashboard/types" className={styles.navItem}>
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
            Leave Types
          </a>
          <a href="/dashboard/employees" className={styles.navItem}>
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Employee Management
          </a>
          <a href="/dashboard/holidays" className={styles.navItem}>
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Holiday Management
          </a>
        </nav>

        <div className={styles.userProfile}>
          <div className={styles.avatar}>OA</div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>Owner Admin</span>
            <span className={styles.userRole}>admin@rwit.io</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.dashboardBg} />
        
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.greeting}>
            <h1>Welcome back, Owner!</h1>
            <p>Overview of leave management activity</p>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.notificationBtn}>
              <div className={styles.badge} />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <button className={styles.newRequestBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              New Request
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.pending}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div className={styles.statInfo}>
              <h3>1</h3>
              <p>Pending Requests</p>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.approved}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className={styles.statInfo}>
              <h3>6</h3>
              <p>Approved Requests</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.rejected}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <div className={styles.statInfo}>
              <h3>4</h3>
              <p>Rejected Requests</p>
            </div>
          </div>
        </div>

        {/* Main Sections Grid */}
        <div className={styles.dashboardGrid}>
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Balances Section */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Leave Balances
                </h2>
              </div>
              <div className={styles.balancesGrid}>
                <div className={`${styles.balanceCard} ${styles.earned}`}>
                  <div className={styles.balanceTitle}>Earned Leave</div>
                  <div className={styles.balanceAmount}>22</div>
                  <div className={styles.balanceTotal}>1 used / 23 total</div>
                  <div className={styles.progressBar}>
                    <div className={`${styles.progressFill} ${styles.earned}`} />
                  </div>
                </div>
                
                <div className={`${styles.balanceCard} ${styles.unpaid}`}>
                  <div className={styles.balanceTitle}>Leave Without Pay</div>
                  <div className={styles.balanceAmount}>10</div>
                  <div className={styles.balanceTotal}>0 used / 10 total</div>
                  <div className={styles.progressBar}>
                    <div className={`${styles.progressFill} ${styles.unpaid}`} />
                  </div>
                </div>
                
                <div className={`${styles.balanceCard} ${styles.sick}`}>
                  <div className={styles.balanceTitle}>Sick Leave</div>
                  <div className={styles.balanceAmount}>0</div>
                  <div className={styles.balanceTotal}>3 used / 3 total</div>
                  <div className={styles.progressBar}>
                    <div className={`${styles.progressFill} ${styles.sick}`} />
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Leave Requests Section */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="1 4 1 10 7 10" />
                    <polyline points="23 20 23 14 17 14" />
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15" />
                  </svg>
                  Recent Leave Requests
                </h2>
                <a href="#view-all" className={styles.viewAll}>View Details</a>
              </div>
              
              <div className={styles.requestList}>
                <div className={styles.requestItem}>
                  <div className={styles.requestIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className={styles.requestDetails}>
                    <div className={styles.requestName}>Sick Leave Leave</div>
                    <div className={styles.requestType}>Rajesh Khurana</div>
                  </div>
                  <div className={styles.requestDates}>31/03/2026 - 01/04/2026 | 2 days</div>
                  <div className={`${styles.statusBadge} ${styles.approved}`}>Approved</div>
                </div>

                <div className={styles.requestItem}>
                  <div className={styles.requestIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className={styles.requestDetails}>
                    <div className={styles.requestName}>Earned Leave Leave</div>
                    <div className={styles.requestType}>HR HR</div>
                  </div>
                  <div className={styles.requestDates}>31/03/2026 - 31/03/2026 | 1 days</div>
                  <div className={`${styles.statusBadge} ${styles.approved}`}>Approved</div>
                </div>
                
                <div className={styles.requestItem}>
                  <div className={styles.requestIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className={styles.requestDetails}>
                    <div className={styles.requestName}>Sick Leave Leave</div>
                    <div className={styles.requestType}>Rajesh Khurana</div>
                  </div>
                  <div className={styles.requestDates}>08/04/2026 - 09/04/2026 | 2 days</div>
                  <div className={`${styles.statusBadge} ${styles.rejected}`}>Rejected</div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Upcoming Holidays Section */}
            <section className={styles.section} style={{ height: '100%' }}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Upcoming Holidays
                </h2>
              </div>
              
              <div className={styles.holidayList}>
                <div className={styles.holidayItem}>
                  <div className={styles.holidayDate}>
                    <span className={styles.holidayMonth}>JUN</span>
                    <span className={styles.holidayDay}>17</span>
                  </div>
                  <div className={styles.holidayDetails}>
                    <span className={styles.holidayName}>New Day</span>
                    <span className={styles.holidayWeekday}>Wednesday</span>
                  </div>
                </div>
                
                <div className={styles.holidayItem}>
                  <div className={styles.holidayDate}>
                    <span className={styles.holidayMonth}>AUG</span>
                    <span className={styles.holidayDay}>15</span>
                  </div>
                  <div className={styles.holidayDetails}>
                    <span className={styles.holidayName}>Independence Day</span>
                    <span className={styles.holidayWeekday}>Saturday</span>
                  </div>
                </div>
                
                <div className={styles.holidayItem}>
                  <div className={styles.holidayDate}>
                    <span className={styles.holidayMonth}>AUG</span>
                    <span className={styles.holidayDay}>28</span>
                  </div>
                  <div className={styles.holidayDetails}>
                    <span className={styles.holidayName}>Raksha Bandhan</span>
                    <span className={styles.holidayWeekday}>Friday</span>
                  </div>
                </div>
                
                <div className={styles.holidayItem}>
                  <div className={styles.holidayDate}>
                    <span className={styles.holidayMonth}>OCT</span>
                    <span className={styles.holidayDay}>02</span>
                  </div>
                  <div className={styles.holidayDetails}>
                    <span className={styles.holidayName}>Gandhi Jayanti</span>
                    <span className={styles.holidayWeekday}>Friday</span>
                  </div>
                </div>
              </div>
            </section>
            
          </div>
        </div>
      </main>
    </div>
  );
}
