import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/hero";
import Info from "../Components/Info";
import About from "../Components/About";
import TakeExam from "../Components/TakeExam";
import Reviews from "../Components/Reviews";
import Teams from "../Components/Teams";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <TakeExam />
      <Reviews />
      <Teams />
      <Footer />
    </div>
  );
}

export default Home;
