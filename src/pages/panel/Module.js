import React from "react";
import Icon from "@mdi/react";
import { mdiCashRegister } from "@mdi/js";

import "./module.css";
import { NavLink } from "react-router-dom";

const Module = ({name, icon}) => {
  return (
    <div className=" card modules">
      <div className="module-icon col-12">
        <div className="module-filter">
          <Icon path={icon} size={5}  color={"var(--nuance)"}/>
          <NavLink to={"#"} className="module-btn">Ouvrir</NavLink >
        </div>
      </div>
      <div className="module-title">
        <h2 className="module-name">{name}</h2>
      </div>
    </div>
  );
};

export default Module;
