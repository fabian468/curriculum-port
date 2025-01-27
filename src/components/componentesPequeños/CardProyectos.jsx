import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardProyectos({ id, tituloProyectos, imagen1, descripcion, tecnologia }) {
    return (
        <article className="md:w-3/12 w-10/12 p-2 h-auto md:h-4/5  md:mt-0 mt-12 flex flex-col justify-evenly bg-gray-200 rounded-xl shadow-sm  font-serif">
            <h2 className="text-center mt-2 md:mt-0 text-2xl font-bold mb-4">
                {tituloProyectos}
            </h2>


            <div className="flex justify-center aspect-auto mb-5">
                <img src={imagen1} alt="Imagen 1" className="max-w-full max-h-48 rounded-xl object-contain" />
            </div>

            <hr className="my-4 border-gray-400" />
            <p className="text-justify mb-4 p-4">
                {descripcion}
            </p>

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
            <div className="flex justify-center">
                <Link
                    to={`/uproyecto/${id}`}
                    className="text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    Ver más
                </Link>
            </div>
        </article>
    );
}

CardProyectos.propTypes = {
    tituloProyectos: PropTypes.string,
    imagen1: PropTypes.string,
    id: PropTypes.string,
    imagen2: PropTypes.string,
    descripcion: PropTypes.string,
    tecnologia: PropTypes.array,
};

export default CardProyectos;
