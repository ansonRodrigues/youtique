import React from "react";
import Hero from "./components/Hero";
import SignatureCollections from "./components/SignatureCollections";
import NewArrivals from "./components/NewArrivals";

const Home = () => {
  return (
    <div>
      <Hero />
      <SignatureCollections />
      <NewArrivals />
    </div>
  );
};

export default Home;
