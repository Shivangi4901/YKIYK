// import { array } from "prop-types";
import React, { useState } from "react";
// import copy from 'copy-to-clipboard';

export default function Form(props) {
  const UpClick = () => {
    // console.log("btn clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleReverse = () => {
    // console.log("btn clicked: " +  text);
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const copyToClipboard = () => {
    let newText = text;
    navigator.clipboard.writeText(newText);
    // alert(`You have copied "${newText}"`);
  };

  const handleClear = () => {
    // console.log("btn clicked: " +  text);
    let newText = "";
    setText(newText);
  };

  const ChangeToClick = (e) => {
    // console.log("btn on click");
    setText(e.target.value);
  };
  const [text, setText] = useState(" ");
  return (
    <>
      <div className="container">
        <div className="mb-3 fs-3 fw-bold">
          <label htmlFor="textArea" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={ChangeToClick}
            id="textArea"
            rows="5"
          >
            {" "}
          </textarea>
        </div>
        <button className="btn btn-primary" onClick={UpClick}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverse}>
          Reverse
        </button>
        <button className="btn btn-primary" onClick={copyToClipboard}>
          Copied
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-2">
        <h2 className="fw-bold"> Summary </h2>
        <p className="fs-5">
          {text.split(" ").length} words & {text.length} characters{" "}
        </p>
        <p className="fs-5">
          {" "}
          {0.008 * text.split(" ").length} Time Taken To Read{" "}
        </p>
        <h2 className="fw-bold"> Preview </h2>
        <p> {text} </p>
      </div>
    </>
  );
}
