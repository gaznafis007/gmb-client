import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  console.log(serviceDetails);
  const { category, titleImg, description, price, rating } = serviceDetails;
  return (
    <div className="py-8">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full flex-col lg:flex-row">
          <div
            className="hero min-h-screen w-full"
            style={{ backgroundImage: `url(${titleImg})` }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{category}</h1>
                <p className="mb-5">{description}</p>
                <p className="mb-5">Price: ${price}</p>
                <p className="mb-5">Rating: {rating}/5</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-5xl text-center font-semibold">
                Customers Reviews
              </h2>
              <div className="bg-base-300 rounded-lg p-4">
                <h4 className="text-lg">Name</h4>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  fuga dicta, necessitatibus vitae qui dolorum asperiores ipsum
                  minus architecto ut!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
