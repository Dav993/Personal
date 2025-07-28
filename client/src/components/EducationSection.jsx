function EducationSection() {
    return (
        <section
            id="formacion"
            className="bg-[#0a192f] text-gray-300 px-5 sm:px-6 pt-20 pb-24 lg:pt-1 min-h-screen"
        >
            <div className="max-w-2xl mx-auto space-y-12">
                {/* EDUCACIÓN - ITEMS */}
                {[
                    {
                        fecha: '2024–2025',
                        centro: 'Hack a boss',
                        titulo: 'PROGRAMACIÓN WEB',
                    },
                    {
                        fecha: '2024',
                        centro: 'MK4T',
                        titulo: 'DISEÑO DE PÁGINAS WEB PARA HOSTELERÍA (100 horas)',
                    },
                    {
                        fecha: '2024',
                        centro: 'Smartmind',
                        titulo: 'BIG DATA (40 horas)',
                    },
                    {
                        fecha: '2023',
                        centro: 'CEI - Centro de Estudios e Innovación',
                        titulo: 'INTELIGENCIA ARTIFICIAL: HERRAMIENTAS PARA DISEÑO Y CREADORES',
                    },
                    {
                        fecha: '2015–2019',
                        centro: 'Universidad Camilo José Cela',
                        titulo: 'GRADO EN COMUNICACIÓN AUDIOVISUAL',
                    },
                    {
                        fecha: '2013–2015',
                        centro: 'CES, Escuela Superior de Imagen y Sonido',
                        titulo: 'GRADO SUPERIOR EN REALIZACIÓN DE EVENTOS AUDIOVISUALES Y ESPECTÁCULOS',
                    },
                    {
                        fecha: '2011–2012',
                        centro: 'CES, Escuela Superior de Imagen y Sonido',
                        titulo: 'GRADO MEDIO EN TÉCNICO DE LABORATORIO DE IMAGEN',
                    },
                ].map((edu, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6"
                    >
                        <div className="w-full sm:w-1/2 text-sm sm:text-base text-gray-400">
                            <p className="text-[#64ffda] font-semibold">
                                {edu.fecha}
                            </p>
                            <p>{edu.centro}</p>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <h3 className="font-bold text-white">
                                {edu.titulo}
                            </h3>
                        </div>
                    </div>
                ))}

                {/* Enlace al CV */}
                <div className="pt-10 text-center sm:text-left">
                    <a
                        href="/curriculum2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-white hover:text-[#64ffda] transition"
                    >
                        Ver Currículum completo
                        <span className="text-[#64ffda]">↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default EducationSection;
