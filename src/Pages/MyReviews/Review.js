import React from "react";

const Review = ({ review }) => {
  console.log(review);
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                className="w-10"
                src={
                  review?.titleImg
                    ? review.titleImg
                    : "https://www.analyticdesign.com/wp-content/uploads/2018/07/unnamed.gif"
                }
                alt="categoryImg"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {review?.userName ? review.userName : "null"}
            </div>
          </div>
        </div>
      </td>
      <td>{review?.comment ? review.comment : "no comment"}</td>
      <td>{review?.category ? review.category : "no sections"}</td>
    </tr>
  );
};

export default Review;
