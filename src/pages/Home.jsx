import React from "react";
import CharacterCard from "../components/CharacterCard";
import gokuImage from "../assets/goku.png";
import vegetaImage from "../assets/vegeta.png";
import piccoloImage from "../assets/piccolo.png";
import friezaImage from "../assets/frieza.png";

const characters = [
  { name: "Goku", image: gokuImage, powerLevel: "9001" },
  { name: "Vegeta", image: vegetaImage, powerLevel: "8500" },
  { name: "Piccolo", image: piccoloImage, powerLevel: "8000" },
  { name: "Frieza", image: friezaImage, powerLevel: "9500" },
];

function Home() {
  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold text-yellow-300 mb-8">Dragon Ball Universe</h2>
      <div className="flex flex-wrap justify-center">
        {characters.map((char) => (
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

export default Home;
