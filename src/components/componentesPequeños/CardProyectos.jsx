import PropTypes from 'prop-types';

function CardProyectos({ tituloProyectos, imagen1, descripcion, tecnologia }) {
    return (
        <div className="w-3/12 h-4/5 flex flex-col justify-evenly bg-gray-200 rounded-xl shadow-md shadow-white font-serif">
            {/* Título */}
            <h2 className="text-center text-2xl font-bold mb-4">
                {tituloProyectos}
            </h2>

            {/* Imágenes */}
            <div className="flex justify-center mb-5">
                <img src={imagen1} alt="Imagen 1" className=" rounded-xl" />
                {/* {<img src={imagen2} alt="Imagen 2" className="w-1/2 rounded" />} */}
            </div>

            {/* Descripción */}
            <hr className="my-4 border-gray-400" />
            <p className="text-justify mb-4 p-4">
                {descripcion}
            </p>

            {/* Tecnologías */}
            {tecnologia && (
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {tecnologia.map((tecno, i) => (
                        <span
                            key={i}
                            className="bg-gray-300 text-sm font-medium px-2 py-1 rounded-lg shadow-sm"
                        >
                            {tecno}
                        </span>
                    ))}
                </div>
            )}

            {/* Enlace */}
            <div className="flex justify-center">
                <a
                    href="#"
                    className="text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    Ver más
                </a>
            </div>
        </div>
    );
}

CardProyectos.propTypes = {
    tituloProyectos: PropTypes.string,
    imagen1: PropTypes.string,
    imagen2: PropTypes.string,
    descripcion: PropTypes.string,
    tecnologia: PropTypes.array,
};

export default CardProyectos;
