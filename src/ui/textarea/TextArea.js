import React from "react";
import "./textarea.css";

const TextArea = (props) => {
  return <textarea {...props} className="textarea" rows={1} />;
};

export default TextArea;
