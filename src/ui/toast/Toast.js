import React, { useEffect } from "react";
import "./toast.css";

const Toast = ({ message, duration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);
  return (
    <div className="toast">
      <div className="toast-content">{message}</div>
    </div>
  );
};

export default Toast;
