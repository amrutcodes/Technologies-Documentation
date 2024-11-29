import React from "react";

const TechCard = ({ name, desc, image }) => {
  return (
    <div className="bg-gradient-to-br from-teal-800 via-gray-800 to-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Card */}
      <img
        src={image}
        className="p-3 w-full h-40 rounded-lg mb-4 object-contain bg-gray-900"
        alt={name}
      />
      {/* Image */}
      <h3 className="text-center text-teal-300 font-semibold text-xl">
        {name}
      </h3>
      <p className="font-normal text-gray-300 text-sm my-2">{desc}</p>
    </div>
  );
};

export default TechCard;
