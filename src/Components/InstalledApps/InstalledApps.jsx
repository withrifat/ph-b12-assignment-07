import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppsData } from '../../Hooks/AppsDataContext';
import { FaDownload, FaStar, FaRegFileAlt } from 'react-icons/fa';

const InstalledApps = () => {
  const { installedApps, removeApp } = useAppsData();
  const [sort, setSort] = useState('none');
  const installed = useMemo(() => installedApps || [], [installedApps]);

  const sorted = useMemo(() => {
    if (sort === 'size-asc') return [...installed].sort((a, b) => (a.size ?? 0) - (b.size ?? 0));
    if (sort === 'size-desc') return [...installed].sort((a, b) => (b.size ?? 0) - (a.size ?? 0));
    return installed;
  }, [installed, sort]);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="flex flex-col gap-2 text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-2">Your Installed Apps</h1>
        <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
        <div>
          <p className="text-xl font-bold">Total Installed {installed.length} </p>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium">Sort by size</label>
          <div className="join">
            <button
              onClick={() => setSort('size-asc')}
              className={`join-item btn btn-sm ${sort === 'size-asc' ? 'btn-active' : ''}`}
            >
              Low to High
            </button>
            <button
              onClick={() => setSort('size-desc')}
              className={`join-item btn btn-sm ${sort === 'size-desc' ? 'btn-active' : ''}`}
            >
              High to Low
            </button>
            <button
              onClick={() => setSort('none')}
              className={`join-item btn btn-sm ${sort === 'none' ? 'btn-active' : ''}`}
            >
              Default
            </button>
          </div>
        </div>
      </div>

      {installed.length === 0 ? (
        <div className="text-center text-gray-500">You have no installed apps.</div>
      ) : (
        <div className="grid gap-6 sm:gap-8 grid-cols-1">
          {sorted.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl border border-gray-100 transition-transform duration-300 hover:-translate-y-0.5 p-4 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-stretch">
                <Link to={`/appdetails/${app.id}`} className="flex items-center gap-4 sm:gap-6 flex-1">
                  <div className="rounded-2xl bg-gray-50 border border-gray-200 p-3 sm:p-4">
                    <img src={app.image} alt={app.title} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold truncate">{app.title}</h2>
                    <p className="text-gray-500 text-sm sm:text-base truncate">{app.companyName}</p>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-xl text-sm">
                        <FaDownload />
                        <span>{app.downloads}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-xl text-sm">
                        <FaStar />
                        <span>{app.ratingAvg}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-xl text-sm">
                        <FaRegFileAlt />
                        <span>{app.size} MB</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="flex flex-wrap sm:flex-col gap-3 sm:justify-between">
                  <Link to={`/appdetails/${app.id}`} className="btn btn-soft bg-green-500 rounded-xl">Open</Link>
                  <button onClick={() => removeApp(app.id)} className="btn btn-active btn-error rounded-xl">Uninstall</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstalledApps;
