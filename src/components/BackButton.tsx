'use client';

import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css';

export default function BackButton({ className = '' }: { className?: string }) {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className={`${styles.backBtn} ${className}`}
            aria-label="Go back"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Back</span>
        </button>
    );
}
