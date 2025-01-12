'use client';

import ThemeMode from './ThemeMode';

// Remove unused imports and variables
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href="/"
                className={`text-white ${
                  pathname === '/' && 'text-accent border-b-2 border-accent'
                }capitalize font-medium hover:text-accent transition-all }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/involved"
                className={`text-white ${
                  pathname === '/involved' &&
                  'text-accent border-b-2 border-accent'
                }capitalize font-medium hover:text-accent transition-all }`}
              >
                Get Involved
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Terntribe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 xl:gap-8">
          <li>
            <Link
              href="/"
              className={`text-white ${
                pathname === '/' && 'text-primary border-b-2 border-primary'
              }capitalize font-medium hover:text-primary transition-all }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/involved"
              className={`text-white ${
                pathname === '/involved' &&
                'text-primary border-b-2 border-primary'
              }capitalize font-medium hover:text-primary transition-all }`}
            >
              Get Involved
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-6 hidden xl:flex ">Join the Cause</a>
        <ThemeMode />
      </div>
    </div>
  );
};

export default NavBar;
