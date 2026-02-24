
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Your Trust, <span>Our Diamond.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Discover premium residential and commercial real estate solutions tailored for your lifestyle in Abuja.
                    </p>
                    <div className={styles.actions}>
                        <a href="#projects" className={styles.primaryBtn}>Explore Projects</a>
                        <a href="/contact" className={styles.secondaryBtn}>Book an Inspection</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
