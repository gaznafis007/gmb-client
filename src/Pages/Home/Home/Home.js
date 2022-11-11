import React from "react";
import Carousel from "../Carousel/Carousel";
import Services from "../Services/Services";
import Feedback from "./Feedback/Feedback";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Services />
      <Feedback />
    </div>
  );
};

export default Home;
