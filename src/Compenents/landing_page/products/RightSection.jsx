import React from "react";

export default function RightSection({
  imageUrl,
  marginTopForTitle,
  imageWidth,
  productName,
  description,
  learnMore,
}) {
  return (
    <div
      className="container p-5"
      style={{
        position: "relative",
        width: "1100px",
        maxWidth: "100%", // Fix typo: maxWwidth -> maxWidth
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <div className="row between  mt-3 v-align ">
        <div className="col-4 pt-5 mt-5">
          <h1
            style={{
              marginTop: marginTopForTitle,
            }}
          >
            {productName}
          </h1>
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
              {learnMore}
            </a>
          </div>
        </div>
        <div className="col-1"></div>

        <div
          className="col-7 p-0"
          style={{
            flexBasis: "56.6666666667%",
            width: "56.6666666667%",
          }}
        >
          <img
            src={imageUrl}
            style={{
              width: imageWidth,
            }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
