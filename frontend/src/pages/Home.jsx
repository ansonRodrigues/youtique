import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SignatureCollections from "../components/SignatureCollections";
import ProcessSpotlight from "../components/ProcessSpotlight";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <div>
      <Hero />
      <SignatureCollections />
      <NewArrivals />
      <Footer />
    </div>
  );
};

export default Home;
