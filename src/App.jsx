import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-red-600 text-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
