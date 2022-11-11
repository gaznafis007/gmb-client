import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.displayName);
  const items = (
    <>
      <li className="mr-2 font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="mr-2 font-semibold">
        <Link to="/myreviews">My reviews</Link>
      </li>
      <li className="font-semibold">
        <Link>Events</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {items}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          GMB Akash
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{items}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <div className=" ">
            {user?.photoURL ? (
              <div className="flex justify-center items-center gap-4">
                <img
                  src={user?.photoURL}
                  className="w-10 rounded-full"
                  alt="user"
                />
                <button
                  onClick={() => logOut()}
                  className="btn btn-outline btn-info"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-4">
                <p className="text-xl">{user.displayName}</p>
                <FaUser className="p-1 border border-primary rounded-2xl text-4xl text-success"></FaUser>
                <button
                  onClick={() => logOut()}
                  className="btn btn-outline btn-info"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/register" className="btn btn-outline btn-info mr-2">
              Register
            </Link>
            <Link to="/login" className="btn btn-outline btn-success ml-2">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
