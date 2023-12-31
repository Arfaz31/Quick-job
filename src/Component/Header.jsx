import React, { useState } from 'react';
import { BriefcaseIcon,
Bars3BottomRightIcon,
XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex items-center justify-between">
            <div>
                    {/* Logo section*/}
            <Link to="/" className="inline-flex items-center">
            <BriefcaseIcon className="h-6 w-6 text-blue-500"/>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            QuickJob
          </span>
            </Link>
            </div>
          
        <div>
            {/* nav item section*/}
        <ul className="items-center font-medium hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-600" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) => (isActive ? "text-blue-600" : "default")}
            >
            Statistics
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/appliedjob"
              className={({ isActive }) => (isActive ? "text-blue-600" : "default")}
            >
              AppliedJob
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-blue-600" : "default")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        </div>

        <div className="hidden lg:inline-flex items-center" >
        <button className="ml-6  h-10 px-4 mb-3 font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700">
          Start Applying
        </button>
        </div>

        {/*Mobile Navbar Section*/}
        <div className="lg:hidden">
          {/* dropdown open button*/}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>

          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/*Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                    <BriefcaseIcon className="h-6 w-6 text-blue-500"/>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
                        QuickJob
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/*mobile nav item section*/}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/statistics"
                        className="default"
                      >
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/appliedjob"
                        className="default"
                      >
                        Applied Job
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="default"
                      >
                        Blog
                      </Link>
                    </li>

                    <li>
                    <Link to='/books' className='btn md:w-auto md:mr-4'>
            <p>Start Applying</p>
            </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
            </div>
        </div>
    );
};

export default Header;