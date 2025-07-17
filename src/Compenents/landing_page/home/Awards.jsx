import React from "react";

export default function Awards() {
  return (
    <div className="container mt-5  ">
      <div className="row">
        <div className="col-6 p-5 ">
          <img src="media\images\largestBroker.svg" alt="" />
        </div>
        <div className="col-6 mt-5 ">
          <h1> Largest Stock broker in India </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            omnis incidunt accusantium alias, dolore minima quo molestiae
            provident architecto. Ut.{" "}
          </p>

          <div className="row p-5 ">
            <ul className="col-6  ">
              <li>
                <p>Futures and Options</p>{" "}
              </li>
              <li>
                <p>comomdity Derivatives </p>
              </li>
              <li>
                <p>Currency drivatives</p>
              </li>
            </ul>
            <ul className="col-6">
              <li>
                <p>Stocks and IPO's</p>{" "}
              </li>
              <li>
                <p>Direct mutual funds </p>
              </li>
              <li>
                <p>Bonds and Govt. Securities </p>
              </li>
            </ul>
          </div>
          <img
            src="media\images\pressLogos.png"
            alt=""
            style={{
              width: "90%",
              marginTop: "-7%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
