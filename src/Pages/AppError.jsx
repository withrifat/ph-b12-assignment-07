import React from 'react';

const AppError = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12">
      <img src="/App-Error.png" alt="App Not Found" className="w-64 sm:w-80 md:w-96 mb-6" />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">Something went wrong</h1>
      <p className="text-gray-600 max-w-xl">
        The application you are looking for does not exist or has been removed. Please check the URL or go back to the
        Apps page.
      </p>
    </div>
  );
};

export default AppError;
