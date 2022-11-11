import React, { useContext, useEffect, useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { useLoaderData, Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";
import Review from "./Review";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const serviceDetails = useLoaderData();
  // console.log(serviceDetails);
  const { category, titleImg, description, price, rating, _id } =
    serviceDetails;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://gmb-server.vercel.app/reviews?reviewId=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const review = {
      reviewId: _id,
      userName: user.displayName,
      comment,
    };
    fetch("https://gmb-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      });
  };
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
              {reviews.map((review) => (
                <Review key={review._id} review={review}></Review>
              ))}
            </div>
            <div className="my-4 mx-auto">
              {user?.uid ? (
                <div className="form-control">
                  <form onSubmit={handleReview} className="input-group">
                    <input
                      type="text"
                      name="comment"
                      placeholder="Write Your review"
                      className="input input-bordered"
                    />
                    <button className="btn btn-square">
                      <FaArrowRight />
                    </button>
                  </form>
                </div>
              ) : (
                <Link to="/login" className="text-info">
                  Sign In to write your review
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
