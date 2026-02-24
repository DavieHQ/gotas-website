'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = glassmorphismState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.nav}`}>
                <Link href="/" className={styles.logo}>
                    Gotas Diamond
                </Link>
                {/* The original div.links is replaced by the ul.navList */}
                <ul className={styles.navList}>
                    <li><Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link></li>
                    <li><Link href="/about" className={pathname === '/about' ? styles.active : ''}>About</Link></li>
                    <li><Link href="/properties" className={pathname.startsWith('/properties') ? styles.active : ''}>Properties</Link></li>
                    <li><Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>Contact</Link></li>
                </ul>
                <div className={styles.actions}>
                    <Link href="/contact" className={styles.cta}>Book Inspection</Link>
                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
}

// polyfill
function glassmorphismState(initial: boolean) {
    return useState(initial);
}
