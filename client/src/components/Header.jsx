import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Header() {
    return (
        <aside className="h-full py-20 pl-80 pr-10 flex flex-col justify-between bg-[#0a192f]">
            {/* Nombre */}
            <div>
                <h1 className="text-[2.4rem] font-extrabold text-[#64ffda] mb-1 tracking-tight">
                    David González
                </h1>
                <h2 className="text-lg text-gray-300 mb-4 font-medium">
                    Fullstack Developer
                </h2>
                <p className="text-[1rem] text-gray-400 leading-relaxed max-w-xs">
                    Creo experiencias web atractivas y funcionales, fusionando
                    desarrollo y diseño para contar historias con impacto.
                </p>
            </div>

            {/* Navegación */}
            <nav className="flex flex-col gap-5 mt-20 text-base font-medium text-gray-400">
                {['about', 'formacion', 'contact'].map((section) => (
                    <Link
                        key={section}
                        to={section} // ← este era el error, ahora usa la variable section
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

            {/* Imagen */}
            <div className="flex justify-center mt-15 mb-10">
                <img
                    src="/profile-image.jpg"
                    alt="Foto de David"
                    className="w-65 h-65 object-cover rounded-full border-4 border-[#64ffda] shadow-lg"
                />
            </div>

            {/* Redes sociales */}
            <div className="flex gap-5 text-xl text-gray-400 mt-auto">
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
        </aside>
    );
}

export default Header;
