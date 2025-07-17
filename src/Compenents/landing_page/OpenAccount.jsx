import React from "react";
import { Link } from "react-router-dom";

export default function OpenAccount() {
  const token = localStorage.getItem("token");

  return (
    <div className="container mt-5 mb-5 ">
      {!token && (
        <div className="row text-center">
          <h1
            style={{
              color: "#424242",
            }}
          >
            Open a Zerodha account
          </h1>
          <p className="fs-5 mt-2">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <Link
            to={"/signup"}
            className="btn btn-primary mt-4 fs-5 p-2 "
            style={{ width: "15%", margin: "0 auto", fontWeight: "500" }}
          >
            Sign up for free
          </Link>
        </div>
      )}
    </div>
  );
}
