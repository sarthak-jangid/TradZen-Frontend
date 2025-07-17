import React from "react";

export default function Team() {
  return (
    <div
      className="container pt-5 mb-5 pb-5"
      style={{
        display: "block",
        color: "#424242",
      }}
    >
      <h2 className="m-5 mb-3 text-center">People</h2>

      <div className="row ">
        <div className="col-5 mt-5 text-center ">
          <div
            style={{
              marginLeft: "30%",
              width: "75%",
            }}
          >
            <img src="media\images\nithinKamath.jpg" alt="CEO-Image" style={{
              borderRadius:"50%",
              width:"77%",
              marginBottom:"1rem"
            }} />
            <h4>Nithin Kamath</h4>
            <p className="left-para">Founder, CEO</p>
          </div>
        </div>
        <div className="col mt-5 ">
          <div
            style={{
              width: "75%",
              marginLeft:"6.7%"
            }}
          >
            <p className="right-para">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className="right-para">
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p className="right-para">Playing basketball is his zen.</p>
            <p>
              Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
              <a href="#">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
