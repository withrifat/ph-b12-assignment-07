import React from 'react';
import Hero from './Hero/Hero';
import HomeApps from '../Components/HomeApps/HomeApps';
import { useLoaderData, NavLink } from 'react-router-dom';
import Apps from '../Components/Apps/Apps';

const Home = () => {
  const data = useLoaderData();
  const limitedData = data.slice(0, 8);
  return (
    <>
      {/* hero section  */}
      <Hero></Hero>
      {/* Apps Section */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-3">
        {limitedData.map((item) => (
          <HomeApps key={item.id} data={item} />
        ))}
      </div>
      <NavLink to="/apps">
        <button className="mt-6 mx-auto btn-main flex items-center gap-2 rounded-lg hover:opacity-90 transition">
          Show All
        </button>
      </NavLink>
    </>
  );
};

export default Home;
