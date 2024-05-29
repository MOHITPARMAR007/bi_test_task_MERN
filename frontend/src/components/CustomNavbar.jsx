import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const CustomNavbar = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className='flex justify-between p-4'>  
      <div>
        <h1>
          {isAuthenticated ? (
            <h1>{user.name}</h1>
          ) : (
            <h1>Welcome</h1>
          )}
        </h1>
      </div>
      <div>
        <ul className='flex gap-3'>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
      {isAuthenticated ? (
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()}>
          Log In
        </button>
      )}
    </div>
  );
};

export default CustomNavbar;
