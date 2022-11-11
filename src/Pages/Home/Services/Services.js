import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";
import CardService from "./CardService";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);
  useEffect(() => {
    fetch("https://gmb-server.vercel.app/services/limited")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setDataLoading(false);
      });
  }, []);
  const handleLoadMore = () => {
    fetch("https://gmb-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoaded(true);
      });
  };
  const handleShowless = () => {
    fetch("https://gmb-server.vercel.app/services/limited")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoaded(false);
      });
  };
  return (
    <div className="my-8">
      <h2 className="text-6xl text-blue-500 text-center">
        Service Through Lens
      </h2>
      {dataLoading && <h2 className="text-2xl text-center">Loading...</h2>}
      <div className=" ml-20 md:ml-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <CardService key={service._id} service={service}></CardService>
        ))}
      </div>
      <button
        onClick={loaded ? handleShowless : handleLoadMore}
        className="btn btn-primary my-6 mx-auto block"
      >
        {loaded ? "Show Less" : "Load All services"}
      </button>
    </div>
  );
};

export default Services;
