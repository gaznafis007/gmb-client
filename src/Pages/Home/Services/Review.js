import React from "react";

const Review = ({ review }) => {
  return (
    <div className="bg-base-300 rounded-lg p-4">
      <h4 className="text-lg font-semibold">{review.userName}</h4>
      <p className="mt-2">{review.comment}</p>
    </div>
  );
};

export default Review;
