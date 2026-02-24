'use client';

import { useRef } from 'react';
import Link from 'next/link';
import styles from './ProjectsHighlight.module.css';

const projects = [
    {
        id: 'gotas-ecocity-idu-gousa',
        title: 'Gotas Ecocity IDU. Gousa',
        description: 'A harmonious blend of nature and modern living with state-of-the-art facilities.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        link: '/properties/gotas-ecocity-idu-gousa'
    },
    {
        id: 'kingsland-idu-gousa',
        title: 'Kingsland IDU/Gousa',
        description: 'Premium luxury estates designed for the elite, offering unmatched comfort and security.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        link: '/properties/kingsland-idu-gousa'
    },
    {
        id: 'kings-garden-estate-kabusa',
        title: 'Kings Garden Estate Kabusa',
        description: 'Your tranquil getaway within the city, featuring serene landscapes and exquisite architecture.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1153&q=80',
        link: '/properties/kings-garden-estate-kabusa'
    },
    {
        id: 'the-aurora-by-gotas',
        title: 'The Aurora By Gotas',
        description: 'A perfected blend of luxury, convenience, nature and smart living on a slim budget.',
        image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        link: '/properties/the-aurora-by-gotas'
    }
];

export default function ProjectsHighlight() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -380 : 380;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="projects" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.headerTop}>
                    <div className={styles.header}>
                        <p className={styles.tagline}>Our Properties</p>
                        <h2 className={styles.heading}>Projects Highlight</h2>
                    </div>
                    <div className={styles.scrollControls}>
                        <button className={styles.scrollBtn} onClick={() => scroll('left')} aria-label="Scroll left">←</button>
                        <button className={styles.scrollBtn} onClick={() => scroll('right')} aria-label="Scroll right">→</button>
                    </div>
                </div>

                <div className={styles.carouselContainer} ref={scrollRef}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.card}>
                            <div className={styles.imageOverlay}></div>
                            <div className={styles.imageWrapper} style={{ backgroundImage: `url(${project.image})` }}>
                            </div>
                            <div className={styles.content}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <Link href={project.link} className={styles.linkBtn}>
                                    View Project
                                    <span className={styles.arrow}>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.downloadSection}>
                    <a href="#" className={styles.downloadBtn}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.downloadIcon}>
                            <path d="M12 15L8 11H11V3H13V11H16L12 15Z" fill="currentColor" />
                            <path d="M4 19H20V17H4V19Z" fill="currentColor" />
                        </svg>
                        Download Application Form
                    </a>
                </div>
            </div>
        </section>
    );
}
