import React, { useState } from "react";
import "./tree.css"; // Fichier CSS
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronRight, mdiDotsVertical } from "@mdi/js";
import Drop from "../../../../components/drop/Drop";
import Button from "../../../../ui/button/Button";

// Composant pour chaque élément de l'arborescence
const TreeNode = ({ node, path }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tree-node">
      <div className="node-label" onClick={handleToggle}>
        {node.children && (
          <span className={`toggle-icon ${isOpen ? "open " : "closed"}`}>
            {isOpen ? <Icon path={mdiChevronDown} size={0.8} /> : <Icon path={mdiChevronRight} size={0.7} />}
          </span>
        )}
        {node.label}
      </div>
      {isOpen && node.children && (
        <div className="node-children">
          {node.children.map((child, index) => (
            <NavLink key={index} to={`${path}/${child.path}`}>
              <TreeNode node={child} path={`${path}/${child.path}`} />
            </NavLink>
          ))}
        </div>
      )}

      
    </div>
  );
};

// Composant principal de l'arborescence
const Tree = ({ childrens, path }) => {
  const navigate = useNavigate()
  const {pathname}= useLocation()
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`${pathname}/nouveau`, { state: { type: "new" } });
  };
  const contents = (
    <div style={{marginRight:5}}>
      <Button label={"Nouveau"} onClick={handleClick} />
      {/* <Button label={"Importation"}  onClick={handleClick} /> */}
      {/* <Button label={"Exportation"} onClick={handleClick} /> */}
    </div>
  );
  
  return (
    <div className="tree-container">
      {childrens.map((node, index) => (
        <Link key={index} to={`/home/${path}/${node.path}`}>
        <div className="tree-container-items" style={{display:"flex", justifyContent:'space-between' }}>  
          <TreeNode node={node} path={`/home/${path}/${node.path}`} />
          <span className="tree-container-icon" style={{marginTop:9}}> <Drop  contents={contents}><Icon path={mdiDotsVertical} size={0.7} /></Drop></span> 
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Tree;
