import { useState } from "react";
import "./accordion.css";

const Accordion = ({ title, content, open }) => {
  const [isOpen, setIsOpen] = useState(open?open:false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // const renderIcon = isOpen ? (
  //   <Icon path={mdiArrowUp} size={0.7} color={""} />
  // ) : (
  //   <Icon path={mdiArrowDown} size={0.7} color={""} />
  // );

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        {/* {renderIcon} */}

        <span>{title}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
