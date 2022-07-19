import React from "react";
import PropTypes from "prop-types";

export default function Nav(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg nav-${props.darkMode} bg-${props.darkMode}`}
    >
      {/* back ticks are used for template literals */}
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-warning fs-3" href="/">
          {props.title}
        </a>
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
              <a
                className="nav-link active fs-6 fw-semibold"
                style={{
                  WebkitTextFillColor:
                    props.darkMode === "light" ? "black" : "white"
                }}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fs-6 fw-semibold"
                style={{
                  WebkitTextFillColor:
                    props.darkMode === "light" ? "black" : "white"
                }}
                href="/"
              >
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch text-">
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
