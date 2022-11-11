import React from "react";

const Feedback = () => {
  return (
    <div>
      <h2 className="text-4xl text-center font-bold">Our Stats</h2>
      <div className="stats w-full my-4 bg-base-200 text-primary">
        <div className="stat">
          <div className="stat-title text-lg">Avg Events per month</div>
          <div className="stat-value">99+</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">book now</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-lg">Total Events</div>
          <div className="stat-value">1200+</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Previous Events</button>
            <button className="btn btn-sm ml-2">Upcoming Events</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
