import React from "react";

export default function Education() {
  return (
    <div className="container p-5">
      <div className="row   ">
        <div className="col-6 ">
          <img className="" src="media\images\education.svg" alt="/" style={{
            width:"75%",
          }} />
        </div>
        <div className="col-6">
          <h1
            className="fs-2 mb-4"
            style={{
              lineHeight: "1.8",
              color: "#424242",
            }}
          >
            Free and open market education
          </h1>
          <p
            className=" mb-4"
            style={{
              letterSpacing: 0.2,
              fontSize: "1.04rem",
            }}
          >
            Varsity, the largest online stock market education book in the world{" "}
            <br />
            covering everything from the basics to advanced trading.
          </p>
          <a className="col-3  " href="#" style={{ textDecoration: "none" }}>
            Varsity <i className="fa-solid fa-arrow-right"></i>{" "}
          </a>

          <p
            className="mt-5 mb-4"
            style={{
              letterSpacing: 0.2,
              fontSize: "1.04rem",
            }}
          >
            TradingQ&A, the most active trading and investment community in{" "}
            <br />
            India for all your market related queries.
          </p>
          <a className="col-3" href="#" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
