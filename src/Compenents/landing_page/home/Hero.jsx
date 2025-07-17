import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const token = localStorage.getItem("token");
  return (
    <div className="container pt-5 mb-5 ">
      <div className="row text-center">
        <img
          className="p-5 mb-4"
          src="media\images\homeHero.png"
          alt="hero image"
        />
        {!token && (
          <div>
            <h1
              style={{
                color: "#424242",
              }}
            >
              Invest in everything
            </h1>
            <p className="fs-5 mt-2">
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>
            <Link
              to={"/signup"}
              className="btn btn-primary mt-4 fs-5 p-2 "
              style={{ width: "15%", margin: " 0 auto", fontWeight: "600" }}
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
