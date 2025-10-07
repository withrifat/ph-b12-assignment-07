import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink to="/" className="text-base font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/apps" className="text-base font-medium">
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink to="/installation" className="text-base font-medium">
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              {menuItems}
            </ul>
          </div>
          <NavLink to="/">
          <div className="flex gap-2 items-center">
            <img src="/logo.png" alt="logo" className="h-10 w-10" />
            <h1 className='text-xl font-bold text-main-g'>WITH.RIFAT</h1>
          </div>
          </NavLink>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>

        <div>
          <a
            href="https://github.com/withrifat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-main flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.042-1.61-4.042-1.61-.547-1.387-1.335-1.756-1.335-1.756-1.09-.744.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.47-2.382 1.236-3.22-.124-.302-.535-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.043.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.838 1.234 1.91 1.234 3.22 0 4.61-2.804 5.63-5.476 5.924.43.372.823 1.104.823 2.23 0 1.61-.015 2.91-.015 3.305 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
