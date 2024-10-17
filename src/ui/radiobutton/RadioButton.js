import React from "react";
import "./radiobutton.css";

const RadioButton = (props) => {
  return (
    <label className="radio-label">
      <input
      {...props}
        type="radio"
       
        className="radio-input"
      />
      <span className="radio-custom"></span> {props.label}
    </label>
  );
};

export default RadioButton;
