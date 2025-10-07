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
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 2l18 10-18 10V2z" />
            </svg>
            Play Store
          </a>
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.365 1c-.832 0-2.16.96-2.88.96-.32 0-1.68-1.06-3.12-1.06-1.62 0-3 1.88-3 5.24 0 3.52 1.86 7.36 4.24 7.36.92 0 2.04-.82 3.42-.82 1.38 0 2.34.82 3.42.82 2.42 0 4.22-3.88 4.22-7.36C20.605 2.88 18.985 1 16.365 1zM13.31 10.25c-.9 0-2.48 1.64-4.08 1.64-.38 0-.92-.16-1.38-.5-.34-.26-.62-.48-.94-.74-.02-.02 0-.06.02-.04C7 11.02 10 7.94 10 5.64c0-.1 0-.18.02-.26.2.04.48.08.76.08 1.48 0 2.9-1.4 3.44-1.4.1 0 .18 0 .26.02-.02.2-.08.46-.08.76 0 2.3 3 5.38 3.02 5.6 0 .04 0 .06-.02.08-.32.24-.6.48-.94.74-.46.34-1 .5-1.38.5z" />
            </svg>
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
