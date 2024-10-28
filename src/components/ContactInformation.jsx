import React from 'react';

const ContactInformation = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-yellow-300 mb-6">Contact Information</h2>

      <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-yellow-200 mb-4">Head Office</h3>
        <p className="flex items-center mb-2">
          <span className="text-yellow-300 mr-2">📍</span>
          8 Deepawali Centre, Opp. Old High Court, Income Tax Under Bridge, Ashram Road, Ahmedabad – 380014
        </p>
      </div>


      <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-yellow-200 mb-4">Branch Offices</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-yellow-300">Mumbai:</h4>
            <p className="flex items-center">
              <span className="text-yellow-300 mr-2">📍</span>
              Live to Inspire, 88, 8th Floor, B Wing, Mittal Towers, Nariman Point, Mumbai – 400021
            </p>
          </div>
          <div>
            <h4 className="font-bold text-yellow-300">Delhi:</h4>
            <p className="flex items-center">
              <span className="text-yellow-300 mr-2">📍</span>
              Ahimsa Vishwa Bharti, 63/1, Old Rajinder Nagar, Near Karol Bagh Metro Station, New Delhi – 110060
            </p>
          </div>
          <div>
            <h4 className="font-bold text-yellow-300">New York:</h4>
            <p className="flex items-center">
              <span className="text-yellow-300 mr-2">📍</span>
              218 Webster Avenue, Brooklyn, New York – 11230
            </p>
          </div>
          <div>
            <h4 className="font-bold text-yellow-300">Australia:</h4>
            <p className="flex items-center">
              <span className="text-yellow-300 mr-2">📍</span>
              1A Launder Street, Hawthorn, Melbourne, Victoria – 3122
            </p>
          </div>
        </div>
      </div>

      {/* Queries and Support Section */}
      <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-yellow-200 mb-4">For Queries or Support</h3>
        <p className="text-yellow-300">Feel free to contact our team:</p>
        <ul className="list-disc list-inside mt-2">
          <li className="flex items-center">
            <span className="text-yellow-300 mr-2">📞</span> Sneha – 851 136 3376
          </li>
          <li className="flex items-center">
            <span className="text-yellow-300 mr-2">📞</span> Rika – 942 686 1925
          </li>
          <li className="flex items-center">
            <span className="text-yellow-300 mr-2">📞</span> Ritu – 999 804 6351
          </li>
          <li className="flex items-center">
            <span className="text-yellow-300 mr-2">📞</span> Prachi – 722 788 7909
          </li>
        </ul>
        <p className="mt-4">We are here to assist you!</p>
      </div>

      {/* Follow Us Section */}
      <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-yellow-200 mb-4">Follow Us</h3>
        <p className="flex items-center mb-2">
          <span className="text-yellow-300 mr-2">📱</span> Number: 8511363376
        </p>
        <p className="flex items-center mb-2">
          <span className="text-yellow-300 mr-2">📸</span> Instagram: <a href="https://www.instagram.com/sajan_shahh" className="text-yellow-300 underline">sajan_shahh</a>
        </p>
        <p className="flex items-center mb-2">
          <span className="text-yellow-300 mr-2">🐦</span> Twitter: <a href="https://twitter.com/sajanofficial" className="text-yellow-300 underline">@sajanofficial</a>
        </p>
        <p className="flex items-center mb-2">
          <span className="text-yellow-300 mr-2">📹</span> YouTube: <a href="https://www.youtube.com/channel/SajanShah" className="text-yellow-300 underline">Sajan Shah</a>
        </p>
      </div>

      <blockquote className="mt-6 italic text-center border-l-4 border-yellow-300 pl-4 py-2">
        “We look forward to connecting with you and helping you on your journey!”
      </blockquote>
    </div>
  );
};

export default ContactInformation;
