import React, { useRef } from "react";
import "./profil.css";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/authSlice";
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
}

const Profil = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const content = useRef(null);
  const toggle = useRef(null);

  clickOut(content, toggle);
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logoutUser())
    // navigate("/", { replace: true });
  };
  return (
    <div className="profil">
      <div ref={toggle} className="profil-toggle">
        <Icon path={mdiAccount} size={1} color={"var(--main-color)"} />
      </div>
      <div ref={content} className="profil-content">
        <button onClick={handleLogOut}>Se deconnecter</button>
      </div>
    </div>
  );
};

export default Profil;
