import PropTypes from 'prop-types';
import { FaRegCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div >
            <p className='flex'><FaRegCheckCircle className='mr-2 text-green-600'></FaRegCheckCircle>{feature}</p>
        </div>
    );
};

Feature.propTypes={
    feature:PropTypes.string
}
export default Feature;