import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Header() {
    return (
        <>
            {/* Header móvil */}
            <header className="flex md:hidden w-full flex-col items-center gap-2 pt-6 pb-4 bg-[#0a192f] text-white z-50">
                <span className="text-xl font-bold text-[#64ffda]">
                    David González
                </span>
                <img
                    src="/profile-image.jpg"
                    alt="Foto de David"
                    className="w-40 h-40 object-cover rounded-full border-4 border-[#64ffda] shadow-lg mt-2 mb-4"
                />
            </header>

            {/* Header tablet */}
            <header className="hidden md:flex lg:hidden w-full flex-col items-center gap-2 pt-8 pb-6 bg-[#0a192f] text-white z-50">
                <span className="text-2xl font-bold text-[#64ffda]">
                    David González
                </span>
                <img
                    src="/profile-image.jpg"
                    alt="Foto de David"
                    className="w-44 h-44 object-cover rounded-full border-4 border-[#64ffda] shadow-lg mt-3 mb-5"
                />
                <nav className="flex flex-col gap-4 text-base font-medium text-gray-400">
                    {['about', 'formacion', 'contact'].map((section) => (
                        <Link
                            key={section}
                            to={section}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            containerId="content"
                            className="text-white hover:text-[#64ffda] transition-colors"
                        >
                            {section === 'about'
                                ? 'Sobre mí'
                                : section === 'formacion'
                                  ? 'Formación'
                                  : 'Contacto'}
                        </Link>
                    ))}
                </nav>
                <div className="flex gap-5 text-xl text-gray-400 mt-4">
                    <a
                        href="https://github.com/Dav993"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#64ffda]"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/david-gonzález-cañaveras-695991120"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#64ffda]"
                    >
                        <FiLinkedin />
                    </a>
                    <a
                        href="mailto:glezdavid333@gmail.com"
                        className="hover:text-[#64ffda]"
                    >
                        <FiMail />
                    </a>
                </div>
            </header>
            <aside className="hidden lg:flex h-full pl-6 md:pl-10 lg:pl-24 2xl:pl-80 pr-6 py-12 flex-col justify-between bg-[#0a192f]">
                {/* Parte superior: Nombre y descripción */}
                <div>
                    <h1 className="text-[2.4rem] font-extrabold text-[#64ffda] mb-1 tracking-tight">
                        David González
                    </h1>
                    <h2 className="text-lg text-gray-300 mb-4 font-medium">
                        Fullstack Developer
                    </h2>
                    <p className="text-[1rem] text-gray-400 leading-relaxed max-w-xs">
                        Creo experiencias web atractivas y funcionales,
                        fusionando desarrollo y diseño para contar historias con
                        impacto.
                    </p>
                </div>

                {/* Parte central: Navegación */}
                <nav className="flex flex-col gap-5 text-base font-medium text-gray-400">
                    {['about', 'formacion', 'contact'].map((section) => (
                        <Link
                            key={section}
                            to={section}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-100}
                            containerId="content"
                            className="group relative pl-6 cursor-pointer opacity-50 hover:opacity-100 hover:text-[#64ffda] transition-all duration-300"
                        >
                            <span>
                                {section === 'about'
                                    ? 'Sobre mí'
                                    : section === 'formacion'
                                      ? 'Formación'
                                      : 'Contacto'}
                            </span>
                            <span
                                className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-3 bg-[#64ffda] 
                    scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 
                    transition-transform duration-300 origin-left"
                            ></span>
                        </Link>
                    ))}
                </nav>

                {/* Parte inferior: Imagen y redes */}
                <div className="flex flex-col items-center gap-6 mt-6">
                    <img
                        src="/profile-image.jpg"
                        alt="Foto de David"
                        className="w-56 h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 object-cover rounded-full border-4 border-[#64ffda] shadow-lg"
                    />
                    <div className="flex gap-5 text-xl text-gray-400">
                        <a
                            href="https://github.com/Dav993"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-[#64ffda]"
                        >
                            <FiGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/david-gonzález-cañaveras-695991120"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-[#64ffda]"
                        >
                            <FiLinkedin />
                        </a>
                        <a
                            href="mailto:glezdavid333@gmail.com"
                            className="hover:text-[#64ffda]"
                        >
                            <FiMail />
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Header;
