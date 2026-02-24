'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './VideoShowcase.module.css';

function CountUpStat({ endValue, suffix, label }: { endValue: number, suffix: string, label: string }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easeOutQuart * endValue));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [endValue, isVisible]);

    return (
        <div ref={ref} className={styles.statBox}>
            <span className={styles.statNumber}>{count}{suffix}</span>
            <span className={styles.statLabel}>{label}</span>
        </div>
    );
}

export default function VideoShowcase() {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Experience the Extraordinary</h2>
                    <p className={styles.description}>
                        Take a cinematic tour of our flagship properties and discover what makes Gotas Diamond the premier choice for luxury real estate in Abuja.
                    </p>
                </div>

                <div className={styles.videoWrapper}>
                    <div className={styles.videoPlaceholder}>
                        <div className={styles.playButton}>
                            <div className={styles.playIcon}></div>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <h3>Gotas Ecocity IDU Gousa</h3>
                        <p>A masterpiece of modern suburban living</p>
                    </div>
                </div>

                <div className={styles.statsGrid}>
                    <CountUpStat endValue={10} suffix="+" label="Years Experience" />
                    <CountUpStat endValue={500} suffix="+" label="Happy Clients" />
                    <CountUpStat endValue={50} suffix="+" label="Real Estate Experts" />
                </div>
            </div>
        </section>
    );
}
