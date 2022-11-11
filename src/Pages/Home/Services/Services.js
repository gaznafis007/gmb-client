import React, { useEffect, useState } from "react";
import CardService from "./CardService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://gmb-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-8">
      <h2 className="text-6xl text-blue-500 text-center">
        Service Through Lens
      </h2>
      <div className=" ml-20 md:ml-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <CardService key={service._id} service={service}></CardService>
        ))}
      </div>
      <button className="btn btn-primary my-6 mx-auto block">
        Load All services
      </button>
    </div>
  );
};

export default Services;
