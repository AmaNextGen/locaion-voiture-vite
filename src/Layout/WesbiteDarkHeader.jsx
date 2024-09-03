import React from 'react';
import { Link } from 'react-router-dom'; 


const WebsiteDarkHeader = () => {
  return (
    <div className="navbar bg-[#050B20] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <Link to="/" className="text-2xl font-bold text-white">
            <img src='/images/logo.png' alt='logo'  width={110}/>
          </Link>
        </div>

        <nav className="nav-links flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="#" className="text-white hover:text-gray-400">
            Inventory
          </Link>
          <Link to="#" className="text-white hover:text-gray-400">
            Blog
          </Link>
          <Link to="#" className="text-white hover:text-gray-400">
            Shop
          </Link>
          <Link to="#" className="text-white hover:text-gray-400">
            Contact
          </Link>
          <Link to="#" className="text-white hover:text-gray-400">
            Sign In
          </Link>
          <Link
            to="#"
            className="bg-white !bg-transparent border border-2 font-bold px-6 py-2 rounded-full"
          >
            Add Listing
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default WebsiteDarkHeader;
