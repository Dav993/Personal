import { useState } from 'react';
import Header from './components/Header';
import RealProfileSection from './components/RealProfileSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import AlienProfileSection from './components/AlienProfileSection';

function App() {
    const [alienMode, setAlienMode] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-[#0a192f] text-gray-300">
            {/* Columna izquierda: header */}
            <div className="w-[35%] hidden lg:block">
                <Header />
            </div>

            {/* Columna derecha: contenido */}
            <main className="flex-1 overflow-y-auto scroll-smooth px-10 lg:px-24">
                {!alienMode ? (
                    <>
                        <RealProfileSection />
                        <AboutSection setAlienMode={setAlienMode} />
                        <PortfolioSection />
                        <ContactSection />
                    </>
                ) : (
                    <AlienProfileSection />
                )}
            </main>
        </div>
    );
}

export default App;
