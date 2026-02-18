import React from 'react';

const Profile = () => {
  return (
    <div className="p-4 max-w-xl mx-auto bg-gradient-to-b from-black to-slate-950 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Profile</h1>
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl shadow-xl p-6 border border-slate-700">
        <div className="flex items-center gap-6 mb-6 pb-6 border-b border-slate-700">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-600 to-pink-600 flex items-center justify-center text-4xl text-white font-bold shadow-lg">
            U
          </div>
          <div>
            <div className="font-semibold text-2xl text-white">User Name</div>
            <div className="text-gray-400 text-sm">user@email.com</div>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              This is your profile page. You can add more user info here.
            </p>
          </div>
          <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-red-500/50">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
