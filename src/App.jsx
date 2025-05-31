import React from "react";
import CareDuel from "./Component/CareDuel";
import Award from "./Component/Award";

const App = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#424242] font-lora w-">
      {/* Hero Placeholder */}
      <header className="py-20 text-center bg-white shadow-md">
        <h1 className="text-4xl font-playfair text-[#E91E63]">LosAngelesLore.com</h1>
        <p className="mt-2 text-lg">Where stories of the city come alive</p>
      </header>

      {/* CareDuel Banner */}
      <CareDuel/>
      {/* Awards Panels */}
      <Award/>
    </div>
  );
};

export default App;
