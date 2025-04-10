function PortfolioSection() {
    return (
        <section
            id="portfolio"
            className="bg-[#0a192f] text-gray-300 px-6 py-20"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#64ffda] text-center sm:text-left">
                    Proyectos Destacados
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Proyecto 1 */}
                    <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform">
                        <h3 className="text-xl font-semibold text-[#64ffda] mb-2">
                            Proyecto Uno
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Descripción breve del proyecto. Qué resolvía, qué
                            usaste y qué aporta.
                        </p>
                        <a
                            href="#"
                            className="text-sm text-[#64ffda] underline hover:text-white transition-colors"
                        >
                            Ver proyecto →
                        </a>
                    </div>

                    {/* Proyecto 2 */}
                    <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform">
                        <h3 className="text-xl font-semibold text-[#64ffda] mb-2">
                            Proyecto Dos
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Un segundo proyecto interesante, con su propia
                            descripción y propósito.
                        </p>
                        <a
                            href="#"
                            className="text-sm text-[#64ffda] underline hover:text-white transition-colors"
                        >
                            Ver proyecto →
                        </a>
                    </div>

                    {/* Proyecto 3 */}
                    <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform">
                        <h3 className="text-xl font-semibold text-[#64ffda] mb-2">
                            Proyecto Tres
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Una última tarjeta como ejemplo. Puedes personalizar
                            o duplicar más.
                        </p>
                        <a
                            href="#"
                            className="text-sm text-[#64ffda] underline hover:text-white transition-colors"
                        >
                            Ver proyecto →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;
