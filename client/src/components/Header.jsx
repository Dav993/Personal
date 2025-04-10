import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

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

                <p className="text-[1 rem] text-gray-400 leading-relaxed max-w-xs">
                    Creo experiencias web atractivas y funcionales, fusionando
                    desarrollo y diseño para contar historias con impacto.
                </p>
            </div>

            {/* Navegación vertical */}
            <nav className="flex flex-col gap-5 mt-20 text-base text-gray-400 font-medium">
                <Link
                    to="about"
                    smooth
                    duration={500}
                    className="cursor-pointer hover:text-[#64ffda]"
                >
                    Sobre mí
                </Link>
                <Link
                    to="portfolio"
                    smooth
                    duration={500}
                    className="cursor-pointer hover:text-[#64ffda]"
                >
                    Portafolio
                </Link>
                <Link
                    to="contact"
                    smooth
                    duration={500}
                    className="cursor-pointer hover:text-[#64ffda]"
                >
                    Contacto
                </Link>
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
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#64ffda]"
                >
                    <FiGithub />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#64ffda]"
                >
                    <FiLinkedin />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#64ffda]"
                >
                    <FiInstagram />
                </a>
                <a
                    href="mailto:tucorreo@ejemplo.com"
                    className="hover:text-[#64ffda]"
                >
                    <FiMail />
                </a>
            </div>
        </aside>
    );
}

export default Header;
