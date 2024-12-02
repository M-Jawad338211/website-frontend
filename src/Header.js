

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-white shadow-md fixed h-20 w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between md:justify-center py-4">
        {/* Logo (Left aligned on large screens) */}
        <div className="md:absolute md:left-4">
          <img src="/logoicon.png" alt="unitfactor-logo" className="h-12" />
        </div>

        {/* Hamburger Icon (Visible on small screens) */}
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer md:hidden block text-black"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        {/* Hidden Checkbox for Toggling Menu */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />

        {/* Nav Links */}
        <ul
          className="hidden peer-checked:block md:flex space-y-4 md:space-y-0 md:space-x-12 md:items-center absolute md:static top-full left-0 w-full bg-white md:bg-transparent md:w-auto"
        >
          <li>
            <a href="/" className="block text-black hover:text-orange-800 py-2 px-4 md:py-0">
              Home
            </a>
          </li>
          <li>
            <Link to="/animations" className="block text-black hover:text-orange-800 py-2 px-4 md:py-0">
              Animations
            </Link>
          </li>
          <li>
            <Link to="/services" className="block text-black hover:text-orange-800 py-2 px-4 md:py-0">
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="block text-black hover:text-orange-800 py-2 px-4 md:py-0">
              Portfolio
            </Link>
          </li>
          <li>
            <a href="/blog" className="block text-black hover:text-orange-800 py-2 px-4 md:py-0">
              Blog
            </a>
          </li>
          <li>
            <Link to="/contacts" className="block text-black hover:text-orange-800 py-2 px-4 md:py-0">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
