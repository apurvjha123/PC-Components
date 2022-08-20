import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../Redux/apiCalls";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    signup(dispatch, { username, email, password });
  };

  return (
    <>
      {/* component */}
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              placeholder="Username"
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              minLength={6}
              maxLength={10}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button
              onClick={handleClick}
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white bg-sky-500 hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a className="no-underline border-b border-grey-dark text-grey-dark">
                Terms of Service
              </a>{" "}
              and
              <a className="no-underline border-b border-grey-dark text-grey-dark">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link to="/login">
              <a className="no-underline border-b text-sky-400 px-3 border-blue text-blue">
                Log in
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
