import { useState } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import AlienProfileSection from './components/AlienProfileSection';
import CursorSpotlight from './components/CursorSpotlight';
import { Toaster } from 'react-hot-toast';

function App() {
    const [alienMode, setAlienMode] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-[#0a192f] text-gray-300">
            {/* Columna izquierda: header */}
            <div className="w-[35%] hidden lg:block">
                <Header />
            </div>

            {/* Columna derecha: contenido */}
            <main
                id="content"
                className="flex-1 overflow-y-auto scroll-smooth px-10 lg:px-24"
            >
                {!alienMode ? (
                    <>
                        <Toaster />
                        <AboutSection setAlienMode={setAlienMode} />
                        <EducationSection />
                        <ContactSection />
                    </>
                ) : (
                    <AlienProfileSection />
                )}
            </main>
            <CursorSpotlight />
        </div>
    );
}

export default App;
