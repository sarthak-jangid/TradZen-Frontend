import React from "react";

export default function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="container p-5">
        <div className="hero-wrapper pt-4  m-5">
          <h5 id="support-portal">Support Portal</h5>
          <a
            id="track-tickets"
            href="#"
            style={{
              color: "white",
            }}
          >
            Track tickets
          </a>
        </div>

        <div className="row m-5 ">
          <div className="col-7 p-0">
            <h2 className="support-subheading">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <div className="search-input">
              <input
                id="search-text"
                type="text"
                placeholder="Eg: how do i activate F&Q, why is my order getting rejected ..."
              />

              <span>
                <i class="fa fa-search search-image" aria-hidden="true"></i>
              </span>
            </div>
            <div className="super-links">
              <a href="#" className="quick-links">
                Track account opening
              </a>
              <a href="#" className="quick-links">
                Track segment activation
              </a>
              <a href="#" className="quick-links">
                Intraday margins
              </a>
              <a href="#" className="quick-links">
                Kite user manual
              </a>
            </div>
          </div>
          <div className="col-5">
            <div className="alert-banner">
              <div className="featured-header">Featured</div>
              <ol className="m-1">
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Surveillance measure on scrips - June 2025
                  </a>
                </li>
                <li className="pt-4">
                  <a href="#" style={{ color: "white"}}>
                    Rights Entitlements listing in June 2025
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
