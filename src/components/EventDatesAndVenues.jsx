import React from 'react';

const EventDatesAndVenues = () => {
  const events = [
    {
      date: "22nd November 2024",
      day: "Friday",
      time: "8 PM – 10 PM",
      venue: "Town Hall, Sector-17, Gandhinagar, Gujarat 382017"
    },
    {
      date: "24th November 2024",
      day: "Sunday",
      time: "8 PM – 10 PM",
      venue: "Town Hall, Sector-17, Gandhinagar, Gujarat 382017"
    },
    {
      date: "27th November 2024",
      day: "Wednesday",
      time: "8 PM – 10 PM",
      venue: "Shyama Prasad Mukherjee Auditorium, RTO Rd, Ramol, Ahmedabad"
    },
    {
      date: "29th November 2024",
      day: "Friday",
      time: "8 PM – 10 PM",
      venue: "Rukmani Ben Bhavsar AC Hall, 16, Ram Nagar, Sabarmati, Ahmedabad"
    },
    {
      date: "1st December 2024",
      day: "Sunday",
      time: "8 PM – 10 PM",
      venue: "Saheed Mangal Pandey Auditorium, Nikol Gam Rd, Opp Shiromani Bungalows, Ahmedabad"
    },
    {
      date: "4th December 2024",
      day: "Wednesday",
      time: "8 PM – 10 PM",
      venue: "Pandit Deendayal Auditorium, Rajpath Rangoli Rd, Bodakdev, Ahmedabad"
    },
    {
      date: "5th December 2024",
      day: "Thursday",
      time: "8 PM – 10 PM",
      venue: "H.K. Auditorium, HK College, Vishalpur, Ellis Bridge, Ahmedabad"
    },
    {
      date: "6th December 2024",
      day: "Friday",
      time: "8 PM – 10 PM",
      venue: "H.K. Auditorium, HK College, Vishalpur, Ellis Bridge, Ahmedabad"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold underline mb-4">
          Choose Your Date and Venue
        </h1>
        <p className="text-lg">Join us for an unforgettable experience!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <h2 className="text-xl font-bold text-yellow-400">{event.date}</h2>
            <p className="text-lg"><strong>Day:</strong> {event.day}</p>
            <p className="text-lg"><strong>Time:</strong> {event.time}</p>
            <p className="text-lg"><strong>Venue:</strong> {event.venue}</p>
            <button className="mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-md transition-transform transform hover:bg-yellow-400 hover:scale-105">
              Book Your Seat
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg">
          🎥 Get Inspired: Watch the <a href="https://www.youtube.com/watch?v=oBkfYQYPNu0" className="text-yellow-400 underline" target="_blank" rel="noopener noreferrer">Sajan Shah SOL Video</a>
        </p>
      </div>

      <p className="mt-4 text-lg font-semibold text-center">
        This is more than just an event—it’s a movement. Join us with your family and experience the transformation! 🌟
      </p>
    </div>
  );
};

export default EventDatesAndVenues;
