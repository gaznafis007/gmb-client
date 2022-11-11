import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import Review from "./Review";

const MyReviews = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(true);
  useEffect(() => {
    fetch(`https://gmb-server.vercel.app/reviews?uid=${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
        setReviewLoading(false);
      });
  }, []);
  console.log(user.uid);

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
            {reviews.map((review) => (
              <Review
                key={review._id}
                review={review}
                reviewLoading={reviewLoading}
              ></Review>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
