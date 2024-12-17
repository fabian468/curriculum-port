import PropTypes from "prop-types";

function CardTecnologias({ icon, title, description }) {
    return (
        <article className="bg-gray-800 p-6 w-40 h-48 rounded-lg shadow-md flex flex-col justify-between items-center hover:scale-105 transition-transform">
            <div className="text-white flex items-center justify-center text-4xl">{icon}</div>            <h3 className="text-white text-xl font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm text-center">{description}</p>
        </article>
    )
}

CardTecnologias.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};

CardTecnologias.defaultProps = {
    description: "Tecnología", // Valor por defecto para la descripción
};

export default CardTecnologias



