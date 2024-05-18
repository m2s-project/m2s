import React, { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiAccountBadge,
  mdiAccountBadgeOutline,
  mdiAlarm,
  mdiAlertBoxOutline,
  mdiMustache,
  mdiWindowClose,
  mdiWindowMaximize,
  mdiWindowMinimize,
  mdiWindowRestore,
} from "@mdi/js";
import { maximize, minimize, close } from "../../api/actions";

import "./titleBar.css";
import logo from "../../logo-title.png";
import { Link, useNavigate } from "react-router-dom";
import Login from "./session/Login";
import DropDown from "../dropdown/DropDown";

const notification = [
  { icon: mdiAccountBadgeOutline, content: "blalla" },
  { icon: mdiAccountBadgeOutline, content: "blalla et blabla" },
];

const TitleBar = () => {
  const renderNotif = (item, index) => (
    <div key={index} className="notification-item">
      <span>{item.content}</span>
    </div>
  );

  const navigate = useNavigate();
  const [minMax, setMinMax] = useState(false);
  return (
    <div className="card " id="title-bar">
      <div className="title-bar-left">
        <img
          src={logo}
          alt=""
          width={23}
          onClick={() => navigate("/")}
          style={{ borderRadius: 5 }}
        />
        <span className="app-name">MSs</span>
      </div>
      <div className="title-bar-center">Management System for Services</div>
      <div className="title-bar-right">
        <div style={{display:'flex'}} >
        <DropDown
          icon={mdiAccountBadgeOutline}
       
          contentData={[
            { icon: mdiAccountBadgeOutline, content: "blalla" },
            { icon: mdiAccountBadgeOutline, content: "blalla et blabla" },
            { icon: mdiAccountBadgeOutline, content: "blalla et blabla ..." },
          ]}
          renderItems={renderNotif}
          renderFooter ={<Link to={'#'} >All</Link>}
        />

        <DropDown
          icon={mdiAlarm}
          badge="12"
          contentData={[
            { icon: mdiAccountBadgeOutline, content: "blalla" },
            { icon: mdiAccountBadgeOutline, content: "blalla et blabla" },
            { icon: mdiAccountBadgeOutline, content: "blalla et blabla ..." },
          ]}
          renderItems={renderNotif}
          renderFooter ={<Link to={'#'} >All</Link>}
        />
        </div>
        {/* <Login /> */}

        <span>
          <Icon
            path={mdiWindowMinimize}
            size={0.8}
            title="Réduire"
            onClick={() => {
              try {
                minimize();
              } catch (error) {
                console.log("click error", error);
              }
            }}
          />
        </span>
        <span
          onClick={() => {
            setMinMax(!minMax);
            maximize();
          }}
        >
          <Icon
            path={minMax ? mdiWindowMaximize : mdiWindowRestore}
            size={0.8}
            title="Agrandir/Restaurer"
            onClick={() => {
              try {
              } catch (error) {
                console.log("click error", error);
              }
            }}
          />
        </span>
        <span>
          <Icon
            path={mdiWindowClose}
            size={0.8}
            title="Fermer"
            onClick={() => {
              try {
                close();
              } catch (error) {
                console.log("click error", error);
              }
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default TitleBar;
