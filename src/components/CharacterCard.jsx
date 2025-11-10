import React, { useState } from "react";

function CharacterCard({ name, image, powerLevel }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-4 m-4 text-center w-60 transform transition duration-500 
                  ${hover ? "scale-105 shadow-yellow-400 shadow-2xl" : "scale-100"}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Imagen del personaje */}
      <img
        src={image}
        alt={name}
        className="rounded-lg w-full h-48 object-cover mb-2 border-2 border-yellow-400"
      />

      {/* Nombre */}
      <h2 className="text-xl font-bold text-black">{name}</h2>

      {/* Barra de poder */}
      <div className="relative h-3 w-full bg-gray-200 rounded-full mt-3 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-3 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full transition-all duration-700"
          style={{ width: hover ? `${Math.min(powerLevel, 100)}%` : "0%" }}
        ></div>
      </div>

      {/* Texto de Power Level */}
      <p className="text-gray-700 mt-2">Power Level: {powerLevel}%</p>
    </div>
  );
}

export default CharacterCard;
