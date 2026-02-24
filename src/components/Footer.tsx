import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.brand}>
                    <h2>Gotas Diamond</h2>
                    <p>Your Trust, Our Diamond. Premium residential and commercial real estate solutions.</p>
                </div>

                <div className={styles.linksBlock}>
                    <h3>Quick Links</h3>
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/properties">Properties</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                <div className={styles.contactBlock}>
                    <h3>Contact Us</h3>
                    <p>NO 5 Yaounde Street, Wuse Zone 6, Abuja</p>
                    <a href="tel:+2347031021073">+234-7031021073</a>
                    <a href="tel:+2348187365047">+234-8187365047</a>
                    <a href="tel:+2348081137063">+234-8081137063</a>
                    <a href="mailto:info@gotasdiamond.com">info@gotasdiamond.com</a>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <p>© {new Date().getFullYear()} Gotas Diamond Global Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
