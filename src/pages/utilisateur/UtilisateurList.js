import React from "react";
import "./utilisateur.css";
import { useSelector } from "react-redux";
import useUtilisateurs from "../../redux/hooks/useUtilisateur";
import DaTable from "../../components/dataTable/DaTable";

const UtilisateurList = () => {
  const utilisateurs = useSelector((state) => state.utilisateurs.items);

  useUtilisateurs();

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
    <div className="utilisateur">
      <div className="col-12">
        <DaTable items={utilisateurs} alias={alias} />
      </div>
    </div>
  );
};

export default UtilisateurList;
