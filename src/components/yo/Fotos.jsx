import PropTypes from 'prop-types';

function Fotos({ imagen, clases }) {
    return (
        <>
            <img className={clases} src={imagen} alt="fabian aranda" />
        </>
    )
}

Fotos.propTypes = {
    imagen: PropTypes.string,
    clases: PropTypes.string
};

export default Fotos