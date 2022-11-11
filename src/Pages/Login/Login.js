import React, { useContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import Lottie from "lottie-react";
import signInAnimation from "./50124-user-profile.json";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const { login, googleSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.messages));
  };
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .then((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 my-4">
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <Lottie animationData={signInAnimation}></Lottie>
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
                New to our site?
                <Link to="/register" className="label-text-alt link link-hover">
                  Register
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-success"
              >
                <FaGoogle className="mr-2"></FaGoogle>Google Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
