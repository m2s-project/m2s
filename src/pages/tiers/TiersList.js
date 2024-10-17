import React from "react";
import "./tiers.css";
import { useSelector } from "react-redux";
import DaTable from "../../components/dataTable/DaTable";
import useTiers from "../../redux/hooks/useTiers";
import { useLocation } from "react-router-dom";

const TiersList = () => {
  useTiers();
  const { pathname} = useLocation();
  const state = useSelector((state) => state.tiers.items).reduce(
    (prev, curr) => {
      if (curr.categorie === "client") {
        return {...prev, client:[...prev.client, curr]}
      } else {
       return {...prev, fournisseur:[...prev.fournisseur, curr]};
      }
    },
    { client: [], fournisseur: [] }
  );

 const tiers = pathname.split('/').includes("clients")?state.client:state.fournisseur

  const alias = [
    { nif: "nif" },
    { nom: "Nom" },
    { type: "type" },
    { contact: "contact" },
    { position: "position" },
    { telc: "téléphone" },
    { email: "Email" },
    { statut: "statut" },
  ];

  return (
    <div className="tiers col-12">
      <DaTable items={tiers} alias={alias} />
    </div>
  );
};

export default TiersList;
