import React from "react";

export default function Brokarage() {
  return (
    
    <div className="container  p-5 pt-2 pb-3">
      <div className="row mt-5 p-5 border-top   text-center">
        <div className="col-8 p-4">
          <a
            href="#"
            style={{
              textDecoration: "none",
            }}
          >
            <h3 className="fs-5  ">Brokerage calculator</h3>
          </a>
          <ul className="text-muted mt-4" style={{
            lineHeight:"2.7",
            fontSize:"13px",
            textAlign:"left"
          }}>
            <li>
              Call & Trade and RMS auto-squareo:Additional charges of ₹50 + GST
              per order.
            </li>
            <li>Digital contract notes will be sent via e-mail</li>
            <li>
              Physical copies of contract notes, if required shall be charged
              ₹20 per contract note. Courier charges apply
            </li>
            <li>
              for NRI account (non-PIS), 0.5₹ or ₹100 per executed order for
              equity (whichever is lower)
            </li>
            <li>
              for NRI account (PIS), 0.5₹ to ₹200 per executed order for equity
              (whichever is lower){" "}
            </li>
            <li>
              if the account is in debit balance, any order placed will be
              charged ₹40 per executed instead of ₹20 per executed order
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a
            href="#"
            style={{
              textDecoration: "none",
            }}
          >
            <h3 className="fs-5  ">List of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
