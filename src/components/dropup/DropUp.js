import React from "react";
import "./dropup.css";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiPlusBox } from "@mdi/js";
const list = [
  "/",
  "/production",
  "/activites",
  "/donnees",
  "/tiers",
  "/gestion",
  "/utilisateurs",
  "/configurations",
];
const DropUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let show =
    !list.includes(location.pathname) &&
    !`${location.pathname}`.split("/").includes("new");

  return (
    <div className="dropup">
      {show && <button className="dropbtn"><Icon path={mdiPlusBox} size={2} color={"white"} /></button>}
      <div className="dropup-content">
        <span
          onClick={() => {
            console.log(`${location.pathname}/new`);
            navigate(`${location.pathname}/new`);
          }}
        >
          Nouveau
        </span>
      </div>
    </div>
  );
};

export default DropUp;
