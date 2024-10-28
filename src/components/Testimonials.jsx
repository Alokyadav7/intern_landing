import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Naman Agrawal (IIM Rotak)",
      text: "“From Amravati to Africa—my dream of flying an aircraft took flight, and today I am a Commercial Pilot, all thanks to Sajan Sir. It began in 8th grade during a school session at my alma mater, the School of Scholar.”",
    },
    {
      name: "Soham – Pilot & IIM Graduate",
      text: "“Starting from 6th grade, I began to understand and learn from him. Today, after studying at IIM and completing an internship at the World Bank, I owe this rare achievement to the vision Sajan Sir instilled in me.”",
    },
    {
      name: "Sameer Sata – Special Projects Group, Reliance Industries Limited",
      text: "“I love watching him live. His energy to enlighten and encourage people to achieve their optimum potential is unmatchable.”",
    },
    {
      name: "Dr. Jigesh Vyas – MS, DNB (Gen Surgery), DNB (Genitourinary Surgery)",
      text: "“Sajan has always impressed me with his analytical power and ability to suggest lucid solutions to particular issues.”",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold underline mb-4">
          Testimonials – Transforming Dreams into Reality
        </h1>
        <p className="text-lg">Hear from those who have experienced the transformation!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg">
            <p className="text-lg italic mb-4">"{testimonial.text}"</p>
            <p className="text-right font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-md hover:bg-yellow-400">
          Reserve Your Free Seats Now
        </button>
        <p className="mt-4">🌟 Transform your life in just 2 hours and be part of a movement that matters!</p>
      </div>
    </div>
  );
};

export default Testimonials;
