import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <ul className="flex justify-around">
        <li className="text-white hover:text-gray-300 transition-colors">
          <a href="/rockets">Rockets</a>
        </li>
        <li className="text-white hover:text-gray-300 transition-colors">
          <a href="/missions">Missions</a>
        </li>
        <li className="text-white hover:text-gray-300 transition-colors">
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
