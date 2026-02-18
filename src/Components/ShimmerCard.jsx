import React from 'react';

const ShimmerCard = () => (
  <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl shadow-lg border border-slate-700 animate-pulse overflow-hidden group">
    <div className="w-full h-48 bg-gradient-to-r from-slate-800 to-slate-700 rounded-t-xl" />
    <div className="p-4 space-y-3">
      <div className="h-5 bg-gradient-to-r from-slate-700 to-slate-600 rounded w-3/4" />
      <div className="h-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded w-1/2" />
    </div>
  </div>
);

export default ShimmerCard;