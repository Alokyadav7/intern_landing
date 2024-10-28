import React, { useRef } from 'react';

// Sample data for schools
const schools = [
  { name: "Holy Cross School", image: "https://example.com/holy_cross.jpg" },
  { name: "St. Paul School", image: "https://example.com/st_paul.jpg" },
  { name: "Mount Litera Zee School", image: "https://example.com/mount_litera.jpg" },
  { name: "St. Xavier's School", image: "https://example.com/st_xaviers.jpg" },
  { name: "Podar International School", image: "https://example.com/podar.jpg" },
  { name: "Apple Global School", image: "https://example.com/apple_global.jpg" },
  { name: "Adani Public School", image: "https://example.com/adani_public.jpg" },
  { name: "P.P. Savani Cambridge School", image: "https://example.com/pp_savani.jpg" },
  { name: "St. Francis School", image: "https://example.com/st_francis.jpg" },
  { name: "GD Goenka School", image: "https://example.com/gd_goenka.jpg" },
  { name: "Mount Carmel", image: "https://example.com/mount_carmel.jpg" },
  { name: "Anand Niketan School", image: "https://example.com/anand_niketan.jpg" },
  { name: "Delhi Public School", image: "https://example.com/delhi_public.jpg" },
];

const SchoolsScroller = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -768, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 768, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-800 text-white p-8 relative">
      <h2 className="text-3xl font-bold text-yellow-300 mb-4 text-center">Schools in Scroller</h2>

      {/* Left and Right Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 bg-yellow-500 text-black rounded-full p-2 shadow-lg hover:bg-yellow-400"
      >
        &lt;
      </button>
      
      <button
        onClick={scrollRight}
        className="absolute right-4 bg-yellow-500 text-black rounded-full p-2 shadow-lg hover:bg-yellow-400"
      >
        &gt;
      </button>

      {/* School Scroller */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll whitespace-nowrap scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for Firefox and IE
      >
        {schools.map((school, index) => (
          <div key={index} className="inline-block mx-4 bg-gray-900 rounded-lg shadow-lg w-64">
            <img
              src={school.image}
              alt={school.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{school.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Reserve Your Free Seats Now</h2>
        <p className="mb-4">🌟 Transform your life in just 2 hours and be part of a movement that matters!</p>
      </div>

      {/* Contact Details Section */}
      <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">Contact Us</h2>
        <p className="text-lg mb-6">For any assistance related to tickets or other support, feel free to reach out to our team:</p>
        <div className="flex flex-wrap justify-between">
          <div className="bg-gray-800 rounded-lg p-4 shadow-md mb-2 w-5/12 text-center">
            <p className="font-semibold">📞 Sneha</p>
            <p className="text-sm">851 136 3376</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 shadow-md mb-2 w-5/12 text-center">
            <p className="font-semibold">📞 Rika</p>
            <p className="text-sm">942 686 1925</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 shadow-md mb-2 w-5/12 text-center">
            <p className="font-semibold">📞 Ritu</p>
            <p className="text-sm">999 804 6351</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 shadow-md mb-2 w-5/12 text-center">
            <p className="font-semibold">📞 Prachi</p>
            <p className="text-sm">722 788 7909</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Who can join?</h2>
      <p className="mb-4">Families with kids from grade 4th to 12th.</p>
      <p className="italic">Ab seekhiye poori kitab ko ek din mein yaad rakhne ka rahasya.</p>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Reserve Your Free Seats Now</h2>
        <p className="mb-4">🌟 Transform your life in just 2 hours and be part of a movement that matters!</p>
      </div>
    </div>
  );
};

export default SchoolsScroller;
