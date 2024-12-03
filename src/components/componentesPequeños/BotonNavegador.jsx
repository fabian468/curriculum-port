import PropTypes from 'prop-types';

function BotonNavegador({ ad, href }) {
    return (
        <li className='text-gray-100 hover:underline transition-all' ><a href={href}>{ad}</a></li>
    )
}

BotonNavegador.propTypes = {
    ad: PropTypes.string,
    href: PropTypes.string,
};

export default BotonNavegador