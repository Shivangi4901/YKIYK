// import { checkPropTypes } from "prop-types";
import React from "react";
// import ChromePiker from "react-color";

export default function Darkmode(props) {
  // const { mystyle, setmyStyle } = useState({
  //   color: "white",
  //   backgroundColor: "black"
  // });

  let mystyle = {
    // CustomPicker: props.darkMode === "dark" ? "white" : "orange",
    backgroundColor: props.darkMode === "dark" ? "#058aff" : "white"
  };
  return (
    <div
      className="container"
      style={{ CustomPicker: props.darkMode === "dark" ? "white" : "#00223f" }}
    >
      <h3 className="my-1 fs-2">About</h3>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Item #1</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This is the first item's accordion body.It is shown by default,
              until the collapse plugin adds the appropriate classes that we use
              to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or overriding our
              default variables.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Item #2</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This is the second item's accordion body. It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use
              to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or overriding our
              default variables.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Item #3</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This is the third item's accordion body. It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use
              to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or overriding our
              default variables.
            </div>
          </div>
        </div>
      </div>
      <div className="contziner">
        <button type="button" className="btn btn-primary my-2">
          Enable Mode
        </button>
      </div>
    </div>
  );
}
