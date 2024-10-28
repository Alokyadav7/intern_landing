import React from 'react';

const FamilyTransformationEvent = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-10 px-4">
      <div className="text-center mb-8">
         <h1 className="text-4xl font-extrabold underline mb-4">
         Experience India’s Largest Family Transformation Event by Sajan Shah
        </h1>
        <p className="text-xl font-semibold">
        Experience life-changing insights in just 2 hours and build a positive home culture.
        </p>
      </div>

      <div className="bg-gray-900 rounded-lg p-8 shadow-lg max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          Ultimate Memory Power & Building Positive Home Culture Program 🚀
        </h2>
        
        <div className="space-y-4 text-lg text-white leading-relaxed">
          <p>Transform your life in just <span className="font-bold text-yellow-400">2 hours</span> – because lasting change begins with a moment of commitment.</p>
          
          <p className="italic text-yellow-400 text-lg">
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
        </div>

        <button className="mt-8 bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-md hover:bg-yellow-400">
          Reserve Your Free Seats Now
        </button>
      </div>
    </div>
  );
};

export default FamilyTransformationEvent;
