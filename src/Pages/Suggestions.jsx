import React, { useState } from 'react';

const Suggestions = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // In a real app, send to API. Here we just simulate.
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="p-6 w-full bg-gradient-to-b from-black to-slate-950 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white">Suggestions</h1>
      <p className="text-gray-300 mb-6">Have feedback or feature requests? Send us a suggestion.</p>

      <form onSubmit={handleSubmit} className="bg-slate-900 rounded-xl shadow-xl p-6 border border-slate-700 space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Name</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-0"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-0"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Suggestion</label>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={6}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-0"
            placeholder="Describe your suggestion..."
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-red-500/30">
            Send Suggestion
          </button>
          {sent && <span className="text-green-400">Thanks — suggestion submitted (simulated).</span>}
        </div>
      </form>
    </div>
  );
};

export default Suggestions;
