import React from 'react';

const FAQSection = () => {
  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-yellow-300 mb-6">Rules and Regulations</h2>
      <p className="mb-4">Please adhere to the following rules to ensure a smooth and enjoyable experience:</p>
      
      <ul className="list-disc list-inside space-y-4">
        <li className="flex items-start">
          <span className="bg-yellow-300 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
          Arrive on time and remain for the entire session.
        </li>
        <li className="flex items-start">
          <span className="bg-yellow-300 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
          Respect the venue and maintain cleanliness.
        </li>
        <li className="flex items-start">
          <span className="bg-yellow-300 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
          Engage positively with other attendees and staff.
        </li>
        <li className="flex items-start">
          <span className="bg-yellow-300 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
          Follow all instructions given by the event staff.
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-yellow-300 mt-8 mb-4">Frequently Asked Questions (FAQ)</h2>
      <div className="space-y-6">
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">1. When Should I Arrive, and How Do I Get a Good Seat?</h3>
          <p>Arrive 30 minutes early to beat the rush, enjoy smooth entry, and secure the best seat—first-come, first-serve. The program starts sharp at 8 PM, so don’t miss a second!</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">2. Is Registration Mandatory, and Can I Transfer It?</h3>
          <p>Yes, registration is mandatory for entry. Ensure you register in advance, as entry without registration is not allowed. Registrations are personal and non-transferable.</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">3. Is There Parking, and How Do I Reach My Seat?</h3>
          <p>We offer special parking facilities—arrive on time to avoid hassle. Our team will assist you in finding your seat so you can relax and absorb the event vibes.</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">4. What Should I Bring and Wear?</h3>
          <p>Bring a pen and notebook to jot down insights—handwritten notes last longer! Wear comfortable attire to stay focused and enjoy the event fully. Carry a water bottle to stay hydrated.</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">5. Can I Engage with Sajan Shah During the Event?</h3>
          <p>Absolutely! Participate in the Q&A session with Sajan Shah and ask questions that matter most to you.</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">6. What Are the Program Guidelines?</h3>
          <p>The event will be in Hindi. Enjoy the experience with your family at any of the available venues. Have dinner an hour before to stay nourished and attentive throughout.</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">7. Who Manages the Event, and How Can I Get Help?</h3>
          <p>The event is managed solely by the Sajan Shah Foundation. For support with tickets or other queries, contact our team:</p>
          <ul className="list-none">
            <li>📞 Sneha – 851 136 3376</li>
            <li>📞 Rika – 942 686 1925</li>
            <li>📞 Ritu – 999 804 6351</li>
            <li>📞 Prachi – 722 788 7909</li>
          </ul>
        </div>
      </div>

      <blockquote className="mt-8 italic text-center border-l-4 border-yellow-300 pl-4">
        “Follow these steps, and I promise—these 2 hours will leave an unforgettable impact on your life.”
      </blockquote>
      <p className="mt-4 text-center">"Learn once, apply for life" is not just a motto—it’s a mission. This experience will inspire personal growth, academic excellence, and stronger family connections.</p>
      <p className="mt-4 text-center font-bold">Let’s make this evening extraordinary. See you there!</p>
      <p className="mt-4 text-center font-semibold">- Sajan Shah</p>
      <p className="mt-8 text-center font-semibold">“Jo parivar saath mein seekhta hai, wahi aage badhta hai.”</p>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Reserve Your Free Seats Now</h2>
        <p className="mb-4">🌟 Transform your life in just 2 hours and be part of a movement that matters!</p>
      </div>
    </div>
  );
};

export default FAQSection;
