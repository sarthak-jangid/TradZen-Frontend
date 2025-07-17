import React from "react";

export default function Stats() {
  return (
    <div className="container  p-5 ">
      <div className="row p-5 ">
        <div className="col-5">
          <h1 className="fs-2 mb-5 ">Trust with confidence</h1>
          <h2 className="fs-5 mt-2 ">Customer-first always</h2>
          <p
            className="text-muted mt-3 "
            style={{
              lineHeight: "1.5",
              fontSize: "1.09vw",
            }}
          >
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="fs-5 mt-4">No spam or gimmicks</h2>
          <p
            className="text-muted mt-3"
            style={{
              lineHeight: "1.5",
              fontSize: "1.09vw",
            }}
          >
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-5 mt-4">The Zerodha universe</h2>
          <p
            className="text-muted mt-3"
            style={{
              lineHeight: "1.5",
              fontSize: "1.09vw",
            }}
          >
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 mt-4">Do better with money</h2>
          <p
            className="text-muted mt-3"
            style={{
              lineHeight: "1.5",
              fontSize: "1.09vw",
            }}
          >
            With initiatives like <a href="#">Nudge</a> and{" "}
            <a href="#">Kill Switch</a>, we don't just facilitate transactions,
            but actively help you do better with your money.
          </p>
        </div>
        <div className="col-6">
          <img
            src="media\images\ecosystem.png"
            alt="network error"
            style={{
              maxWidth: "109%",
              width: "auto",
            }}
          />
          <div className="row text-center mt-4 ">
            <a className="col-9 " href="#" style={{ textDecoration: "none" }}>
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className="col-3" href="#" style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>{" "}
            </a>
          </div>
        </div>
      </div>
      <div style={{
        marginTop:"18px",
        textAlign:"center"
       }}>
       <a href="#" > <img src="media\images\pressLogos.png" alt="image" /></a>
      </div>
    </div>
  );
}
