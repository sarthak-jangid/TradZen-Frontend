import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer
      className="border-top "
      style={{
        backgroundColor: "#FBFBFB",
      }}
    >
      <div className="container p-5 pb-1">
        <div className="row p-5 between">
          <div className="col">
            <img
              src="media\images\trend.png"
              alt="TradeZen Logo"
              style={{
                display: "inline-block",
                width: "30px",
                marginRight: "2%",
                marginBottom: "20px",
              }}
              title="TradeZen"
            />
            <h2
              style={{
                color: "#2076ca",
                letterSpacing: "2px",
                fontWeight: "700",
                display: "inline-block",
                marginTop: "18px",
              }}
            >
              TradZen
            </h2>
            <p className="text-muted mt-3">
              &copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <h5>Account</h5>

            <a href="#" className="footer-links">
              Open demat account
            </a>
            <br />
            <a href="#" className="footer-links">
              Minor demat account
            </a>
            <br />
            <a href="#" className="footer-links">
              NRI demat account
            </a>
            <br />
            <a href="#" className="footer-links">
              Commodity
            </a>
            <br />
            <a href="#" className="footer-links">
              Dematerialisation
            </a>
            <br />
            <a href="#" className="footer-links">
              Fund transfer
            </a>
            <br />
            <a href="#" className="footer-links">
              MTF
            </a>
            <br />
            <a href="#" className="footer-links">
              Referral program
            </a>
            <br />
          </div>
          <div className="col">
            <h5>Support</h5>

            <a href="" className="footer-links">
              Contact us
            </a>
            <br />
            <a href="" className="footer-links">
              Support portal
            </a>
            <br />
            <a href="" className="footer-links">
              How to file a complaint?
            </a>
            <br />
            <a href="" className="footer-links">
              Status of your complaints
            </a>
            <br />
            <a href="" className="footer-links">
              Bulletin
            </a>
            <br />
            <a href="" className="footer-links">
              Circular
            </a>
            <br />
            <a href="" className="footer-links">
              Z-Connect blog
            </a>
            <br />
            <a href="" className="footer-links">
              Downloads
            </a>
            <br />
          </div>
          <div className="col">
            <h5>Company</h5>

            <a href="" className="footer-links">
              About
            </a>
            <br />
            <a href="" className="footer-links">
              Philosophy
            </a>
            <br />
            <a href="" className="footer-links">
              Press & media
            </a>
            <br />
            <a href="" className="footer-links">
              Careers
            </a>
            <br />
            <a href="" className="footer-links">
              Zerodha Cares (CSR)
            </a>
            <br />
            <a href="" className="footer-links">
              Zerodha.tech
            </a>
            <br />
            <a href="" className="footer-links">
              Open source
            </a>
            <br />
          </div>
          <div className="col">
            <h5>Quick links</h5>

            <a href="" className="footer-links">
              Upcoming IPOs
            </a>
            <br />
            <a href="" className="footer-links">
              Brokerage charges
            </a>
            <br />
            <a href="" className="footer-links">
              Market holidays
            </a>
            <br />
            <a href="" className="footer-links">
              Economic calendar
            </a>
            <br />
            <a href="" className="footer-links">
              Calculators
            </a>
            <br />
            <a href="" className="footer-links">
              Markets
            </a>
            <br />
            <a href="" className="footer-links">
              Sectors
            </a>
            <br />
          </div>
        </div>
        <div className="p-5 pt-0 pb-0 footer-para">
          <p className="text-muted">
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p className="text-muted">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p className="text-muted">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p className="text-muted">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p className="text-muted">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p className="text-muted">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className=" px-5 footer-graveyard-links text-center ">
          <ul>
            <li>
              <a rel="nofollow" href="https://nseindia.com">
                NSE
              </a>
            </li>
            <li>
              <a rel="nofollow" href="https://www.bseindia.com/">
                BSE
              </a>
            </li>
            <li>
              <a rel="nofollow" href="https://www.mcxindia.com/">
                MCX
              </a>
            </li>
            <li>
              <a href="https://zerodha.com/terms-and-conditions/">
                Terms &amp; conditions
              </a>
            </li>
            <li>
              <a href="https://zerodha.com/policies-and-procedures/">
                Policies &amp; procedures
              </a>
            </li>
            <li>
              <a href="https://zerodha.com/privacy-policy/">Privacy policy</a>
            </li>
            <li>
              <a href="https://zerodha.com/disclosure/">Disclosure</a>
            </li>
            <li>
              <a href="https://zerodha.com/investor-attention/">
                For investor's attention
              </a>
            </li>
            <li>
              <a href="https://zerodha.com/tos/investor-charter/">
                Investor charter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
