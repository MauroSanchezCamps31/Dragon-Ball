import React, { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import gokuImage from "../assets/goku.png";
import vegetaImage from "../assets/vegeta.png";
import nappaImage from "../assets/nappa.png";
import raditzImage from "../assets/raditz.png";

const saiyanCharacters = [
  { name: "Goku", image: gokuImage, powerLevel: 95 },
  { name: "Vegeta", image: vegetaImage, powerLevel: 90 },
  { name: "Nappa", image: nappaImage, powerLevel: 75 },
  { name: "Raditz", image: raditzImage, powerLevel: 60 },
];

function SagaSaiyan() {
  const [characters, setCharacters] = useState(saiyanCharacters);
  const [sorted, setSorted] = useState(false);

  const sortByPower = () => {
    const sortedChars = [...characters].sort((a, b) =>
      sorted ? a.powerLevel - b.powerLevel : b.powerLevel - a.powerLevel
    );
    setCharacters(sortedChars);
    setSorted(!sorted);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold text-yellow-300 mb-4">Saga Saiyan</h2>
      <p className="text-white mb-6 text-center max-w-2xl">
        En esta saga, los Saiyans llegan a la Tierra buscando destruirla.
        ¿Quién es el más fuerte? 🔥 ¡Haz clic para descubrirlo!
      </p>

      <button
        onClick={sortByPower}
        className="mb-8 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
      >
        {sorted ? "Ordenar: Más Débil → Más Fuerte" : "Ordenar: Más Fuerte → Más Débil"}
      </button>

      <div className="flex flex-wrap justify-center">
        {characters.map((char, index) => (
          <div
            key={char.name}
            className="transition-transform duration-500 ease-in-out transform hover:scale-105"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <CharacterCard
              name={char.name}
              image={char.image}
              powerLevel={char.powerLevel}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 w-full max-w-md">
        <h3 className="text-2xl text-yellow-200 font-bold mb-3 text-center">
          🔹 Ranking de Poder
        </h3>
        <ul className="bg-black bg-opacity-50 rounded-xl p-4">
          {characters.map((char, i) => (
            <li
              key={char.name}
              className="flex justify-between py-2 px-4 border-b border-gray-600 last:border-none"
            >
              <span>{i + 1}. {char.name}</span>
              <span className="text-yellow-400 font-semibold">{char.powerLevel}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SagaSaiyan;
