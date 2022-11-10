import React from "react";
import "./Carousel.css";

const imgPosition = {
  objectFit: "contain",
  objectPosition: "center",
};
const Slider = ({ slider }) => {
  const { prev, id, next, img } = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="banner-gradient w-full">
        <img src={img} alt="slider-img" className="w-full imgPosition" />
      </div>
      <div className="absolute flex justify-end gap-2 transform -translate-y-1/2  left-32 top-1/3">
        <h2 className="text-6xl font-bold text-white leading-32">
          Where <br />
          Lens and Life <br />
          Sumerged
        </h2>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Slider;
