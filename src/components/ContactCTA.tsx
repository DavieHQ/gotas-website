import styles from './ContactCTA.module.css';

export default function ContactCTA() {
    return (
        <section id="contact" className={styles.section}>
            <div className={`container`}>
                <div className={styles.header}>
                    <p className={styles.tagline}>Reach Out</p>
                    <h2 className={styles.heading}>Get In Touch</h2>
                    <p className={styles.description}>
                        We are here to assist you. Feel free to reach out to us via any of the platforms below. We usually respond ASAP.
                    </p>
                </div>

                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>📞</span>
                        </div>
                        <h3>Click to call</h3>
                        <a href="tel:+2348187365047">+234-8187365047</a>
                        <a href="tel:+2348081137063">+234-8081137063</a>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>✉️</span>
                        </div>
                        <h3>Click to send email</h3>
                        <a href="mailto:info@gotasdiamond.com">info@gotasdiamond.com</a>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>📍</span>
                        </div>
                        <h3>Visit Us</h3>
                        <a href="https://maps.app.goo.gl/uhmbf3jS52k74qb4A" target="_blank" rel="noopener noreferrer">
                            NO 5 Yaounde Street,<br />Wuse Zone 6, Abuja.
                        </a>
                    </div>
                </div>

                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15759.206232594614!2d7.447541604085429!3d9.082006705574345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0af000000001%3A0x88decf826b5d98ec!2s5%20Yaounde%20St%2C%20Wuse%20Zone%206%20904101%2C%20Abuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1714500000000!5m2!1sen!2sus"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Gotas Diamond Map Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
