import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OneCoinDetails = () => {
    const {id} = useParams();
    const [details, setDetail] = useState({});
    useEffect(()=>{
        const url = `https://api.coingecko.com/api/v3/coins/${id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setDetail(data))
    },[])
    return (
        <div className='flex flex-col md:flex-row justify-evenly items-center py-20 '>
            <div className='order-2 md:order-1'>
            <h1 className='text-3xl'>General Info:</h1>
              <hr />
              <h1>Coin Name: {details.name}</h1>
              <h1>Market Cap Rank: {details.market_cap_rank}</h1>
              <h1>
                Origin:{' '}
                {details.country_origin ? details.country_origin : 'Not Available'}
              </h1>
              <h1>Contract Address: {details.contract_address}</h1>
              <h1>Hashing Algorithm: {details.hashing_algorithm}</h1>
              <h1>Genesis Date: {details.genesis_date}</h1>
              <h1>Last Updated: {details.last_updated}</h1>

              <h1 className='text-3xl mt-4'>Scores:</h1>
              <hr />
              <h1>Community Score: {details.community_score}</h1>
              <h1>Developer Score: {details.developer_score}</h1>
              <h1>Liquidity Score: {details.liquidity_score}</h1>
              <h1>Public Interest Score: {details.public_interest_score}</h1>
            </div>
            <div className='order-1 md:order-2 '>
                <img src={details.image?.large} alt="" />
            </div>
        </div>
    );
};

export default OneCoinDetails;