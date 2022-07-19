import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "2rem" }}>
      {props.alert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{props.alert.t}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
