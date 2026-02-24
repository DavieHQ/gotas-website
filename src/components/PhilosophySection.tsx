'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './PhilosophySection.module.css';

export default function PhilosophySection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const text = "We prioritize integrity, dedication, creativity, and excellence in what we do. We are trusted and efficient; we give the best as it suits the preferential needs of our prospects.";
    const words = text.split(" ");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -10% 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className="container">
                <h2 className={`${styles.text} ${isVisible ? styles.revealed : ''}`}>
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className={styles.word}
                            style={{ transitionDelay: `${index * 0.04}s` }}
                        >
                            {word}&nbsp;
                        </span>
                    ))}
                </h2>
            </div>
        </section>
    );
}
