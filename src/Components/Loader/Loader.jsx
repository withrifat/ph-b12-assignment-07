import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex gap-4 items-center ">
        <img src="/logo.png" alt="Loading..." className="w-20 h-20 animate-spin" />
        <h2 className="text-4xl font-semibold text-main-g text-main-g ">LOADING...</h2>
      </div>
    </div>
  );
};

export default Loader;
