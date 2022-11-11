import React from "react";
import { useRouteError } from "react-router-dom";
import errorAnimation from "./90333-error.json";
import Lottie from "lottie-react";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="w-3/4 mx-auto">
      <h2 className="text-4xl text-red-500 font-semibold my-4 text-center">
        An Error Occured
      </h2>
      <div className="h-1/2 w-1/2 mx-auto">
        <Lottie animationData={errorAnimation}></Lottie>
      </div>
      <p className="text-red-500 text-center text-3xl my-4">
        {error.status}
        <br />
        {error.statusText}
      </p>
    </div>
  );
};

export default ErrorPage;
