import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeApps from '../HomeApps/HomeApps';

const Apps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState('');

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-2">Our All Applications</h1>
        <p className="text-sm sm:text-base text-[#627382]">Explore all apps on the market developed by us. We code for millions.</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h2 className="text-lg sm:text-xl font-semibold">{`(${filteredData.length}) Apps Found`}</h2>
        <label className="relative w-full sm:w-64">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-g focus:border-main-g text-sm sm:text-base"
          />
        </label>
      </div>

      <div className="grid gap-4 grid-cols-2 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredData.map((item) => <HomeApps key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default Apps;
