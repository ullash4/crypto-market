import { Link } from 'react-router-dom';

const CoinDetails = ({coin}) => {
    const {name, symbol, image} = coin;
    
    return (
        <Link to={`/coins/${coin.id}`}>
            <div className='flex justify-between items-center m-2 p-5 rounded-lg shadow-lg bg-white'>
            <div>
                <img className='w-20 h-20' src={image} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <h1>{symbol}</h1>
            </div>
        </div>
        </Link>
    );
};

export default CoinDetails;