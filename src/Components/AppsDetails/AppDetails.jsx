import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { FaDownload, FaStar, FaRegFileAlt } from 'react-icons/fa';
import Loader from '../Loader/Loader';
import { useAppsData } from '../../Hooks/AppsDataContext';
import AppError from '../../Pages/AppError';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, appsLoading, getAppById, installApp, isInstalled } = useAppsData();
  const appId = useMemo(() => parseInt(id), [id]);
  const app = useMemo(() => getAppById(appId), [getAppById, appId]);
  const installed = isInstalled(appId);

  if (appsLoading) return <Loader />;
  if (!app) return <AppError />;

  const ratingData = app.ratings.map((r) => ({ name: r.name, count: r.count }));

  const formatNumber = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
    return num;
  };
  // Shortened description paragraphs
  const descriptionParagraphs = [
    `${app.title} is built for performance and modern web standards. It delivers a smooth and responsive user experience while optimizing load times and minimizing unnecessary re-renders.`,
    `The interface is intuitive and user-friendly, with clear navigation, interactive elements, and thoughtful design choices that ensure accessibility for all users.`,
    `Fully responsive, the app adapts seamlessly to different screen sizes, maintaining a professional look while keeping content clear and readable.`,
    `Performance and accessibility remain core priorities, with efficient asset loading, smooth transitions, and support for color contrast, keyboard navigation, and screen readers.`,
    `Designed for scalability, ${app.title} uses a modular architecture with reusable components, making it easy to maintain and expand in the future.`,
  ];

  return (
    <div className="px-3 sm:px-6 md:px-10 lg:px-3 py-4 space-y-10">
      {/* App Info Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 bg-white p-5 md:p-8 rounded-3xl shadow-md">
        <img
          src={app.image}
          alt={app.title}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 p-4 sm:p-5 rounded-3xl bg-gray-100 border border-gray-200 object-contain shadow-lg"
        />
        <div className="flex-1 space-y-3 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">{app.title}</h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Developed by <span className="font-semibold text-gray-800">{app.companyName}</span>
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-3">
            <div className="flex items-center gap-2 sm:gap-3 bg-green-100 px-4 py-2 sm:px-5 sm:py-3 rounded-xl shadow-sm">
              <FaDownload className="text-green-600 text-lg sm:text-xl" />
              <div>
                <p className="text-xs sm:text-sm text-gray-700">Downloads</p>
                <h2 className="font-semibold text-sm sm:text-base">{formatNumber(app.downloads)}</h2>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-yellow-100 px-4 py-2 sm:px-5 sm:py-3 rounded-xl shadow-sm">
              <FaStar className="text-yellow-500 text-lg sm:text-xl" />
              <div>
                <p className="text-xs sm:text-sm text-gray-700">Rating</p>
                <h2 className="font-semibold text-sm sm:text-base">{app.ratingAvg}</h2>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-blue-100 px-4 py-2 sm:px-5 sm:py-3 rounded-xl shadow-sm">
              <FaRegFileAlt className="text-blue-500 text-lg sm:text-xl" />
              <div>
                <p className="text-xs sm:text-sm text-gray-700">Size (MB)</p>
                <h2 className="font-semibold text-sm sm:text-base">{app.size}</h2>
              </div>
            </div>
          </div>
          <button
            onClick={() => (!installed ? installApp(app) : null)}
            disabled={installed}
            className={`mt-5 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl transition font-semibold text-base sm:text-lg shadow-md ${
              installed ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-main-g text-white hover:bg-main-g/90'
            }`}
          >
            {installed ? 'Installed' : `Install Now (${app.size}MB)`}
          </button>
        </div>
      </div>
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 text-center md:text-left">
          Ratings Distribution
        </h2>
        <div className="w-full h-64 sm:h-80 md:h-96 bg-white p-4 sm:p-5 rounded-2xl shadow-md">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={ratingData.sort((a, b) => b.count - a.count)}
              margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={60} />
              <Tooltip formatter={(value) => formatNumber(value)} />
              <Bar dataKey="count" fill="#4f46e5" radius={[6, 6, 6, 6]} barSize={22} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="space-y-4 bg-white p-5 sm:p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
          Description
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">{app.description}</p>
        {descriptionParagraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AppDetails;
