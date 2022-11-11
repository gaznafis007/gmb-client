import React, { useContext } from "react";
import Lottie from "lottie-react";
import registerAnimation from "./118046-lf20-oahmox5rjson.json";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser, getProfile, logOut } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        getProfile(name);
        logOut();
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 my-4">
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Register!</h1>
          <Lottie animationData={registerAnimation}></Lottie>
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                Already have and accout?
                <Link to="/login" className="label-text-alt link link-hover">
                  Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
