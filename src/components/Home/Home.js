import React from "react";
import ImageSlider from "./Image_Slider/ImageSlider";
import CardSlider from "./CardSlider/CardSlider";
import NasaLibrary from "./NasaApi/NasaLibrary";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <CardSlider />
      <NasaLibrary />
    </div>
  );
};

export default Home;
