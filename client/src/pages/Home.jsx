import RealProfileSection from '../components/RealProfileSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';

function Home() {
    return (
        <main className="flex-1">
            <RealProfileSection />
            <AboutSection />
            <PortfolioSection />
            <ContactSection />
        </main>
    );
}

export default Home;
