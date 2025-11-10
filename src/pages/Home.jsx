import React from "react";
import CharacterCard from "../components/CharacterCard";
import gokuImage from "../assets/goku.png";

function Home() {
  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold text-yellow-300 mb-6">Personajes</h2>
      <div className="flex flex-wrap justify-center">
        <CharacterCard name="Goku" image={gokuImage} powerLevel="9001+" />
        <CharacterCard name="Vegeta" image={gokuImage} powerLevel="8500" />
        {/* Puedes duplicar o agregar más personajes */}
      </div>
    </div>
  );
}

export default Home;
