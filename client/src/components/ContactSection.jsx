import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';

function ContactSection() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_64yb17r',
                'template_gkfth5r',
                form.current,
                'EvrlXj9merDWyDP7t'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success(
                        'Mensaje enviado con éxito. ¡Te responderé pronto!'
                    );
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    toast.error('Hubo un error al enviar el mensaje');
                }
            );
    };

    return (
        <section
            id="contact"
            className="bg-[#0a192f] text-gray-300 px-6 py-20 ml-23 -mt-20"
        >
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-medium mb-10 text-gray-200 text-center sm:text-left">
                    ¿Tienes algún proyecto en mente? <br />
                    <span className="text-base sm:text-lg font-normal">
                        Cuéntamelo y me pondré en contacto contigo.
                    </span>
                </h2>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-6"
                >
                    <input
                        name="name"
                        type="text"
                        placeholder="Tu nombre"
                        className="bg-[#112240] text-white p-4 rounded-md outline-none focus:ring-2 focus:ring-[#64ffda] placeholder-gray-400"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Tu correo electrónico"
                        className="bg-[#112240] text-white p-4 rounded-md outline-none focus:ring-2 focus:ring-[#64ffda] placeholder-gray-400"
                    />
                    <textarea
                        name="message"
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
