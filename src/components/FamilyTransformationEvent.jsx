import React from 'react';

const FamilyTransformationEvent = () => {
  return (
    <div 
    className="bg-black text-white min-h-screen flex flex-col items-center py-1 px-5 pr-5" 
    style={{ backgroundImage: `url(/back.jpg)`, backgroundSize: 'cover' }}
  >
    <div className="text-center mb-8 mr-5">
      <h1 
        className="text-4xl font-extrabold underline mb-4 uppercase"
        style={{ color: 'rgba(255, 255, 255, 1)' }}
      >
        EXPERIENCE INDIA’S LARGEST FAMILY TRANSFORMATION EVENT BY SAJAN SHAH
      </h1>
      <p className="text-xl font-semibold">
        Experience life-changing insights in just 2 hours and build a positive home culture.
      </p>
    </div>

      <div className="max-w-2xl text-right space-y-4 text-lg leading-relaxed bg-transparent shadow-none" style={{ color: 'rgba(255, 255, 255, 1)' }}>
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'rgba(255, 255, 255, 1)' }}>
          Ultimate Memory Power & Building Positive Home Culture Program 🚀
        </h2>

        <p>Transform your life in just <span className="font-bold text-yellow-400">2 hours</span> – because lasting change begins with a moment of commitment.</p>

        <p className="italic text-yellow-400 text-lg ">
          “Agar aapke paas apne parivar ke liye samay nahi hai, toh yeh karyakram ab aapke liye anivarya hai.”
        </p>

        <p>✨ <span className="font-bold text-yellow-400">15 Million Lives Impacted</span> and counting!</p>

        <p>
          📍 Witness the <span className="font-bold text-yellow-400">Memory Man of India</span> LIVE – Unlock the secrets of a razor-sharp mind.
        </p>

        <p>
          🌍 Featured Speaker at the <span className="font-bold text-yellow-400">World Religion Parliament</span>
        </p>

        <p>
          Be part of an unforgettable journey toward a more positive, empowered, and connected family life. This is more than just an event—it’s a <span className="underline">movement</span>. Don’t miss it!
        </p>

        <button className="mt-8 bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-blue-500">
          Reserve Your Free Seats Now
        </button>
      </div>
    </div>
  );
};

export default FamilyTransformationEvent;
