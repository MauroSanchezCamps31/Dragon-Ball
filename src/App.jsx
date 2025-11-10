import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SagaNamek from "./pages/SagaNamek";
import SagaSaiyan from "./pages/SagaSaiyan";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-orange-500 to-red-600 text-white flex flex-col">
        <Header />
        <Navbar />
        <main className="flex-grow transition-all duration-500">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/saga-namek" element={<SagaNamek />} />
            <Route path="/saga-saiyan" element={<SagaSaiyan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
