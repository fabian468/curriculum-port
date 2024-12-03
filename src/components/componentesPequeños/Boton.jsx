import PropTypes from 'prop-types';

function Boton({ red, href, logo }) {
    return (
        <a target='_Blank' className="border-2 text-xl border-white p-3 rounded-xl hover:scale-110 transition-all" href={href}><li className='flex items-center'>{logo}{red}</li></a>
    )
}


Boton.propTypes = {
    red: PropTypes.string,
    href: PropTypes.string,
    logo: PropTypes.element

};

export default Boton