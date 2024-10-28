import React from 'react';

const SeminarDetails = () => {
  return (
    <div className="bg-gray-600 text-white min-h-screen flex flex-col items-center py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold underline mb-4">
          Why You Should Join This Seminar
        </h1>
        <p className="text-lg">Transform your family and personal growth with Sajan Shah!</p>
      </div>

      <div className="bg-gray-900 rounded-lg p-8 shadow-lg max-w-3xl mx-auto text-center space-y-6">
        <p className="text-lg leading-relaxed">
          This seminar is not just a session—it’s a complete family transformation and growth package. 
          It offers you a unique opportunity to unlock potential across academics, family life, and personal well-being. 
          Through powerful tools, proven strategies, and real-life examples, you will experience immediate, tangible change in your everyday life.
        </p>

        <h2 className="text-2xl font-bold text-yellow-400">
          Transforming Lives with Sajan Shah – Memory Man of India
        </h2>
        <p>
          With <span className="font-bold text-yellow-400">15 million lives impacted</span>, Sajan Shah’s guidance and wisdom have already changed countless journeys. 
          Now, it’s your turn to experience his life-changing insights.
        </p>
        <p className="italic text-yellow-400">
          "Ab definitions, formulas aur equations ko bhi AI se yaad kiya ja sakta hai. Janiye kaise!"
        </p>

        <h3 className="text-xl font-bold text-yellow-400 mt-4">
          Learn 45 Execution Strategies to:
        </h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>🚀 Enhance Students' Academic Performance</li>
          <li>👪 Strengthen Family Culture and Values</li>
          <li>🏡 Create a Positive and Nurturing Home Environment</li>
        </ul>

        <p className="mt-4 text-lg">
          Don’t Miss This Life-Changing Opportunity! This could be the key to unlocking the next chapter of your life!
        </p>

        <h3 className="text-xl font-bold text-yellow-400 mt-6">
          In a World That’s Constantly Evolving, Are You Evolving Too?
        </h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>🚗 Cars are shifting toward electric vehicles (EVs).</li>
          <li>🏙️ Buildings now rise in just two years.</li>
          <li>📶 Networks have jumped from 2G to 5G in no time.</li>
        </ul>

        <p className="text-lg">
          With everything evolving around you, have you upgraded yourself?
        </p>
        <p className="italic text-yellow-400">
          "Har saal phone upgrade karte hain, lekin apne aapko kab kiya?"
        </p>

        <p className="mt-4 text-lg">
          This seminar is your chance to grow, evolve, and become the best version of yourself. 
          Now is the time to act. Will you take the leap?
        </p>
      </div>
    </div>
  );
};

export default SeminarDetails;
