import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShimmerCard from '../Components/ShimmerCard';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const Home = ({
  searchQuery,
  pageToken,
  onTokens,
  onPageChange,
  nextPageToken,
  prevPageToken,
  currentPage,
}) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchQuery) return;
    let ignore = false;
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);
      let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${encodeURIComponent(searchQuery)}&type=video&key=${API_KEY}`;
      if (pageToken) url += `&pageToken=${pageToken}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (ignore) return;
        setVideos(data.items || []);
        setLoading(false);
        if (onTokens) onTokens(data.nextPageToken, data.prevPageToken);
      } catch {
        if (ignore) return;
        setError('Failed to fetch videos');
        setLoading(false);
      }
    };
    fetchVideos();
    return () => {
      ignore = true;
    };
    // eslint-disable-next-line
  }, [searchQuery, pageToken]);

  if (loading) {
    return (
      <div className="p-4 min-h-screen bg-gradient-to-b from-black to-slate-950 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <ShimmerCard key={i} />
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-slate-600 hover:to-slate-700 transition font-semibold"
            disabled
          >
            Previous
          </button>
          <span className="text-white font-semibold text-lg py-3">Page {currentPage}</span>
          <button
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-slate-600 hover:to-slate-700 transition font-semibold"
            disabled
          >
            Next
          </button>
        </div>
      </div>
    );
  }
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4 min-h-screen bg-gradient-to-b from-black to-slate-950 flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
        {videos.map(video => (
          <div
            key={video.id.videoId}
            className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition duration-300 border border-slate-700 hover:border-red-500 cursor-pointer group"
            onClick={() =>
              navigate(`/watch?v=${video.id.videoId}`, {
                state: {
                  videoId: video.id.videoId,
                  title: video.snippet.title,
                  channel: video.snippet.channelTitle,
                  description: video.snippet.description,
                  thumbnail:
                    video.snippet.thumbnails.high?.url ||
                    video.snippet.thumbnails.medium.url,
                },
              })
            }
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
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
                {video.snippet.title}
              </h2>
              <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300 transition">
                {video.snippet.channelTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-pink-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-red-700 hover:to-pink-700 transition font-semibold shadow-lg hover:shadow-red-500/50"
          onClick={() => onPageChange(prevPageToken, -1)}
          disabled={!prevPageToken || currentPage === 1}
        >
          Previous
        </button>
        <span className="text-white font-semibold text-lg py-3">Page {currentPage}</span>
        <button
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-pink-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-red-700 hover:to-pink-700 transition font-semibold shadow-lg hover:shadow-red-500/50"
          onClick={() => onPageChange(nextPageToken, 1)}
          disabled={!nextPageToken}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;