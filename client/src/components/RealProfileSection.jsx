function RealProfileSection() {
    return (
        <section className="bg-[#0a192f] text-gray-300 px-6 py-16 min-h-screen flex flex-col-reverse items-center gap-10 sm:flex-row sm:justify-between sm:items-center">
            {/* Texto */}
            <div className="sm:w-1/2 text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#64ffda]">
                    Hola, soy David
                </h1>
                <p className="text-lg leading-relaxed">
                    Soy desarrollador fullstack con background en comunicación
                    audiovisual. Me gusta crear experiencias web que sean
                    funcionales, visualmente atractivas y un poco… diferentes
                    👽.
                </p>
            </div>
        </section>
    );
}

export default RealProfileSection;
