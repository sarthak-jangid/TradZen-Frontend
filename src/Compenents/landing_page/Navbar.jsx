import React from "react";
import "./navbar.css";
import { Link, Navigate, NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const isLoggedOut = queryParams.get("logout");

    if (isLoggedOut === "true") {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      window.history.replaceState({}, document.title, "/");
    }
  }, [location]);

  const token = localStorage.getItem("token");
  const handleLogOut = async () => {
    try {
      await axios.get("http://localhost:3002/logout", {
        withCredentials: true, // important for cookies
      });

      // Clear token from localStorage
      localStorage.removeItem("token");

      // Show toast message
      toast.success("Logout successful", {
        position: "bottom-right",
      });

      setTimeout(() => {
        window.location.href = "https://trad-zen-frontend-hcz2.vercel.app/";
      }, 1500); // 1.5 seconds delay
    } catch (err) {
      console.error("Logout error", err);

      toast.error("Logout failed", {
        position: "bottom-right",
      });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light border-bottom "
      style={{
        backgroundColor: "#fff",
        height: "70px",
        width: "100%",
        position: "fixed",
        zIndex: "10",
        boxSizing: "border-box",
      }}
    >
      <div className="container p-5">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            paddingLeft: "4%",
          }}
        >
          <img
            src="media\images\trend.png"
            alt="TradeZen Logo"
            style={{
              display: "inline-block",
              width: "35px",
              marginRight: "2%",
              marginBottom: "20px",
            }}
            title="TradeZen"
          />
          <h2
            style={{
              color: "#2076ca",
              width: "25vw",
              letterSpacing: "2px",
              fontWeight: "700",
              display: "inline-block",
              marginTop: "18px",
            }}
          >
            TradZen
          </h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active-link" : "")
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active-link" : "")
                  }
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active-link" : "")
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/support"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active-link" : "")
                  }
                >
                  Support
                </NavLink>
              </li>
              <li></li>
              {!token && (
                <li
                  className="nav-item"
                  style={{
                    marginLeft: "20px",
                  }}
                >
                  <Link
                    to="/signup"
                    className="btn btn-outline-primary me-2 custom-auth-btn"
                  >
                    Signup
                  </Link>
                </li>
              )}
              {!token && (
                <li className="nav-item">
                  <Link to="/login" className="btn btn-primary custom-auth-btn">
                    Login
                  </Link>
                </li>
              )}

              {token && (
                <li className="nav-item dropdown custom-dropdown">
                  <a
                    className="nav-link "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded={isDropdownOpen}
                    onClick={() => setIsDropdownOpen((prev) => !prev)} //  toggle state
                  >
                    <i className="bi bi-person-circle me-2"></i> Profile
                    <span
                      style={{
                        transform: isDropdownOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "0.3s",
                        display: "inline-block",
                        fontSize: "0.95rem",
                        marginLeft: "6px",
                        verticalAlign: "middle", // this aligns it better with text
                        position: "relative",
                        top: "-1px", // fine-tune vertical position
                      }}
                    >
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end shadow"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="trad-zen-dashboard.vercel.app"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/settings">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-danger"
                        onClick={handleLogOut}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </form>
        </div>
        <ToastContainer />
      </div>
    </nav>
  );
}
