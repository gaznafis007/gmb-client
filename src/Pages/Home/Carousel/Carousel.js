import React from "react";
import "./Carousel.css";
import Slider from "./Slider";
const Carousel = () => {
  const imgPosition = {
    objectFit: "cover",
    objectPosition: "center",
  };
  const sliderData = [
    {
      id: 1,
      prev: 3,
      next: 2,
      img: "https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      prev: 1,
      next: 3,
      img: "https://images.pexels.com/photos/827209/pexels-photo-827209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      prev: 2,
      next: 1,
      img: "https://images.pexels.com/photos/1529662/pexels-photo-1529662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="carousel w-full">
      {sliderData.map((slider) => (
        <Slider key={slider.id} slider={slider}></Slider>
      ))}
    </div>
  );
};

export default Carousel;
