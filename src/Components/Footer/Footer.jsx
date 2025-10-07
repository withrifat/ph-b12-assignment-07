import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAppStore, FaGooglePlay } from "react-icons/fa";


const Footer = () => {
const linkStyle = ({ isActive }) =>
  `relative text-base font-medium transition duration-300 
  ${isActive ? 'text-main-g underline underline-offset-4' : 'text-gray-700 hover:text-main-g'}
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
  after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full`;

const menuItems = (
  <ul className="flex gap-6 list-none">
    <li>
      <NavLink to="/" className={linkStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/apps" className={linkStyle}>
        Apps
      </NavLink>
    </li>
    <li>
      <NavLink to="/installation" className={linkStyle}>
        Installation
      </NavLink>
    </li>
  </ul>
);

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
          {menuItems}
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
            className="btn-main flex items-center gap-2"
          >
            <FaGooglePlay />
            Play Store
          </a>
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-main flex items-center gap-2"
          >
            <FaAppStore />
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
