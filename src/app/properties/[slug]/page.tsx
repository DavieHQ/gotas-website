import { notFound } from 'next/navigation';
import BackButton from '../../../components/BackButton';
import styles from './PropertyDetail.module.css';

const propertyData: Record<string, any> = {
    'gotas-ecocity-idu-gousa': {
        title: 'Gotas Ecocity IDU. Gousa',
        location: 'IDU Gousa, Abuja',
        price: 'Contact for Price',
        status: 'Selling Fast',
        overview: 'Gotas Ecocity in IDU Gousa presents a harmonious blend of nature and modern living. It is a smartly planned estate designed for those who appreciate tranquility without sacrificing city convenience. With state-of-the-art facilities and a strong community feel, this is perfect for families and investors.',
        features: ['Modern Infrastructure', '24/7 Security', 'Paved Roads', 'Recreational Parks', 'Stable Power Supply'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
        ]
    },
    'kingsland-idu-gousa': {
        title: 'Kingsland IDU/Gousa',
        location: 'IDU Gousa, Abuja',
        price: 'Premium Pricing',
        status: 'Available',
        overview: 'Step into luxury at Kingsland IDU/Gousa. These premium luxury estates are designed for the elite, offering unmatched comfort, high-end finishing, and robust security. Whether you are looking for a lavish suburban home or a high-yield investment, Kingsland delivers beyond expectations.',
        features: ['Luxury Finishing', 'Smart Home Integration', 'Clubhouse & Pool', 'Gated Community', 'Ample Parking'],
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        ]
    },
    'kings-garden-estate-kabusa': {
        title: 'Kings Garden Estate Kabusa',
        location: 'Kabusa, Abuja',
        price: 'Affordable Luxury',
        status: 'Now Selling',
        overview: 'Kings Garden Estate Kabusa is your tranquil getaway within the city. Featuring serene landscapes, exquisite architecture, and a peaceful environment, it is ideal for professionals and growing families. Enjoy a stress-free lifestyle with all essential amenities right at your doorstep.',
        features: ['Serene Environment', 'Good Road Network', 'Perimeter Fencing', 'Water Supply', 'Green Areas'],
        images: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1153&q=80',
            'https://images.unsplash.com/photo-1628131346777-1ad4ae6e053f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
        ]
    },
    'the-aurora-by-gotas': {
        title: 'The Aurora By Gotas (Gotas Pearl Residences)',
        location: 'Kuje, Abuja',
        price: 'Budget Luxury',
        status: 'Available',
        overview: 'The Aurora is a perfected blend of luxury, convenience, nature and smart living all on a slim budget. It enjoys a very prime location sited at the Sauka part of Kuje. It is boundaried by other estates including Double Kings and Fhemfels offerings in the Kuje area. It is also a Luxury Lifestyled Estate with Eco-themes. Upon completion, it promises to blend smart town living with nature giving an Eco-smart home experience that is next to none.',
        features: ['Smart Home Experience', 'Eco-Themed Surroundings', 'Prime Location', 'Affordable Plans', 'Secure Community'],
        images: [
            'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1613490900233-fe4172778619?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
        ]
    }
};

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const property = propertyData[slug];

    if (!property) {
        notFound();
    }

    return (
        <main className={styles.main}>
            <div className={styles.hero} style={{ backgroundImage: `url(${property.images[0]})` }}>
                <div className={styles.overlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.topActions}>
                        <BackButton />
                    </div>
                    <span className={styles.statusBadge}>{property.status}</span>
                    <h1 className={styles.title}>{property.title}</h1>
                    <p className={styles.location}>📍 {property.location}</p>
                </div>
            </div>

            <div className={`container ${styles.contentGrid}`}>
                <div className={styles.mainDetails}>
                    <section className={styles.section}>
                        <h2>Property Overview</h2>
                        <p className={styles.overviewText}>{property.overview}</p>
                    </section>

                    <section className={styles.section}>
                        <h2>Key Features & Amenities</h2>
                        <div className={styles.featuresList}>
                            {property.features.map((feature: string, idx: number) => (
                                <div key={idx} className={styles.featureItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Gallery</h2>
                        <div className={styles.gallery}>
                            {property.images.map((img: string, idx: number) => (
                                <div key={idx} className={styles.galleryImg} style={{ backgroundImage: `url(${img})` }}></div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.bookingCard}>
                        <h3>Interested in this property?</h3>
                        <p className={styles.price}>{property.price}</p>
                        <p className={styles.bookingText}>Book an inspection to experience it firsthand. Our agents are ready to assist you.</p>
                        <a href="tel:+2348187365047" className={styles.primaryBtn}>Call an Agent</a>
                        <a href="mailto:info@gotasdiamond.com" className={styles.secondaryBtn}>Send an Email</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
