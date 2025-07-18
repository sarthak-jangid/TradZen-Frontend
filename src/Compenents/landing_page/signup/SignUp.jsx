import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isSigning, setIsSigning] = useState(false);
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("frontend work");
    setIsSigning(true);
    try {
      const { data } = await axios.post(
        "https://tradzen-backend-production.up.railway.app/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, token } = data;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", token);
        setTimeout(() => {
          window.location.href = "https://tradzen-dashboard.onrender.com"; //   Cross-app redirect
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      // console.log(error);
      setIsSigning(false);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        handleError(error.response.data.message); // backend error message
      } else {
        handleError("Something went wrong. Please try again.");
      }
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div
      className="container p-5 mt-0"
      style={{
        position: "relative",
        width: "1100px",
        maxWidth: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <div className="row">
        <div className="col-7">
          <div>
            <img className="mt-4" src="media\images\account_open.svg" alt="" />
          </div>
          <p className="mt-5 pt-3 m-4">
            By proceeding, you agree to the Zerodha&nbsp;
            <a
              style={{
                textDecoration: "none",
              }}
              href="https://zerodha.com/terms-and-conditions"
              target="_blank"
            >
              terms&nbsp;
            </a>
            &amp;&nbsp;
            <a
              style={{
                textDecoration: "none",
              }}
              href="https://zerodha.com/privacy-policy"
              target="_blank"
            >
              privacy policy
            </a>
          </p>
        </div>
        <div className="col-5 form-parent">
          <div className="form_container container p-5">
            <h2>Signup Account</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                  autoComplete="username"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  autoComplete="new-password"
                />
              </div>
              <button type="submit">
                {isSigning ? "Submiting" : "Submit"}
              </button>
              <span>
                Already have an account? <Link to={"/login"}>Login</Link>
              </span>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
