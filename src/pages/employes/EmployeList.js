import React from "react";
import "./employe.css";
import { useSelector } from "react-redux";
import useEmployes from "../../redux/hooks/useEmploye";
import DaTable from "../../components/dataTable/DaTable";

const EmployeList = () => {
  useEmployes();
  const employes = useSelector((state) => state.employes.items);


  const alias = [
    { nom: "Nom" },
    { prenom: "prénom" },
    { poste: "poste" },
    { service: "département" },
    { tel: "téléphone" },
    { email: "Email" },
    { disponibilite: "disponibilité" },
    { statut: "statut" },
  ];


  return (
    <div className="employe col-12">

        <DaTable items={employes} alias={alias} />
   
    </div>
  );
};

export default EmployeList;
