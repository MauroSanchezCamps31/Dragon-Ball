import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass =
    "text-yellow-400 font-bold hover:text-yellow-300 transition-colors duration-300";

  return (
    <nav className="bg-black bg-opacity-80 py-4 shadow-md flex justify-center space-x-6 sticky top-0 z-50">
      <NavLink to="/" className={linkClass}>Home</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
      <NavLink to="/saga-namek" className={linkClass}>Saga Namek</NavLink>
      <NavLink to="/saga-saiyan" className={linkClass}>Saga Saiyan</NavLink>
    </nav>
  );
}

export default Navbar;
