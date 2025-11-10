import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black bg-opacity-80 py-4 shadow-md flex justify-center space-x-6">
      <Link to="/" className="text-yellow-400 font-bold hover:text-yellow-300">Home</Link>
      <Link to="/about" className="text-yellow-400 font-bold hover:text-yellow-300">About</Link>
      <Link to="/saga-namek" className="text-yellow-400 font-bold hover:text-yellow-300">Saga Namek</Link>
    </nav>
  );
}

export default Navbar;
