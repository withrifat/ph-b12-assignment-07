import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAppStore, FaGooglePlay, FaGithub, FaLinkedin, FaHome, FaThLarge, FaDownload, FaCheckCircle } from "react-icons/fa";

const Footer = () => {
  const [githubData, setGithubData] = useState(null);
  const GITHUB_USERNAME = 'withrifat';

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!res.ok) throw new Error('GitHub API error');
        const data = await res.json();
        setGithubData(data);
      } catch (err) {
        console.error('Error fetching GitHub user:', err);
      }
    };
    fetchGitHub();
  }, []);

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-1 transition duration-300 font-medium 
     ${isActive ? 'text-main-g underline underline-offset-4' : 'text-gray-700 hover:text-main-g'}`;

  const year = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content py-10 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          {githubData && (
            <img src={githubData.avatar_url} alt={githubData.login} className="w-16 h-16 rounded-full border border-gray-300" />
          )}
          <div>
            <h3 className="text-lg font-semibold">{githubData ? githubData.name || githubData.login : 'Loading...'}</h3>
            {githubData && (
              <p className="text-sm text-gray-600">{githubData.public_repos} repos · {githubData.followers} followers</p>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center items-center gap-5 text-sm md:text-base">
          <NavLink to="/" className={linkStyle}><FaHome /> Home</NavLink>
          <NavLink to="/apps" className={linkStyle}><FaThLarge /> Apps</NavLink>
          <NavLink to="/installation" className={linkStyle}><FaDownload /> Installation</NavLink>
          <NavLink to="/installed" className={linkStyle}><FaCheckCircle /> Installed</NavLink>
          <a href="https://github.com/withrifat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 hover:text-main-g"><FaGithub /> GitHub</a>
          <a href="https://www.linkedin.com/in/withrifat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 hover:text-main-g"><FaLinkedin /> LinkedIn</a>
        </nav>

        {/* Store Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://play.google.com/store/games?hl=en" target="_blank" rel="noopener noreferrer" className="btn-main flex items-center gap-2 px-4 py-2 text-sm">
            <FaGooglePlay /> Play Store
          </a>
          <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" className="btn-main flex items-center gap-2 px-4 py-2 text-sm">
            <FaAppStore /> App Store
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-xs sm:text-sm text-gray-500">
        <p>&copy; {year} — Built by <a href="https://github.com/withrifat" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-main-g">Rifat</a>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
