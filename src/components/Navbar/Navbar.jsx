import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <div id='nav-items' className="flex items-center gap-12 py-6 mx-auto ">
        <NavLink to="/">Home</NavLink>

        <NavLink to='/listedBook'>Listed Books</NavLink>

        <NavLink to='/readedpages'>Page to read</NavLink>
      </div>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BookHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="">{links}</ul>
        </div>
        <div className="navbar-end space-x-6 ">
          <a className="btn text-white bg-teal-400">Sign in</a>
          <a className="btn text-white bg-green-400">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
