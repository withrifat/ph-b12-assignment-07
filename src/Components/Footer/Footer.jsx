import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [githubData, setGithubData] = useState(null);

  const GITHUB_USERNAME = 'withrifat'; 

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!res.ok) {
          throw new Error('GitHub API error');
        }
        const data = await res.json();
        setGithubData(data);
      } catch (err) {
        console.error('Error fetching GitHub user:', err);
      }
    };

    fetchGitHub();
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content py-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          {githubData && (
            <img
              src={githubData.avatar_url}
              alt={githubData.login}
              className="w-16 h-16 rounded-full border-2 border-gray-300"
            />
          )}
          <div>
            <h3 className="text-lg font-semibold">{githubData ? githubData.name || githubData.login : 'Loading...'}</h3>
            {githubData && (
              <p className="text-sm text-gray-600">
                {githubData.public_repos} public repos · {githubData.followers} followers
              </p>
            )}
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          <NavLink to="/" className="link link-hover text-base font-medium">
            Home
          </NavLink>
          <NavLink to="/apps" className="link link-hover text-base font-medium">
            Apps
          </NavLink>
          <NavLink to="/installation" className="link link-hover text-base font-medium">
            Installation
          </NavLink>
          <a
            href="https://github.com/withrifat"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover text-base font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/withrifat"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover text-base font-medium"
          >
            LinkedIn
          </a>
        </nav>
        <div className="flex gap-4">
          <a
            href="https://play.google.com/store/games?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            <img src="https://www.citypng.com/public/uploads/preview/hd-google-play-playstore-logo-symbol-png-701751694777134cuw3jc7voo.png?v=2025081705" className="w-6 h-6" alt="" />
            Play Store
          </a>
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition"
          >
            <img  className="w-6 h-6" src="https://p1.hiclipart.com/preview/359/223/826/apple-logo-app-store-iphone-ios-11-ios-7-itunes-store-blue-turquoise-png-clipart.jpg" alt="" />
            App Store
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          &copy; {year} — This footer is part of an App-Store style page. Developed with React & Tailwind by{' '}
          <a
            href="https://github.com/withrifat"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold link link-hover"
          >
            Rifat
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
