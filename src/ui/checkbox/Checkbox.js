import React from "react";
import "./checkbox.css";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      <span className="checkbox-status"></span> {label}
    </label>
  );
};

export default Checkbox;
