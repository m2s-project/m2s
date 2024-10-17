import React, { useRef } from 'react'
import './drop.css'

const clickOut = (content, toggle) => {
    document.addEventListener("mousedown", (e) => {
      if (toggle.current && toggle.current.contains(e.target)) {
        content.current.classList.toggle("visible");
      } else {
        if (content.current && !content.current.contains(e.target)) {
          content.current.classList.remove("visible");
        }
      }
    });
  };
const Drop = ({children, contents, top}) => {
    const content = useRef(null);
  const toggle = useRef(null);
  clickOut(content, toggle);
  return (
    <div className="drop">
    <div ref={toggle} className="drop-toggle">
      {children}
    </div>
    <div ref={content} style={{top:top?top:null}} className="drop-content">
      {contents}
    </div>
  </div>
);
  
}

export default Drop
