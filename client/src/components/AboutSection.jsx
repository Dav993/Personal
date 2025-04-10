import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function AboutSection({ setAlienMode }) {
    const [showCharacter, setShowCharacter] = useState(false);
    const [showSpeech, setShowSpeech] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.6, // activa cuando el 60% de la sección está visible
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            setShowCharacter(true);

            const timer = setTimeout(() => {
                setShowSpeech(true);
            }, 3000); // aparece el bocadillo tras caminar

            return () => clearTimeout(timer);
        }
    }, [inView]);

    return (
        <section
            ref={ref}
            id="about"
            className="bg-[#0a192f] text-gray-300 px-6 py-20 relative overflow-hidden min-h-screen"
        >
            <div className="max-w-4xl mx-auto text-center sm:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#64ffda]">
                    Sobre mí
                </h2>
                <p className="text-lg leading-relaxed">
                    Me formé en comunicación audiovisual, lo que me ha permitido
                    tener una visión creativa y crítica sobre los medios
                    digitales. Con el tiempo, me especialicé en desarrollo web
                    fullstack, combinando mi pasión por el diseño con
                    habilidades técnicas para construir proyectos sólidos y
                    visualmente interesantes.
                </p>
            </div>

            {/* Personaje caminando */}
            {showCharacter && (
                <div
                    className="absolute bottom-6 right-0 animate-walk-left px-4"
                    style={{ animation: 'walk-left 3s linear forwards' }}
                >
                    <img
                        src="/pixel-hero.png"
                        alt="Personaje pixelado"
                        className="w-24"
                    />

                    {showSpeech && (
                        <div className="mt-2 bg-white text-black px-3 py-2 rounded shadow max-w-xs">
                            <p className="text-sm mb-2">
                                He encontrado unas gafas muy raras... ¿Quieres
                                probarlas?
                            </p>
                            <button
                                onClick={() => setAlienMode(true)}
                                className="bg-[#64ffda] text-[#0a192f] px-3 py-1 rounded font-bold text-sm hover:bg-[#52e0c4] transition"
                            >
                                Ponérmelas 🕶️
                            </button>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}

export default AboutSection;
