import React from "react";

export default function Hero() {  
  return (
    <div
      className="container pt-5  "
      style={{
        position: "relative",
        width: "1100px",
        maxWidth: "100%",
        boxSizing: "border-box",
        color: "#424242",
      }}
    >
      <div className="row text-center border-bottom m-5 p-5">
        <h1 className="text-center">Charges</h1>
      <p
        className="text-center mt-2 text-muted"
        style={{
          fontSize: "1.4rem",
          color: "#9B9B9B",
        }}
      >
        List of all charges and taxes
      </p>
      </div>

      <div className="row pt-5 pb-5">
        <div className="col-4 text-center ">
          <img
            src="media\images\pricingEquity.svg"
            alt=""
            style={{
              marginBottom: "15px",
              width: "250px",
            }}
          />
          <h2
            style={{
              fontSize: "1.75rem",
              lineHeight: "1.6",
            }}
          >
            Free equity delivery
          </h2>
          <p
            className="text-muted"
            style={{
              color: "#666",
            }}
          >
            All equity delivery investments (NSE, BSE), <br /> are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
          <div className="col-4 text-center  -5">
          <img
            src="media\images\intradayTrades.svg"
            alt=""
            style={{
              marginBottom: "15px",
              width: "250px",
            }}
          />
          <h2
            style={{
              fontSize: "1.75rem",
              lineHeight: "1.6",
            }}
          >
            Intraday and F&O trades
          </h2>
          <p
            className="text-muted"
            style={{
              color: "#666",
            }}
          >
           Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
          <div className="col-4 text-center -5">
          <img
            src="media\images\pricingEquity.svg"
            alt=""
            style={{
              marginBottom: "15px",
              width: "250px",
            }}
          />
          <h2
            style={{
              fontSize: "1.75rem",
              lineHeight: "1.6",
            }}
          >
           Free direct MF
          </h2>
          <p
            className="text-muted"
            style={{
              color: "#666",
            }}
          >
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
      
    </div>
  );
}
