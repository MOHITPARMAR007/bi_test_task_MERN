import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen p-4 md:p-0"> {/* Added md:p-0 to remove padding on medium screens and above */}
      <div className="md:mr-4 text-center md:text-left mb-4 md:mb-0"> {/* Center text on small screens and align left on medium screens and above */}
        <h1 className="text-2xl">Login to Continue</h1>
      </div>
      <div>
        <img src="https://i.postimg.cc/0NDdvsb9/homePage.avif" alt="Login illustration" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default Home;
