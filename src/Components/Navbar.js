import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h4>NEWSWALA</h4>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      onClick={props.getCountry("in")}
                    >
                      India
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      onClick={props.getCountry("us")}
                    >
                      USA
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  News Categories
                </Link>
                <ul className={`dropdown-menu bg-${props.mode}`}>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "light" ? "dark" : "light"
                      }`}
                      to="/business"
                    >
                      Business
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "light" ? "dark" : "light"
                      }`}
                      to="/entertainment"
                    >
                      Entertainment
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "light" ? "dark" : "light"
                      }`}
                      to="/general"
                    >
                      General
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "light" ? "dark" : "light"
                      }`}
                      to="/health"
                    >
                      Health
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "light" ? "dark" : "light"
                      }`}
                      to="/science"
                    >
                      Science
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "light" ? "dark" : "light"
                      }`}
                      to="/sports"
                    >
                      Sports
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "light" ? "dark" : "light"
                      }`}
                      to="/technology"
                    >
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "black" : "white"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.toggleText}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
