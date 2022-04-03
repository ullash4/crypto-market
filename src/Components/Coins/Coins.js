import React, { useEffect, useState } from 'react';
import CoindDetails from '../CoinDetails/CoinDetails'

const Coins = () => {
    const [coins, setCoins] = useState([]);
    useEffect(()=>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => res.json())
        .then(data=> setCoins(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold my-7'>Available Crypto Currencies</h1>
            <h1 className='text-2xl text-center font-thin m-5'>Total Cryto: {coins.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10 my-5 p-10'>
            {
                coins.map(coin=> <CoindDetails coin={coin} ke={coin.id}></CoindDetails>)
            }
        </div>
        </div>
    );
};

export default Coins;