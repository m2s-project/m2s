import React from "react";
import "./breadcrumbs.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = location.pathname.toString().split("/");

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map((breadcrumb, index) => {
        return breadcrumb ? (
          <span key={index} className="item">
            <Link to={"#"}>
              {breadcrumb}
            </Link>
            {/* {index < breadcrumbs.length - 1 ? <span className="separator">/</span> : null} */}
          </span>
        ) : null;
      })}
    </div>
  );
};

export default Breadcrumbs;
