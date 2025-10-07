import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeApps from '../HomeApps/HomeApps';
const Apps = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-3">
        {data.map((item) => (
          <HomeApps key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
