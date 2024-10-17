import React, {  useState } from "react";
import "./sidebar.css";
import { modulesList } from "../module";
import Icon from "@mdi/react";
import { NavLink } from "react-router-dom";

import { useLocation } from "react-router-dom";
import Navbar from "./navigation/Navbar";

const Sidebar = () => {
  const { state } = useLocation();
  const [module, setModule] = useState(state);
  const [open, setOpen] = useState(true);

  const handleClick = (item) => {
    setModule(item);
    setOpen(true);
  };
  // const handleDblClick = () => {
  //   setOpen(false);
  // };

  return (
    <div className="sidebar">
      <div className={`sidebar-right ${open ? "navbar" : ""}`}>
        {module && <Navbar module={module} />}
      </div>
      <div className="sidebar-left">
        {modulesList.map((item, index) => (
          <NavLink
            key={index}
            to={`/home/${item.path}`}
            className="sidebar-items"
            
            onClick={() => handleClick(item)}
          >
            <Icon
              path={item.icon}
              size={1.2}
              color={"blue"}
              title={item.name}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
