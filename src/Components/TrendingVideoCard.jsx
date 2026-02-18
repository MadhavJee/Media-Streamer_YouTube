import React from 'react';

const TRENDING_VIDEOS = [
  {
    id: '1',
    title: 'Epic Mountain Adventure',
    channel: 'NatureX',
    thumbnail: 'https://i.ytimg.com/vi/ScMzIvxBSi4/mqdefault.jpg',
  },
  {
    id: '2',
    title: 'Top 10 Coding Tricks',
    channel: 'CodeMaster',
    thumbnail: 'https://i.ytimg.com/vi/2Ji-clqUYnA/mqdefault.jpg',
  },
  {
    id: '3',
    title: 'Live Concert 2026',
    channel: 'MusicLive',
    thumbnail: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
  },
  {
    id: '4',
    title: 'SpaceX Launch Highlights',
    channel: 'SpaceWorld',
    thumbnail: 'https://i.ytimg.com/vi/1w7OgIMMRc4/mqdefault.jpg',
  },
  {
    id: '5',
    title: 'Street Food Tour',
    channel: 'Foodies',
    thumbnail: 'https://i.ytimg.com/vi/4UZrsTqkcW4/mqdefault.jpg',
  },
  {
    id: '6',
    title: 'React in 10 Minutes',
    channel: 'DevSimplified',
    thumbnail: 'https://i.ytimg.com/vi/bMknfKXIFA8/mqdefault.jpg',
  },
];

const TrendingVideoCard = ({ video }) => (
  <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition duration-300 border border-slate-700 hover:border-red-500 group overflow-hidden">
    <div className="relative overflow-hidden">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition duration-300"
      />
      <div className="absolute inset-0 bg-black group-hover:bg-black/40 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="bg-red-600 rounded-full p-3">
          <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        </div>
      </div>
    </div>
    <div className="p-3">
      <h2 className="font-semibold text-lg mb-1 line-clamp-2 text-white group-hover:text-red-400 transition">
        {video.title}
      </h2>
      <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300 transition">{video.channel}</p>
    </div>
  </div>
);

export { TRENDING_VIDEOS, TrendingVideoCard };