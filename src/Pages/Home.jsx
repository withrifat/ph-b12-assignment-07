import React from 'react';
import Hero from './Hero/Hero';
import HomeApps from '../Components/HomeApps/HomeApps';
import { useLoaderData, Link } from 'react-router-dom';

const Home = () => {
  const data = useLoaderData();
  const limitedData = data.slice(0, 8);

  return (
    <>
      <Hero />
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-3">
        {limitedData.map(item => (
          <Link to={`/appdetails/${item.id}`} key={item.id}>
            <HomeApps data={item} />
          </Link>
        ))}
      </div>
      <Link to="/apps" className="flex justify-center">
        <button className="mt-6 btn-main flex items-center gap-2 rounded-lg hover:opacity-90 transition">
          Show All
        </button>
      </Link>
    </>
  );
};

export default Home;

