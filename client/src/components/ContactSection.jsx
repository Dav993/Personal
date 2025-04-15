import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';

function ContactSection() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const name = form.current.name.value.trim();
        const email = form.current.email.value.trim();
        const message = form.current.message.value.trim();

        // Validación de campos vacíos
        if (!name || !email || !message) {
            toast.error('Por favor, rellena todos los campos antes de enviar.');
            return;
        }

        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Por favor, introduce una dirección de correo válida.');
            return;
        }

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
            className="bg-[#0a192f] text-gray-300 px-5 sm:px-6 pt-1 pb-24"
        >
            <div className="max-w-2xl mx-auto">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-10 text-center sm:text-left text-gray-200">
                    ¿Tienes algún proyecto en mente? <br />
                    <span className="text-sm sm:text-base lg:text-lg font-normal">
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
                        required
                        className="bg-[#112240] text-white p-4 rounded-md outline-none focus:ring-2 focus:ring-[#64ffda] placeholder-gray-400 text-sm sm:text-base"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Tu correo electrónico"
                        required
                        className="bg-[#112240] text-white p-4 rounded-md outline-none focus:ring-2 focus:ring-[#64ffda] placeholder-gray-400 text-sm sm:text-base"
                    />
                    <textarea
                        name="message"
                        placeholder="Tu mensaje"
                        required
                        maxLength={1000}
                        rows={5}
                        className="bg-[#112240] text-white p-4 rounded-md outline-none focus:ring-2 focus:ring-[#64ffda] placeholder-gray-400 text-sm sm:text-base resize-none overflow-auto"
                        style={{ overflowWrap: 'break-word' }}
                    />
                    <button
                        type="submit"
                        className="bg-[#64ffda] text-[#0a192f] font-semibold py-3 rounded-md hover:bg-[#52e0c4] transition-colors text-sm sm:text-base"
                    >
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
