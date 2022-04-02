import React from "react";

const Header = () => {
  return (
    <div className="flex justify-evenly items-center p-5 bg-indigo-400">
      <div>
        <h4 className="text-2xl font-semibold">Crypto Market</h4>
      </div>
      <div>
        <a className="mr-3 text-xl font-semibold" href="/">Home</a>
        <a className="mr-3 text-xl font-semibold" href="/coins">Coins</a>
        <a className="mr-3 text-xl font-semibold" href="/contact">Contact</a>
        <a className="mr-3 text-xl font-semibold" href="/about">About</a>
      </div>
    </div>
  );
};

export default Header;
