import React from 'react';
import ULink from './CustomLink';

const Header = () => {
  return (
    <div className='flex justify-around items-center p-5 bg-indigo-400'>
      <div>
        <h1 className='text-3xl font-semibold cursor-pointer'>Crypto Market</h1>
      </div>
      <div className='flex items-center'>
        <ULink className='mr-3 text-xl font-semibold cursor-pointer' to={'/'}>Home</ULink>
        <ULink className='mr-3 text-xl font-semibold cursor-pointer' to={'/coins'}>Coins</ULink>
        <ULink className='mr-3 text-xl font-semibold cursor-pointer' to={'/contact'}>Contact</ULink>
        <ULink className='mr-3 text-xl font-semibold cursor-pointer' to={'/about'}>About</ULink>
      </div>
    </div>
  );
};

export default Header;
