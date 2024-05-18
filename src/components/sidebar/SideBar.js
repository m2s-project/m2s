import React, { Fragment } from "react";
import { dataSideBAr as sidebarItems } from "../header/menu";

import "./sideBar.css";
import { NavLink, useLocation } from "react-router-dom";

const SideBarItem = ({ item, index }) => {
  const location = useLocation();

  return (
    <>
      {/* mapping root link */}
      <NavLink className="side_bar_item" to={`${item.route}`}>
        {" "}
        {/* <Icon path={item.icon} size={1} /> */}
        <span>{item.name}</span>
      </NavLink>
      {/* mapping root childrens link */}
      {item.children &&
        item.children.map(
          (childs, index) =>
            location.pathname.includes(`/${item.route}`) && (
              <NavLink
                key={index}
                className="side_bar_item_child"
                to={`${item.route}/${childs.route}`}
              >
                {" "}
                {/* <Icon path={childs.icon} size={1} title={childs.name} /> */}
                <span>{childs.name}</span>
              </NavLink>
            )
        )}
    </>
  );
};

const SideBar = () => {
  return (
    <div className="card side_bar">
      <div>
        {/* <img src={logo} style={{width:60, alignSelf:"center"}}  /> */}
      </div>
      {sidebarItems.map((item, index) => (
        <SideBarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default SideBar;
