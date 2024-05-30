import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className='flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100'>
      <div className='text-center md:text-left mb-4 md:mb-0'>
        <h1 className='text-2xl font-bold'>
          {isAuthenticated ? (
            <span>{user.name}</span>
          ) : (
            <span>Welcome</span>
          )}
        </h1>
      </div>
      <div className='mb-4 md:mb-0'>
        <ul className='flex flex-col md:flex-row gap-3 text-center'>
          <li>
            <Link to="/" className='hover:text-blue-500'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='hover:text-blue-500'>About</Link>
          </li>
          {isAuthenticated && (
            <>
              <li>
                <Link to="/createGroup" className='hover:text-blue-500'>Create Expense Group</Link>
              </li>
              <li>
                <Link to="/dashboard" className='hover:text-blue-500'>Dashboard</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        {isAuthenticated ? (
          <button 
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
          >
            Log Out
          </button>
        ) : (
          <button 
            onClick={() => loginWithRedirect()}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomNavbar;
