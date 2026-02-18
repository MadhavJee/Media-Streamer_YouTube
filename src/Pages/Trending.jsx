import React from 'react';
import {
  TRENDING_VIDEOS,
  TrendingVideoCard,
} from '../Components/TrendingVideoCard';

const Trending = () => {
  return (
    <div className="p-4 bg-gradient-to-b from-black to-slate-950 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">🔥 Trending</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {TRENDING_VIDEOS.map(video => (
          <TrendingVideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Trending;