import React from 'react';

const Navbar = () => {
  const currentPath = window.location.pathname;

  return (
    <nav className="flex items-center justify-between p-6 pl-10 bg-white shadow-md h-20">
      <div className="flex items-center space-x-3">
        <img src="/images/planet.png" alt="logo" className="w-12 h-12" />
        <h1 className="text-3xl font-semibold text-black">Space Travelers' Hub</h1>
      </div>

      <ul className="flex space-x-8 text-blue-500">
        <li className={`relative ${currentPath === '/rockets' ? 'text-black font-bold' : 'hover:text-blue-700'} transition-colors`}>
          <a href="/rockets">Rockets</a>
          {currentPath === '/rockets' && (
            <span className="absolute -right-4 top-1/2 transform -translate-y-1/2 h-3/4 w-1 bg-black"></span>
          )}
        </li>
        <li className={`relative ${currentPath === '/missions' ? 'text-black font-bold' : 'hover:text-blue-700'} transition-colors`}>
          <a href="/missions">Missions</a>
          {currentPath === '/missions' && (
            <span className="absolute -right-4 top-1/2 transform -translate-y-1/2 h-3/4 w-1 bg-black"></span>
          )}
        </li>
        <li className={`relative ${currentPath === '/profile' ? 'text-black font-bold' : 'hover:text-blue-700'} transition-colors`}>
          <a href="/profile">My Profile</a>
          {currentPath === '/profile' && (
            <span className="absolute -right-4 top-1/2 transform -translate-y-1/2 h-3/4 w-1 bg-black"></span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
