import React from "react";
import Icon from "@mdi/react";
import { NavLink } from "react-router-dom";
import "./module.css";

const Module = ({module}) => {
  
  return (
    <div className="modules">
      <div className="module-icon col-12">
        <div className="module-filter">
          <Icon path={module.icon} size={5}  color={"blue"}/>
          <NavLink to={module.path} className="module-btn" state={module} >Ouvrir</NavLink >
        </div>
      </div>
      <div className="module-title">
        <h2 className="module-name">{module.name}</h2>
      </div>
    </div>
  );
};

export default Module;
