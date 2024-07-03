
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
const {name,price,features} =option;
   
    return (
        <div className='bg-gray-300 shadow-2xl rounded-md p-4 text-black flex flex-col'>
            <h2 className='text-center '>
                <span className='text-5xl'>{price}</span>
               
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
           <div className='flex-grow'>
           {
               features.map((feature,idx )=> <Feature key={idx} feature={feature}></Feature> ) 
            }
           </div>
            <button className='bg-green-600 font-bold text-xl py-2 rounded-md text-white text-center mt-12 w-full hover:bg-green-900 '>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes={
    option: PropTypes.object
}
export default PriceOption;