import PropTypes from 'prop-types';

function CardProyectos({ tituloProyectos, imagen1, imagen2, descripcion, tecnologia }) {
    return (
        <div className='w-3/12 h-3/5 bg-gray-200 rounded-xl shadow-md shadow-white'>
            <h3>{tituloProyectos}</h3>
            <p>{descripcion}</p>
            {tecnologia && tecnologia.map((tecno, i) => <p key={i}>{tecno}</p>)}
            <img src={imagen1} alt="" />
            <img src={imagen2} alt="" />
            <a href='#'>Ver más</a>
        </div>
    )
}

CardProyectos.propTypes = {
    tituloProyectos: PropTypes.string,
    imagen1: PropTypes.string,
    imagen2: PropTypes.string,
    descripcion: PropTypes.string,
    tecnologia: PropTypes.array,
};

export default CardProyectos