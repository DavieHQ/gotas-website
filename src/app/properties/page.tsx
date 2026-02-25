import Link from 'next/link';
import styles from './PropertiesPage.module.css';

const projects = [
    {
        id: 'gotas-ecocity-idu-gousa',
        title: 'N16,000,000',
        subtitle: 'Ecocity. Kabusa. Kuje.',
        badge: '5 BEDROOMS PENTHOUSE',
        beds: '5 Beds',
        baths: '6 Baths',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        link: '/properties/gotas-ecocity-idu-gousa',
        description: 'Available in all our estates It Features:4 bedrooms, 4 bath/5 Toilets,1 Kitchen, 1 Balcony, 1 Floor, Parking space, 24hrs Security, Retriculated water supply, N16M For Land. This property includes modern appliances and hardwood flooring.'
    },
    {
        id: 'kingsland-idu-gousa',
        title: 'N12,000,000',
        subtitle: 'Ecocity Idu. Gousa. Kabusa. Kuje.',
        badge: '5 BEDROOMS SMD DUPLEX',
        beds: '5 Beds',
        baths: '6 Baths',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        link: '/properties/kingsland-idu-gousa',
        description: 'Premium luxury estates designed for the elite, offering unmatched comfort and security. This property includes modern appliances and a spacious open floor plan.'
    },
    {
        id: 'kings-garden-estate-kabusa',
        title: 'N16,000,000',
        subtitle: 'Gotas Ecocity Idu. Gousa. Kabusa',
        badge: '5 BEDROOMS D-DUPLEX',
        beds: '5 Beds',
        baths: '6 Baths',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1153&q=80',
        link: '/properties/kings-garden-estate-kabusa',
        description: 'Your tranquil getaway within the city, featuring serene landscapes and exquisite architecture.'
    },
    {
        id: 'the-aurora-by-gotas',
        title: 'N8,000,000',
        subtitle: 'Gotas, Ecocity Idu, Gousa, Kabusa, Kuje.',
        badge: '4 BEDROOMS TERRACE DUPLEX',
        beds: '4 Beds',
        baths: '4 Baths',
        image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        link: '/properties/the-aurora-by-gotas',
        description: 'The Aurora is a perfected blend of luxury, convenience, nature and smart living all on a slim budget.'
    }
];

export default function PropertiesPage() {
    return (
        <main className={styles.main}>
            {/* Header / Hero for Properties Page */}
            <div className={styles.pageHero}>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.title}>Our Exclusive Properties</h1>
                    <p className={styles.subtitle}>Discover our luxury estates designed to blend smart living with nature across prime locations in Abuja.</p>
                </div>
            </div>

            {/* Properties List */}
            <div className={`container ${styles.propertiesList}`}>
                {projects.map((project, index) => (
                    <div key={project.id} className={`${styles.propertyCard} ${index % 2 !== 0 ? styles.reverseRow : ''}`}>
                        <div className={styles.imageColumn}>
                            <div className={styles.imageWrapper} style={{ backgroundImage: `url(${project.image})` }}>
                                <span className={styles.statusBadge}>{project.badge}</span>
                            </div>
                        </div>
                        <div className={styles.contentColumn}>
                            <h2 className={styles.projectName}>{project.title}</h2>
                            <p className={styles.projectLocation}>{project.subtitle}</p>

                            <div className={styles.featuresList}>
                                <span>🛏️ {project.beds}</span>
                                <span>🛁 {project.baths}</span>
                            </div>

                            <p className={styles.projectDesc}>{project.description}</p>

                            <Link href={project.link} className={styles.detailsBtn}>
                                View Full Details
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.btnIcon}>
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
