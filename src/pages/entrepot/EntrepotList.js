import React from "react";
import "./entrepot.css";
import { useSelector } from "react-redux";
import useEntrepots from "../../redux/hooks/useEntrepot";
import DaTable from "../../components/dataTable/DaTable";


const EntrepotList = () => {
  useEntrepots();
  const entrepots = useSelector((state) => state.entrepots.items);


  const alias = [
    { nom: "Nom" },
    { ville: "ville" },
    { type: "type" },
    { description: "description" },
    { responsable: "responsable" },
    { tel: "téléphone" },
    { email: "Email" },
    { articles: "articles" },
    { valeur: "valeur" },
    { statut: "statut" },
  ];


  return (
    <div className="entrepot col-12">

        <DaTable items={entrepots} alias={alias} />
   
    </div>
  );
};

export default EntrepotList;
