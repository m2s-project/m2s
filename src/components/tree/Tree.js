import React, { useState } from "react";
import "./tree.css"; // Fichier CSS

// Composant pour chaque élément de l'arborescence
const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tree-node">
      <div className="node-label" onClick={handleToggle}>
        {node.children && (
          <span className={`toggle-icon ${isOpen ? "open " : "closed"}`}>
            {isOpen ? "-" : "+"}
          </span>
        )}
        {node.label}
      </div>
      {isOpen && node.children && (
        <div className="node-children">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

// Composant principal de l'arborescence
const Tree = ({ data }) => {
  return (
    <div className="tree-container">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

export default Tree;
