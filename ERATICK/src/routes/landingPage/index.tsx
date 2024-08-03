import React from "react";
import Hero from "../../components/hero";
import About from "../../components/aboutSection";
import Products from "../../components/productSection";
import Gallery from "../../components/gallery";
import Review from "../../components/reviewSection";

const index = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Review />
    </>
  );
};

export default index;
