import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";

const Review = ({ currentReview, handleDeleteReview }) => {
  console.log(currentReview);
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                className="w-10"
                src={
                  currentReview?.titleImg
                    ? currentReview.titleImg
                    : "https://www.analyticdesign.com/wp-content/uploads/2018/07/unnamed.gif"
                }
                alt="categoryImg"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {currentReview?.userName ? currentReview.userName : "null"}
            </div>
          </div>
        </div>
      </td>
      <td>{currentReview?.comment ? currentReview.comment : "no comment"}</td>
      <td>
        {currentReview?.category ? currentReview.category : "no sections"}
      </td>
      <td>
        <button onClick={() => handleDeleteReview(currentReview)}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default Review;
