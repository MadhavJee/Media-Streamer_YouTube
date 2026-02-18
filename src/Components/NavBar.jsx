import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../index.css';

const Navbar = ({ search, setSearch, onSearch }) => {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 bg-gradient-to-r from-black via-slate-900 to-black shadow-xl w-full border-b border-slate-800">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 mb-2 sm:mb-0">
        <span className="font-bold text-2xl bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">WatchTube</span>
      </div>

      {/* Middle: Search Bar */}
      <form
        onSubmit={onSearch}
        className="flex-1 flex justify-center w-full max-w-xl mb-2 sm:mb-0"
      >
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search"
          className="border border-zinc-700 bg-slate-900 text-white rounded-l-full px-4 py-2 w-full focus:outline-none focus:border-slate-600 transition focus:ring-0"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 border border-slate-700 border-l-0 rounded-r-full px-5 flex items-center transition font-semibold text-white"
        >
          <span>Search</span>
        </button>
      </form>

      {/* Right: Upload & Profile */}
      <div className="flex items-center gap-4">
        <button
          className="hover:bg-gray-800 p-2 rounded-full text-white"
          onClick={() => navigate('/profile')}
        >
          Profile
        </button>
      </div>
    </nav>
  );
};

export default Navbar;