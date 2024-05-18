import React, { useRef } from "react";

import "./dropdown.css";/*  */
import Icon from "@mdi/react";

const clickOutSide = (content_ref, toggle_ref)=>{

  document.addEventListener('mousedown', e=>{
  // user click toggle

  if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
    content_ref.current.classList.toggle('active-dd')
  } else {
     // user click outside toggle and content
     if (content_ref.current && !content_ref.current.contains(e.target)) {
      content_ref.current.classList.remove('active-dd')
     }
  }
  })
}

const DropDown = (props) => {
const  dropdownContentEl = useRef(null)
const  dropdownToggleEl = useRef(null)
clickOutSide(dropdownContentEl, dropdownToggleEl)
  console.log(props);
  return (
    <div className="dropdown">
      <button  ref={dropdownToggleEl} className="dropdown-toggle">
        {props.icon ?  <Icon
            path={props.icon}
            size={0.9}
            title="User"
            
           />: ""}
        {props.badge ? (
          <span className="dropdown-toggle-badge">{props.badge}</span>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>
      <div  ref={dropdownContentEl} className="dropdown-content">
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
            props.renderItems(item, index)
          )
          : ""}
        {props.renderFooter ? (
          <div className="dropdown-footer">{props.renderFooter}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DropDown;
