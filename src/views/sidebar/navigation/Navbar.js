import React from "react";
import "./navbar.css";

import Accordion from "../../../ui/accordion/Accordion";
import Tree from "./tree/Tree";

const Navbar = ({ module }) => {
  const title = <span>{module.name} </span>;
  const content = <Tree childrens={module.childrens} path={module.path} />;
  return (
    <div className="navbar">
      {<Accordion title={title} content={content} open={true} />}
    </div>
  );
};

export default Navbar;
