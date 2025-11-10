import React from "react";
import CharacterCard from "../components/CharacterCard";
import gokuImage from "../assets/goku.png";
import piccoloImage from "../assets/piccolo.png";
import friezaImage from "../assets/frieza.png";

const sagaCharacters = [
  { name: "Goku", image: gokuImage, powerLevel: "9001" },
  { name: "Piccolo", image: piccoloImage, powerLevel: "8000" },
  { name: "Frieza", image: friezaImage, powerLevel: "9500" },
];

function SagaNamek() {
  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold text-green-400 mb-8">Saga Namek</h2>
      <div className="flex flex-wrap justify-center">
        {sagaCharacters.map((char) => (
          <CharacterCard
            key={char.name}
            name={char.name}
            image={char.image}
            powerLevel={char.powerLevel}
          />
        ))}
      </div>
    </div>
  );
}

export default SagaNamek;
