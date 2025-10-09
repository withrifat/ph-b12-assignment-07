import React, { memo } from "react";

const HomeApps = memo(({ data }) => {
  const { image, title, companyName, downloads, ratingAvg } = data;

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 p-3 sm:p-4 flex flex-col">
      <div className="relative rounded-2xl overflow-hidden aspect-square mb-2 sm:mb-3 group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
            {title}
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-500 truncate">{companyName}</p>
        </div>

        <div className="flex items-center justify-between mt-2 sm:mt-3">
          <div className="flex items-center text-[10px] sm:text-xs bg-green-50 px-2 py-1 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            {downloads}
          </div>

          <div className="flex items-center text-[10px] sm:text-xs bg-orange-50 px-2 py-1 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
            </svg>
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
});

export default HomeApps;
