import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };
  return (
    <div className="dropdown">
      
      <button onClick={handleToggle} className="dropdown-toggle">
        
        {selectedOption ? selectedOption.label : "Sélectionner"}
        <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>&#9660;</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          
          {options&&options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
