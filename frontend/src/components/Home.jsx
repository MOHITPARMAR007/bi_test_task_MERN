import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user , isAuthenticated } = useAuth0();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen p-4 md:p-0"> {/* Added md:p-0 to remove padding on medium screens and above */}
      <div className="md:mr-4 text-center md:text-left mb-4 md:mb-0"> {/* Center text on small screens and align left on medium screens and above */}
        {
          isAuthenticated ? (
            <h1 className="text-3xl md:text-5xl font-bold mb-4" > Welcome {user.name}</h1>
          ):
          (
            <h1 className="text-3xl md:text-5xl font-bold mb-4"> login to Continue</h1>
          )

        }
      </div>
      <div>
        <img src="https://i.postimg.cc/0NDdvsb9/homePage.avif" alt="Login illustration" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default Home;
