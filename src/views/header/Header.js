import React from "react";
import logo from "../../assets/logo.png";
import "./header.css";

import { Link } from "react-router-dom";
import Profil from "../profil/Profil";

import Search from "../search/Search";
import { useLocation } from "react-router-dom";
// import { mdiWindowClose, mdiWindowMaximize, mdiWindowMinimize, mdiWindowRestore } from "@mdi/js";
// import Icon from "@mdi/react";
// import { close, maximize, minimize } from "../../api/electron";
const Header = () => {
  // const [restore, setRestore] = useState(false) 
const {pathname} =useLocation()
  const renderSearh = pathname!=='/home'?<Search />:<div className="header-center">eXpert M2s</div>
  return (
    <div className="header">
      <div className="header-start">
        <Link to={"/home"}>
          <img src={logo} alt="logo" width={25} />
        </Link>
      </div>
      <div className="header-center">
        {renderSearh}
      </div>
      {/* <div className="header-center">eXpert GMAO</div> */}
      <div className="header-end">

        <Profil />
    {/* Icones  */}
    {/* <span  className="minimize" onClick={() => {
              try {
                minimize();
              } catch (error) {
                console.log("click error", error);
              }
            }}>
          <Icon
            path={mdiWindowMinimize}
            size={0.8}
            title="Réduire"
           
          />
        </span>
        <span className="maximize"
          onClick={() => {
            try {
              setRestore(!restore);
              maximize();
            } catch (error) {
              
            }
          
          }}
        >
          <Icon
            path={restore ? mdiWindowMaximize : mdiWindowRestore}
            size={0.8}
            title="Agrandir/Restaurer"
           
          />
        </span >
        <span className="close" onClick={() => {
              try {
                close();
              } catch (error) {
                console.log("click error", error);
              }
            }}>
          <Icon
            path={mdiWindowClose}
            size={0.8}
            title="Fermer"
            
          />
        </span> */}
      </div>
    </div>
  );
};

export default Header;
