import React from 'react';


const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[90vh]'>
            <h1 className='text-5xl font-semibold'>Welcome to Crypto Market</h1>
            <button className='m-5 px-7 py-2 text-xl font-semibold bg-indigo-400 rounded-xl hover:bg-sky-600 hover:text-white' >Explore Crypto  </button>
        </div>
    );
};

export default Home;