import React, { useMemo, useState, useEffect } from 'react';
import { useNavigation, Link } from 'react-router-dom';
import HomeApps from '../HomeApps/HomeApps';
import Loader from '../Loader/Loader';
import { useAppsData } from '../../Hooks/AppsDataContext';

const Apps = () => {
  const { apps, appsLoading } = useAppsData();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  // Filter logic always available
  const filteredData = useMemo(() => {
    const list = apps || [];
    const term = search.toLowerCase();
    if (!term) return list;
    return list.filter((item) => item.title.toLowerCase().includes(term));
  }, [apps, search]);

  useEffect(() => {
    if (search.trim() === '') {
      setLoading(false);
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [search]);

  // Handle page loading state AFTER hooks
  if (navigation.state === 'loading' || appsLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-2">Our All Applications</h1>
        <p className="text-sm sm:text-base text-[#627382]">
          Explore all apps on the market developed by us. We code for millions.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h2 className="text-lg sm:text-xl font-semibold">({filteredData.length}) Apps Found</h2>
        <label className="relative w-full sm:w-64">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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

      <div className="min-h-[200px] flex items-center justify-center">
        {loading ? (
          <Loader fullScreen={false} size="w-12 h-12" text="" />
        ) : (
          <div className="grid gap-4 grid-cols-2 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
            {filteredData.map((item) => (
              <Link to={`/appdetails/${item.id}`} key={item.id}>
                <HomeApps data={item} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;

