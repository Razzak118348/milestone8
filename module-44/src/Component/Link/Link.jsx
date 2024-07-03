
import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className='my-1 lg:my-6 hover:bg-gray-200 '> <a href={route.path}>{route.name}</a></li>
    );
};

Link.propTypes={
    route:PropTypes.object.isRequired,
}

export default Link;