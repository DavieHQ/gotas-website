import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export const metadata = {
    title: 'Gotas Diamond Global Limited - Real Estate',
    description: 'Premium residential and commercial real estate solutions in Abuja. Your Trust, Our Diamond.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    );
}
