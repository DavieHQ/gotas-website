import styles from './ContactPage.module.css';

export const metadata = {
    title: 'Contact Us | Gotas Diamond Global Limited',
    description: 'Get in touch with Gotas Diamond for your real estate and property investment needs.',
};

export default function ContactPage() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.title}>Contact Us</h1>
                    <p className={styles.subtitle}>
                        We’re here to help you secure the ideal property. Whether you have questions or want to book an inspection, reach out today!
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={`container ${styles.gridContainer}`}>

                    {/* Contact Information & Map */}
                    <div className={styles.infoBox}>
                        <h2 className={styles.sectionHeading}>Get In Touch</h2>
                        <p className={styles.sectionDesc}>
                            Our expert team is ready to provide you with all the information you need.
                            Visit us or call to schedule a private tour.
                        </p>

                        <div className={styles.contactDetails}>
                            <div className={styles.detailItem}>
                                <div className={styles.iconWrapper}>📍</div>
                                <div className={styles.textContent}>
                                    <h4>Office Address</h4>
                                    <a href="https://maps.app.goo.gl/uhmbf3jS52k74qb4A" target="_blank" rel="noopener noreferrer">
                                        NO 5 Yaounde Street, Wuse Zone 6, Abuja.
                                    </a>
                                </div>
                            </div>

                            <div className={styles.detailItem}>
                                <div className={styles.iconWrapper}>📞</div>
                                <div className={styles.textContent}>
                                    <h4>Phone Numbers</h4>
                                    <a href="tel:+2347031021073">+234 703 102 1073</a>
                                    <a href="tel:+2348187365047">+234 818 736 5047</a>
                                    <a href="tel:+2348081137063">+234 808 113 7063</a>
                                </div>
                            </div>

                            <div className={styles.detailItem}>
                                <div className={styles.iconWrapper}>✉️</div>
                                <div className={styles.textContent}>
                                    <h4>Email Address</h4>
                                    <a href="mailto:info@gotasdiamond.com">info@gotasdiamond.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className={styles.mapContainer}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15759.206232594614!2d7.447541604085429!3d9.082006705574345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0af000000001%3A0x88decf826b5d98ec!2s5%20Yaounde%20St%2C%20Wuse%20Zone%206%20904101%2C%20Abuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1714500000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Gotas Diamond Map Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className={styles.formBox}>
                        <div className={styles.formHeader}>
                            <h2>Book an Inspection</h2>
                            <p>Schedule a guided tour of our estates with our real estate professionals.</p>
                        </div>
                        <form className={styles.contactForm}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" placeholder="Enter your full name" required />
                            </div>

                            <div className={styles.inputRow}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" placeholder="Enter phone number" required />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="property">Interested In</label>
                                <select id="property" required defaultValue="">
                                    <option value="" disabled>Select a property...</option>
                                    <option value="gotas-ecocity-idu-gousa">Gotas Ecocity IDU. Gousa</option>
                                    <option value="kingsland-idu-gousa">Kingsland IDU/Gousa</option>
                                    <option value="kings-garden-estate-kabusa">Kings Garden Estate Kabusa</option>
                                    <option value="the-aurora-by-gotas">The Aurora By Gotas</option>
                                    <option value="general-inquiry">General Inquiry</option>
                                </select>
                            </div>

                            <div className={styles.inputRow}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="date">Inspection Date</label>
                                    <input type="date" id="date" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="time">Preferred Time</label>
                                    <input type="time" id="time" required />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Additional Message (Optional)</label>
                                <textarea id="message" rows={4} placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="button" className={styles.submitBtn}>
                                Submit Booking Request
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </main>
    );
}
