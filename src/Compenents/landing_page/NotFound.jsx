import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container pt-5 mb-5">
      <div className="text-center pt-4 ">
        <h1
          className="m-5 mb-0 p-5 pb-0 "
          style={{
            lineHeight: 0.7,
            fontSize: "2.75rem",
            color: "#424242",
          }}
        >
          404 ! Page Not Found
        </h1>
        <p
          style={{
            fontSize: "1.4rem",
            fontWeight: 400,
            marginBottom: 0,
          }}
        >
          Try Again
        </p>
        <p className="mt-2">
          Check out &nbsp;
          <Link
            style={{
              textDecoration: "none",
            }}
            to={"/"}
          >
            Home Page
          </Link>{" "}
          →
        </p>
      </div>
      <div
        style={{
          padding: "5rem 5rem 0 5rem",
          color: "gray",
        }}
      >
        <hr />
      </div>
    </div>
  );
}
