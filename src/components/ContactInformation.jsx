import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
        {/* Embed Google Maps with additional styling */}
        <div className="mt-4">
          <iframe
            title="Head Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31105.69430885027!2d72.5616503384571!3d23.022505370964547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f58363cb8b%3A0xe001f78b8b51f39!2sDeepawali%20Centre!5e0!3m2!1sen!2sin!4v1698481367557!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        {/* Link to Google Maps */}
        <p className="mt-2">
          <a
            href="https://www.google.co.in/maps/search/8+Deepawali+Centre,+Opp.+Old+High+Court,+Income+Tax+Under+Bridge,+Ashram+Road,+Ahmedabad+%E2%80%93+380014/@23.0409434,72.5634484,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 underline"
          >
            Open in Google Maps
          </a>
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
      <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md text-center">
      <h3 className="text-3xl font-semibold text-yellow-200 mb-4">Follow Us</h3>

      <div className="flex justify-center space-x-6 items-center">
        <a 
          href="https://www.instagram.com/sajan_shahh" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center transition duration-300 transform hover:scale-110 hover:bg-yellow-300 rounded-full p-3">
          <FontAwesomeIcon icon={faInstagram} className="text-gray-900 h-8 w-8" />
        </a>

        <a 
          href="https://twitter.com/sajanofficial" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center transition duration-300 transform hover:scale-110 hover:bg-yellow-300 rounded-full p-3">
          <FontAwesomeIcon icon={faTwitter} className="text-gray-900 h-8 w-8" />
        </a>

        <a 
          href="https://www.youtube.com/channel/SajanShah" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center transition duration-300 transform hover:scale-110 hover:bg-yellow-300 rounded-full p-3">
          <FontAwesomeIcon icon={faYoutube} className="text-gray-900 h-8 w-8" />
        </a>
      </div>
    </div>
    
      <blockquote className="mt-6 italic text-center border-l-4 border-yellow-300 pl-4 py-2">
        “We look forward to connecting with you and helping you on your journey!”
      </blockquote>
    </div>
  );
};

export default ContactInformation;
