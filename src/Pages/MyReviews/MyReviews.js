import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import Review from "./Review";
import { useNavigate } from "react-router-dom";

const MyReviews = () => {
  const navigate = useNavigate();
  const { user, loading, setLoading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [currentReviews, setCurrentReviews] = useState(reviews);
  useEffect(() => {
    fetch(`https://gmb-server.vercel.app/reviews?uid=${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);
  const handleDeleteReview = (data) => {
    const confirm = window.confirm("Do you want to delete this review?");
    if (confirm) {
      fetch(`https://gmb-server.vercel.app/reviews/${data._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = currentReviews.filter((d) => d._id !== data._id);
          setCurrentReviews(remaining);
          navigate("/");
        });
    }
  };
  console.log(currentReviews);
  return (
    <div className="py-4">
      <h2 className="text-5xl mb-4 text-center">My reviews</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Comment's category</th>
              <th>Comment</th>
              <th>user</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Review></Review>
            {reviews.map((currentReview) => (
              <Review
                key={currentReview._id}
                currentReview={currentReview}
                handleDeleteReview={handleDeleteReview}
              ></Review>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
