import React from "react";

function CharacterCard({ name, image, powerLevel }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 m-4 text-center w-60 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img
        src={image}
        alt={name}
        className="rounded-lg w-full h-48 object-cover mb-2"
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">Power Level: {powerLevel}</p>
      <button className="mt-3 px-4 py-2 bg-yellow-400 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300">
        ¡Ver más!
      </button>
    </div>
  );
}

export default CharacterCard;
