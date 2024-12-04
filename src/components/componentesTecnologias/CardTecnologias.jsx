import PropTypes from "prop-types";

function CardTecnologias({ icon, title, description }) {
    return (
        <div className="bg-gray-800 p-6 w-40 h-48 rounded-lg shadow-md flex flex-col justify-between items-center hover:scale-105 transition-transform">
            <img src={icon} alt={title} className="w-16 h-16" />
            <h3 className="text-white text-xl font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm text-center">{description}</p>
        </div>
    )
}

CardTecnologias.propTypes = {
    icon: PropTypes.string.isRequired, // URL de la imagen (obligatorio)
    title: PropTypes.string.isRequired, // Título de la tecnología (obligatorio)
    description: PropTypes.string, // Descripción opcional de la tecnología
};

CardTecnologias.defaultProps = {
    description: "Tecnología", // Valor por defecto para la descripción
};

export default CardTecnologias



