import React from "react";
import "./pricing.css";

export default function Pricing() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-5">
          <h1
            className="fs-2 mb-4"
            style={{
              lineHeight: "1.8",
              color: "#424242",
            }}
          >
            Unbeatable pricing
          </h1>
          <p
            style={{
              letterSpacing: 0.2,
            }}
          >
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="col-3" href="#" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </div>

        <div className="col-7 pricing-box-container">
          <div className="pricing-box">
            <img
              className="price-image"
              src="media\images\pricing0.svg"
              alt="/"
            />
            <p className="">
              Free account
              <br />
              opening
            </p>
          </div>
          <div className="pricing-box">
            <img
              className="price-image"
              src="media\images\pricing0.svg"
              alt=""
            />
            <p>
              Free equity delivery
              <br />
              and direct mutual funds
            </p>
          </div>
          <div className="pricing-box">
            <img
              className="price-image "
              src="https://zerodha.com/static/images/other-trades.svg"
              alt=""
            />
            <p style={{
              marginLeft:"20px"
            }} >
              Intraday and
              <br />
              F&amp;O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
