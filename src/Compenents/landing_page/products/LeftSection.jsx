import React from "react";

export default function LeftSection({
  imageUrl,
  imageWidth,
  productName,
  description,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div
      className="container p-5 pt-3"
      style={{
        position: "relative", 
        width: "1100px",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      <div className="row between mt-3 v-align ">
        <div className="col-6 p-0">
          <img
            src={imageUrl}
            style={{
              width: imageWidth,
            }}
            alt=""
          />
        </div>
        <div className="col-2"></div>
        <div className="col-4 pt-5 ">
          <h1>{productName}</h1>
          <p
            style={{
              fontSize: "1.03rem",
            }}
          >
            {description}
          </p>
          <div
            className="mb-4"
            style={{
              width: "83%",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "1.1rem",
              fontWeight: "500",
            }}
          >
            <a
              href="#"
              style={{
                textDecoration: "none",
              }}
            >
              {tryDemo}
            </a>
            <a
              href="#"
              style={{
                textDecoration: "none",
              }}
            >
              {learnMore}
            </a>
          </div>
          <div>
            <img src={googlePlay} alt="googole play store image" />
            <img
              style={{
                marginLeft: "1.2rem",
              }}
              src={appStore}
              alt="App store image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
