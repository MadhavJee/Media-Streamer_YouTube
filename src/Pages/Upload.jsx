import React, { useState } from 'react';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setMessage('Upload simulated! (API integration needed)');
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-gradient-to-b from-black to-slate-950 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Upload Video</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl shadow-xl p-6 flex flex-col gap-4 border border-slate-700"
      >
        <label className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-slate-700 border-opacity-30 rounded-lg cursor-pointer hover:border-slate-600 transition bg-slate-900 hover:bg-slate-800">
          <input
            type="file"
            accept="video/*"
            className="hidden"
          />
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-red-500" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path d="M28 8H12a4 4 0 00-4 4v20a4 4 0 004 4h24a4 4 0 004-4V20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-gray-300 mt-2">Click to upload video</p>
          </div>
        </label>
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="border border-slate-600 bg-slate-800 text-white p-3 rounded-lg focus:outline-none focus:border-slate-600 focus:ring-0 transition"
        />
        <textarea
          placeholder="Video Description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          className="border border-slate-600 bg-slate-800 text-white p-3 rounded-lg focus:outline-none focus:border-slate-600 focus:ring-0 transition"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-red-500/50"
        >
          Upload
        </button>
        {message && <div className="text-green-400 text-center font-semibold bg-green-400 bg-opacity-10 rounded-lg p-3 border border-green-600 border-opacity-50">{message}</div>}
      </form>
    </div>
  );
};

export default Upload;