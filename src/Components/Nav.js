import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg nav-${props.darkMode} bg-${props.darkMode}`}
    >
      {/* back ticks are used for template literals */}
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-warning fs-3" to="/title">
          {props.title}
        </NavLink>
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
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-NavLink fs-5 fw-semibold"
                // style={{
                //   WebkitTextFillColor:
                //     props.darkMode === "light" ? "black" : "white"
                // }}
                // aria-current="page"
                to="/Form"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-NavLink fs-5 fw-semibold mx-3"
                // style={{
                //   WebkitTextFillColor:
                //     props.darkMode === "light" ? "black" : "white"
                // }}
                to="/Darkmode"
              >
                {props.aboutText}
              </NavLink>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            ></label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// As your app grows, you can catch a lot of bugs with typechecking.

Nav.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};

Nav.defaultProps = {
  title: "YouKnowIfYouKnow",
  aboutText: "Search-more"
};
