import { useForm } from "react-hook-form";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Datos enviados:", data);
        alert("¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.");
    };

    return (
        <section id="contacto" className="py-10">
            <div className="max-w-4xl mx-auto px-4 m-16">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-50">
                    Contáctame
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white shadow-md rounded-lg p-6 space-y-4"
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
                            className={`mt-1 block w-full p-2 border rounded-md ${errors.message ? "border-red-500" : "border-gray-300"
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
