import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/card";
import data from "./components/data";

export default function App() {
  const information = data.map((info) => {
    return <Card info={info} />;
  });

  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <section className="cards-list">{information}</section>
    </div>
  );
}
