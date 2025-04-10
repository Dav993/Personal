function ContactSection() {
    return (
        <section id="contact" className="bg-[#0a192f] text-gray-300 px-6 py-20">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#64ffda] text-center sm:text-left">
                    Contacto
                </h2>

                <form className="flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        className="bg-[#112240] text-white p-4 rounded-md outline-none focus:ring-2 focus:ring-[#64ffda] placeholder-gray-400"
                    />
                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        className="bg-[#112240] text-white p-4 rounded-md outline-none focus:ring-2 focus:ring-[#64ffda] placeholder-gray-400"
                    />
                    <textarea
                        rows="5"
                        placeholder="Tu mensaje"
                        className="bg-[#112240] text-white p-4 rounded-md outline-none focus:ring-2 focus:ring-[#64ffda] placeholder-gray-400"
                    />

                    <button
                        type="submit"
                        className="bg-[#64ffda] text-[#0a192f] font-semibold py-3 rounded-md hover:bg-[#52e0c4] transition-colors"
                    >
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
