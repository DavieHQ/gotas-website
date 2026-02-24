import Image from 'next/image';
import styles from './AboutPage.module.css';

export const metadata = {
    title: 'About Us | Gotas Diamond Global Limited',
    description: 'Learn about Gotas Diamond, a premier real estate development company in Abuja.',
};

export default function AboutPage() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>REAL ESTATE CONSTRUCTION | DEVELOPMENT | INVESTMENT</span>
                    <h1 className={styles.title}>Architecting Abuja's Future</h1>
                    <p className={styles.subtitle}>
                        Welcome to Gotas Diamond, where vision meets reality in the heart of Nigeria's thriving real estate landscape.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className={styles.storySection}>
                <div className={`container ${styles.storyContainer}`}>
                    <div className={styles.textContent}>
                        <h2 className={styles.sectionHeading}>Our Journey</h2>
                        <p className={styles.paragraph}>
                            It began in 2019 in the vibrant city of Abuja, when our founder, <strong>Justine Eleshi</strong>, identified a critical gap in the market: accessible, high-quality housing and land ownership for middle-income Nigerians. Starting with a modest portfolio of 91 serviced plots in the Gousa district, Gotas Diamond quickly earned a reputation for transparency and timely delivery—completing its first estate, Gotas Ecocity Estate, ahead of schedule.
                        </p>
                        <blockquote className={styles.quoteBlock}>
                            "Every Nigerian deserves a place to call home—not just a house, but a foundation for generational wealth. That’s the promise I made in 2019, and the mission we live by every day."
                            <footer>— Justine Andor Eleshi, Founder & CEO</footer>
                        </blockquote>
                        <p className={styles.paragraph}>
                            By 2025, we expanded to other elite areas including Kings Gardens Kabusa, Kingsland Estate Idu, Gotas EcoVillas Katampe Extension, Gotas Salem City Estate Lugbe, Gotas Pearl Residences Kuje, and Sapphire Heights Maitama 2. With our innovative flexible payment plans introduced in 2020, we have empowered over <strong>5,000 satisfied homeowners</strong> and investors.
                        </p>
                    </div>
                    <div className={styles.imageContent}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.floatingStats}>
                                <div><span className={styles.number}>5k+</span><span className={styles.label}>Homeowners</span></div>
                                <div className={styles.divider}></div>
                                <div><span className={styles.number}>100%</span><span className={styles.label}>Verified Titles</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values / Solutions */}
            <section className={styles.solutionsSection}>
                <div className={`container`}>
                    <div className={styles.solutionsHeader}>
                        <h2 className={styles.sectionHeading}>Primary Solutions</h2>
                        <p className={styles.sectionSubheading}>
                            We deliver tailored solutions that blend modern design, sustainability, and unmatched quality to craft legacies, one diamond at a time.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.gridCard}>
                            <div className={styles.iconBox}>🏗️</div>
                            <h3>Construction</h3>
                            <p>Uncompromising integrity and luxury finishing for residential houses tailored to your perfection.</p>
                        </div>
                        <div className={styles.gridCard}>
                            <div className={styles.iconBox}>🏙️</div>
                            <h3>Urban Development</h3>
                            <p>Leading the sustainable green-living movement in Eco-city Idu and beyond.</p>
                        </div>
                        <div className={styles.gridCard}>
                            <div className={styles.iconBox}>📈</div>
                            <h3>Property Investment</h3>
                            <p>Strategic land banking and property management with a high ROI focus for our subscribers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visionary Quotes Split */}
            <section className={styles.quotesSection}>
                <div className={styles.quoteOverlay}></div>
                <div className={`container ${styles.quotesContainer}`}>
                    <h2 className={styles.quoteText}>"Real estate isn’t about bricks and mortar; it’s about trust, timing, and transformation. We don’t sell plots—we secure futures."</h2>
                </div>
            </section>

            {/* Leadership Section */}
            <section className={styles.leadershipSection}>
                <div className="container">
                    <h2 className={`${styles.sectionHeading} ${styles.textCenter}`}>Our Leadership</h2>
                    <div className={styles.leadershipGrid}>
                        <div className={styles.leaderCard}>
                            <div className={styles.leaderAvatar} style={{ backgroundImage: "url('/images/leadership/justine-eleshi.png')" }}></div>
                            <h3 className={styles.leaderName}>Dr. Justine Eleshi</h3>
                            <p className={styles.leaderTitle}>Chief Executive Officer</p>
                            <p className={styles.leaderBio}>Head of Strategic Investment leading the Vision 2030 initiatives, focusing on securing futures and sustainable expansion.</p>
                        </div>
                        <div className={styles.leaderCard}>
                            <div className={styles.leaderAvatar} style={{ backgroundImage: "url('/images/leadership/peter-ibeneme.jpg')" }}></div>
                            <h3 className={styles.leaderName}>Mr. Peter Chukwu Ibeneme</h3>
                            <p className={styles.leaderTitle}>Chief Financial Officer</p>
                            <p className={styles.leaderBio}>As a finance expert, Mr. Ibeneme navigates the complexities of Nigeria's real estate industry through innovative financing and risk management.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
