import React from "react";
import "./hero.css";
export default function Hero() {
  return (
    <div
      className="container pt-5"
      style={{
        display: "block",
        color: "#424242",
      }}
    >
      <h2 className="m-5 p-5 text-center">
        We pioneered the discount broking model in India. <br />
        Now, we are breaking ground with our technology.
      </h2>

      <div className="row border-top">
        <div className="col mt-5  p-5 pb-0">
          <div
            style={{
              marginLeft: "30%",
              width: "75%",
            }}
          >
            <p className="left-para">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p className="left-para">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in <br /> India.
            </p>
            <p className="left-para">
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment <br /> platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
        </div>
        <div className="col mt-5 p-5 pb-0">
          <div
            style={{
              width: "75%",
            }}
          >
            <p className="right-para">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p className="right-para">
              <a href="#"style={{
                textDecoration:"none"
              }}>Rainmatter</a>, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets.
            </p>
            <p className="right-para">
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product
              philosophies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
