import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { showSwal } from "./AlertEmail";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {

        const name = data.name
        const email = data.email
        const message = data.message

        emailjs
            .send(
                "service_1uquuvv",
                "template_ler82s9",
                {
                    user_name: name,
                    user_email: email,
                    message: message,
                },
                "XYJicd5hJVtlJZNC7"
            )
            .then(
                (result) => {
                    console.log("Correo enviado:", result.text);
                    showSwal(name)
                    reset()
                },
                (error) => {
                    console.error("Error al enviar el correo:", error.text);
                    alert("Hubo un error al enviar el correo.");
                }
            );
    };

    return (
        <section id="contacto" className="py-10">
            <div className="md:max-w-4xl mx-auto px-4 m-16">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-50">
                    Contáctame
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-gray-200 shadow-md rounded-lg p-6 space-y-4"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nombre
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...register("name", { required: "El nombre es obligatorio" })}
                            className={`mt-1 block w-full p-2 border rounded-md ${errors.name ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Tu nombre"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "El correo es obligatorio",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Correo no válido",
                                },
                            })}
                            className={`mt-1 block w-full p-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Tu correo"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            {...register("message", { required: "El mensaje es obligatorio" })}
                            rows="5"
                            className={`mt-1  resize-none block w-full p-2 border rounded-md ${errors.message ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Escribe tu mensaje"
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
