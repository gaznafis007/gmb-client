import React from "react";
import { useNavigate } from "react-router-dom";

const CardService = ({ service }) => {
  const navigate = useNavigate();
  const { _id, category, titleImg, price, rating, description } = service;
  const handleMore = (_id) => {
    navigate(`/services/${_id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={titleImg} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{category}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button
            onClick={() => handleMore(_id)}
            className="btn btn-outline btn-primary"
          >
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardService;
