import React from 'react';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Profile', path: '/profile' },
    { name: 'Upload', path: '/upload' },
    { name: 'Suggestions', path: '/suggestions' },
    { name: 'Watch', path: '/watch' },
    { name: 'Trending', path: '/trending' },
  ];

  return (
    <aside className="h-full w-48 bg-gradient-to-b from-slate-900 to-black shadow-xl flex flex-col py-4 border-r border-slate-800 min-w-[3.5rem] sm:min-w-[12rem]">
      {navItems.map(item => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 px-6 py-3 text-lg transition ${isActive ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold shadow-lg shadow-red-500/50' : 'text-gray-300 hover:bg-slate-800 hover:text-white'}`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;