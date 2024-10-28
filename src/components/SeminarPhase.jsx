import React from 'react';

const SeminarDetails = () => {
  const phases = [
    {
      title: "Pre-Start (7:45 PM – 8:00 PM)",
      description: (
        <>
          Start your evening with a blast of energy!
          <ul className="list-disc list-inside mt-2">
            <li>Enjoy the vibrant dance crew of Sajan Shah, setting the tone for an inspiring session.</li>
            <li>Engage with creative AV learnings, building the foundation for your transformational journey.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Phase 1 (8:00 PM – 8:30 PM | 30 Minutes)",
      description: (
        <>
          Learn how to boost memory and cultivate positive family culture with Sajan Shah:
          <ul className="list-disc list-inside mt-2">
            <li>6 Specialized Learnings focused on memory development and strengthening family values.</li>
            <li>6 Execution Tips to achieve a 20% improvement in both memory and home environment.</li>
          </ul>
          This phase equips you with the tools to elevate your personal and family growth.
        </>
      ),
    },
    {
      title: "Phase 2 (8:30 PM – 9:30 PM | 60 Minutes)",
      description: (
        <>
          In this power-packed hour, Sajan Shah delves into:
          <ul className="list-disc list-inside mt-2">
            <li>20 Fundamental Strategies for mastering life, optimizing memory, and transforming family culture.</li>
            <li>Actionable techniques that can generate over 150% growth in academic performance and family relationships.</li>
          </ul>
          This segment provides practical solutions that are easy to implement, driving exponential personal and academic progress.
        </>
      ),
    },
    {
      title: "Phase 3 – The Ultimate Transformation (9:30 PM – 9:55 PM | 25 Minutes)",
      description: (
        <>
          The final segment delivers the pinnacle of transformation:
          <ul className="list-disc list-inside mt-2">
            <li>Sajan Shah shares personal insights from his journey, inspiring you to take charge of your own.</li>
            <li>Discover 40+ innovative strategies for permanent transformation across life, academics, and relationships.</li>
            <li>Learn techniques to overcome challenges and experience over 200% personal growth.</li>
          </ul>
          With lifetime support from Sajan Shah, you’ll never walk this journey alone. As Sajan says, "It’s YOU vs. YOU"—this seminar will empower you to win the battle within.
        </>
      ),
    },
  ];

  const beforeAfter = [
    {
      before: "Parents don't have enough time for their children.",
      after: "Parents become actively involved in their children's lives.",
    },
    {
      before: "Students feel bored and sleepy while studying.",
      after: "Students become focused, energized, and excited for studies.",
    },
    {
      before: "Parents struggle to balance work and family life.",
      after: "Parents learn work-life balance strategies and create quality time for family.",
    },
    {
      before: "Children feel disconnected and unappreciated at home.",
      after: "Children feel valued and emotionally connected with their parents.",
    },
    {
      before: "Household routines are chaotic and unorganized.",
      after: "Families establish smooth routines and cooperative habits.",
    },
    {
      before: "Parents focus more on correcting mistakes than celebrating progress.",
      after: "Parents adopt a positive reinforcement approach, celebrating small wins.",
    },
    {
      before: "Lack of a healthy study routine and easily get distracted.",
      after: "Build consistent study habits and stay focused without distractions.",
    },
  ];

  const videoLinksParents = [
    "https://www.instagram.com/reel/C01VDv0rEbH/?igsh=YmtjN3Byb2tpYW45",
    "https://www.instagram.com/reel/C1MnblILTw3/?igsh=MWYwbWVkN25ncTh2bQ%3D%3D",
    "https://www.instagram.com/reel/C3sOSoZpbRm/?igsh=MW91Y2g2cGx1c3doeA%3D%3D",
    "https://www.instagram.com/reel/DBgfdtHAst9/?igsh=Z3A1ZDl1dzVpZ2Vy",
    "https://www.instagram.com/reel/DAxqFsZsXFS/?igsh=MWRiMnZ2YThrbHY0MA%3D%3D",
    "https://www.instagram.com/reel/C3aIOJarD3x/?igsh=MWh5MXd1M2FkNDE1bQ==",
  ];

  const videoLinksStudents = [
    "https://www.instagram.com/reel/C6L60rgNhtk/?igsh=MTVmZWE4amY5Nmppbw%3D%3D",
    "https://www.instagram.com/reel/C7wQHGeKfTN/?igsh=bjFwemNpM2lyNnBr",
    "https://www.instagram.com/reel/C9h3YEcMeqb/?igsh=OGNyNTY5MDFsc200",
    "https://www.instagram.com/reel/C9pYdo3tQsj/?igsh=MW1vcHNiM3d6dzA3bA==",
    "https://www.instagram.com/reel/C8Mj5fxKePH/?igsh=OG53ajU3eHpucm56",
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-5xl font-extrabold underline mb-6 text-center text-yellow-300">
        2-Hour Power-Packed Seminar: Unleashing Growth and Transformation
      </h1>
      <p className="text-lg text-center mb-8">
        This highly impactful seminar is structured into four dynamic phases, each designed to energize, educate, and empower attendees for lasting change.
      </p>

      {/* Phases of the Seminar */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6">
        {phases.map((phase, index) => (
          <div key={index} className="border border-yellow-500 rounded-lg p-6 bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-3xl font-bold mb-3 text-yellow-400">{phase.title}</h2>
            <p className="text-base">{phase.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold underline my-8 text-yellow-300">A Life-Changing Experience Awaits You!</h2>
      <p className="text-lg text-center mb-4">
        Join us for this extraordinary seminar and unlock your potential for unlimited growth in life, academics, and relationships.
      </p>
      <p className="text-lg text-center mb-8">
        This is more than just a seminar—it’s the start of your transformation journey for life!
      </p>

      <div className="border border-yellow-500 rounded-lg p-6 bg-gray-900 my-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <p className="text-lg italic text-center text-yellow-400">
          “AI ka istemal karke 1 ghante ka model sirf 8 minutes mein khatam karna seekhiye.”
        </p>
      </div>

      <button className="mt-4 bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition duration-200 ease-in">
        Reserve Your Free Seats Now (Before it is SOLD OUT!)
      </button>

      {/* Before vs After Section */}
      <h2 className="text-3xl font-bold underline my-8 text-yellow-300">Before vs. After Attending the Motivational and Memory Power Seminar for Families</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-4">
        {beforeAfter.map((item, index) => (
          <div key={index} className="flex justify-between items-center border border-yellow-500 rounded-lg p-4 bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex-1 text-center">
              <p className="font-semibold">Before Attending:</p>
              <p>{item.before}</p>
            </div>
            <div className="flex-1 text-center border-l border-yellow-500 pl-4">
              <p className="font-semibold">After Attending:</p>
              <p>{item.after}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Links for Parents */}
      <h2 className="text-3xl font-bold underline my-8 text-yellow-300">Parents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {videoLinksParents.map((link, index) => (
          <div key={index} className="border border-yellow-500 rounded-lg p-4 bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
              Watch Video {index + 1}
            </a>
          </div>
        ))}
      </div>

      {/* Video Links for Students */}
      <h2 className="text-3xl font-bold underline my-8 text-yellow-300">Students</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {videoLinksStudents.map((link, index) => (
          <div key={index} className="border border-yellow-500 rounded-lg p-4 bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
              Watch Video {index + 1}
            </a>
          </div>
        ))}
      </div>

      <button className="mt-8 bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition duration-200 ease-in">
        Reserve Your Free Seats Now (Before it is SOLD OUT!)
      </button>
      <p className="text-lg text-center mb-8">
        🌟 Transform your life in just 2 hours and be part of a movement that matters!
      </p>
    </div>
  );
};

export default SeminarDetails;
