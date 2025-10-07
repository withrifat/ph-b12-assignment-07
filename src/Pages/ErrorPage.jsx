import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
      <img src="/error-404.png" alt="404 Error" className="w-64 sm:w-96 mb-6" />
      <h1 className="text-3xl md:text-[72px] font-semibold text-main-g mb-2">Oops, page not found!</h1>
      <p className="text-gray-500 text-base mb-6">The page you are looking for is not available.</p>
      <button onClick={() => navigate(-1)} className="btn-main">
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;
