import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { mdiAccountPlusOutline, mdiCashCheck, mdiCashClock, mdiCashFast, mdiCashMinus, mdiCashMultiple, mdiEye, mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";
import "./header.css";
import Button from "../button/Button";
import { dataSideBAr as data, buttonsTiers, buttonsDashBoard, buttonsActivites, buttonsDonnees, buttonsGestion, buttonsProduction, buttonsUilisateurs, buttonsUtilisateurs, buttonsConfigurations, buttonsParametres } from "./menu";


const Header = () => {
  const [onglet, setOnglet] = useState(<Button listCard={buttonsTiers} />);

  const location = useLocation();
  // console.log("location", location);
  useEffect(() => {
    switch (location.pathname) {
      case "/":

        return setOnglet(<Button listCard={buttonsDashBoard} />);
      case "/missions":

        return setOnglet(<Button listCard={buttonsTiers} />);
      case "/collaborateurs":

        return setOnglet(<Button listCard={buttonsTiers} />);
      case "/tiers":

        return setOnglet(<Button listCard={buttonsTiers} />);
      case "/production":

        return setOnglet(<Button listCard={buttonsProduction} />);
      case "/activites":

        return setOnglet(<Button listCard={buttonsActivites} />);
      case "/donnees":

        return setOnglet(<Button listCard={buttonsDonnees} />);
      case "/gestion":

        return setOnglet(<Button listCard={buttonsGestion} />);
      case "/utilisateurs":

        return setOnglet(<Button listCard={buttonsUtilisateurs} />);

      case "/configurations":

        return setOnglet(<Button listCard={buttonsParametres} />);


      default:
        break;
    }
  }, [location.pathname]);

  return (
    <div id="header" className="card ">
      <div className="header-link">
        {data.map((item, index) => (
          <NavLink key={index} className="header-item" to={`${item.route}`}>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="header-onglet" >{onglet}</div>
    </div>
  );
};

export default Header;
