import React from "react";
import './select.css'
const Select = (props) => {
  return (
    <div className={`select col-${props.col?props.col:null}`}>
        <label>{props.label}</label>
    <select {...props}  className="select"  >
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    </div>
  );
};

export default Select;
