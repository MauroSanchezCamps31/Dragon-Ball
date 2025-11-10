import React from "react";

function CharacterCard({ name, image, powerLevel }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 m-4 text-center w-60">
      <img src={image} alt={name} className="rounded-lg w-full h-48 object-cover" />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-700">Power Level: {powerLevel}</p>
    </div>
  );
}

export default CharacterCard;
