import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AiTools from "../components/AiTools";
import Testimonial from "../components/Testimonial";
import Subscription from "../components/Subscription";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <AiTools/>
      <Testimonial/>
      <Subscription />
    </>
  );
};

export default Home;
