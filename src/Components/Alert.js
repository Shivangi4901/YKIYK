import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div
        className={`alert alert-success alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.t}</strong>: {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
