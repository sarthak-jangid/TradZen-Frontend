import React from "react";

export default function Hero() {
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
          TradZen Products
        </h1>
        <p
          style={{
            fontSize: "1.4rem",
            fontWeight: 400,
            marginBottom: 0,
          }}
        >
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="mt-2">
          Check out our{" "}
          <span
            style={{
              textDecoration: "none",
              color: "blue",
            }}
            href="#"
          >
            investment offerings
          </span>{" "}
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
