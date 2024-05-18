import React from "react";
import Icon from "@mdi/react";
import { mdiCashRegister } from "@mdi/js";
import "./card.css";

{
  /* <Icon path={mdiCashRegister} size={2} color={"var(--vert)"} /> */
}

const Card = () => {
  return (
    <div className="cartes">
      <div className="partImg img1">
        <div className="filtreBleu">
          <div className="btnReveal"> Connexion</div>
        </div>
      </div>
      <div className="titrePrix">
        <h2 className="titreCarte"> modules</h2>
        <p className="prix"> $39</p>
      </div>
      <div className="tailles">
        <p className="taillesTxt">Sizes</p>
      </div>
      <div className="colors">
        <h2 className="sousTitreC">Colors</h2>
      </div>
      <div className="contRonds">
        <div className="ronds"> </div>
        <div className="ronds"></div>
        <div className="ronds"></div>
        <div className="ronds"></div>
        <div className="ronds"></div>
      </div>
    </div>
  );
};

export default Card;
