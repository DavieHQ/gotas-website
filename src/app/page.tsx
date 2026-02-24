import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import VideoShowcase from '../components/VideoShowcase';
import ProjectsHighlight from '../components/ProjectsHighlight';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <PhilosophySection />
            <VideoShowcase />
            <ProjectsHighlight />
            <ContactCTA />
        </main>
    );
}
