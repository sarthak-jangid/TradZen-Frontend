import React from "react";
import { Link } from "react-router-dom";

export default function Universe() {
  const token = localStorage.getItem("token");

  return (
    <div
      className="container"
      style={{
        position: "relative",
        width: "1100px",
        maxWidth: "100%", // Fix typo: maxWwidth -> maxWidth
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <p
        className="text-center m-5"
        style={{
          fontWeight: "400",
          fontSize: "1.35rem",
        }}
      >
        Want to know more about our technology stack? Check out the{" "}
        <a
          href="#"
          style={{
            textDecoration: "none",
          }}
        >
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <h2 className="text-center pt-5">The TradZen Universe</h2>
      <p className="text-center">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div
        className="row p-5 mt-5"
        style={{
          position: "relative",
        }}
      >
        <div className="col-4 text-center">
          <a
            href="#"
            style={{
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <img
              src="media\images\zerodhaFundhouse.png"
              alt=""
              style={{
                height: "50px",
                display: "block",
                margin: "0 auto",
              }}
            />
            <span
              className="text-muted"
              style={{
                lineHeight: "18px",
                display: "block",
                marginTop: "10px",
                fontSize: "12px",
              }}
            >
              Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals. <br />
            </span>
            <br />
            <br />
            <br />
            <a
              href="#"
              style={{
                textDecoration: "none",
              }}
            >
              <img
                src="media\images\streakLogo.png"
                alt=""
                style={{
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <span
                className="text-muted "
                style={{
                  lineHeight: "18px",
                  display: "block",
                  marginTop: "10px",
                  fontSize: "12px",
                }}
              >
                Systematic trading platform <br />
                that allows you to create and backtest <br />
                strategies without coding.
              </span>
            </a>
          </a>
        </div>
        <div className="col-4 text-center">
          <a
            href="#"
            style={{
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <img
              src="\media\images\sensibullLogo.svg"
              alt=""
              style={{
                height: "35px",
                display: "block",
                margin: "0 auto",
                marginBottom: "20px",
              }}
            />
            <span
              className="text-muted"
              style={{
                lineHeight: "18px",
                display: "block",
                marginTop: "10px",
                fontSize: "12px",
              }}
            >
              Options trading platform that lets you <br />
              create strategies, analyze positions, and examine <br />
              data points like open interest, FII/DII, and more.
              <br />
            </span>
            <br />
            <br />
            <br />
            <a
              href="#"
              style={{
                textDecoration: "none",
              }}
            >
              <img
                src="media\images\smallcaseLogo.png"
                alt=""
                style={{
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <span
                className="text-muted "
                style={{
                  lineHeight: "18px",
                  display: "block",
                  marginTop: "10px",
                  fontSize: "12px",
                }}
              >
                Thematic investing platform <br />
                that helps you invest in diversified <br />
                baskets of stocks on ETFs.
              </span>
            </a>
          </a>
        </div>

        <div className="col-4 text-center mb-5">
          <a
            href="#"
            style={{
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <img
              src=" media\images\tijori.svg"
              alt=""
              style={{
                height: "50px",
                display: "block",
                margin: "0 auto",
              }}
            />
            <span
              className="text-muted"
              style={{
                lineHeight: "18px",
                display: "block",
                marginTop: "10px",
                fontSize: "12px",
              }}
            >
              Investment research platform <br />
              that offers detailed insights on stocks, <br />
              sectors, supply chains, and more. <br />
            </span>
            <br />
            <br />
            <br />
            <a
              href="#"
              style={{
                textDecoration: "none",
              }}
            >
              <img
                src="media\images\dittoLogo.png"
                alt=""
                style={{
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <span
                className="text-muted "
                style={{
                  lineHeight: "18px",
                  display: "block",
                  marginTop: "10px",
                  fontSize: "12px",
                }}
              >
                Personalized advice on life <br />
                and health insurance. No spam <br />
                and no mis-selling.
              </span>
            </a>
          </a>
        </div>
        {!token && (
          <Link
            to={"/signup"}
            className="btn btn-primary mt-4 fs-5 p-2 mb-5"
            style={{ width: "22%", margin: "0 auto", fontWeight: "600" }}
          >
            Sign up for free
          </Link>
        )}
      </div>
    </div>
  );
}
