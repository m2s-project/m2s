import React, { useEffect, useState } from "react";
import "./utilisateur.css";
import Title from "../../components/titlebar/Title";
import Input from "../../ui/input/Input";
import Accordion from "../../ui/accordion/Accordion";
import Button from "../../ui/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "../../ui/select/Select";
import { utilisateur as init } from "../../lib/definitions/utilisateur";
import TextArea from "../../ui/textarea/TextArea";
import { useDispatch } from "react-redux";
import {  deleteUtilisateur, upsertUtilisateur } from "../../redux/utilisateurSlice";
import { v6 as uuid } from "uuid";

const UtilisateurForm = () => {
  const dispatch = useDispatch();
  const [utilisateur, setUtilisateur] = useState(init);
  const navigate = useNavigate();
  const {  state } = useLocation();
  useEffect(() => {
    state.item && setUtilisateur(state.item);
  }, [state]);

  const handleChange = (e) => {
    e.preventDefault();
    setUtilisateur({ ...utilisateur, [e.target.name]: e.target.value });
    console.log(utilisateur);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    switch (state.type) {
      case 'new':
        dispatch(upsertUtilisateur({ id: uuid(), data:utilisateur }))
        break;
      case 'delete':
        dispatch(deleteUtilisateur(utilisateur.id))
        navigate(-1)
        break;
      case 'update':
        dispatch(upsertUtilisateur({ id: utilisateur.id, data:utilisateur }))
        navigate(-1)
        break;
    
      default:
        
        break;
    }
    setUtilisateur(init);
    // navigate(-1);
  };

  const iGeneral = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={3}
          name={"nom"}
          label={"nom"}
          type={"text"}
          value={utilisateur.nom}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"prenom"}
          label={"prénom"}
          type={"text"}
          value={utilisateur.prenom}
          onChange={handleChange}
        />
        <Input
          col={3}
          name={"pseudonyme"}
          label={"pseudonyme"}
          type={"text"}
          value={utilisateur.pseudonyme}
          onChange={handleChange}
        />

        <Input
          col={3}
          name={"email"}
          label={"email"}
          type={"email"}
          value={utilisateur.email}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"tel"}
          label={"téléphone"}
          type={"text"}
          value={utilisateur.tel}
          onChange={handleChange}
        />
      </div>
    </>
  );
  const iRoles = (
    <>
      <div style={{ display: "flex" }}>
        <Select
          label={"role"}
          name={"role"}
          options={[
            { label: "Technicien", value: "Technicien" },
            { label: "Ingénieur", value: "Ingénieur" },
            { label: "Logisticien", value: "Logisticien" },
            { label: "Commerciale", value: "Commerciale" },
            { label: "Administrateur", value: "Administrateur" },
            { label: "Autres", value: "Autres" },
          ]}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextArea
          name={"permissions"}
          placeholder={
            "Liste des permissions ou droits d'accès associés au rôle (par exemple, accès en lecture/écriture, gestion des utilisateurs, consultation des rapports)"
          }
          onChange={handleChange}
          value={utilisateur.permissions}
          disabled
        />
      </div>
    </>
  );
  const iAuthentifications = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          name={"password"}
          label={"mot de passe"}
          type={"password"}
          value={utilisateur.password}
          onChange={handleChange}
        />
        <Select
          label={"methode"}
          name={"methode"}
          options={[
            { label: "Email", value: "Email" },
            { label: "Autres", value: "Autres" },
          ]}
          onChange={handleChange}
        />
        <Input
          name={"token"}
          label={"token"}
          type={"password"}
          value={utilisateur.token}
          onChange={handleChange}
          disabled
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextArea
          name={"permissions"}
          placeholder={
            "Liste des permissions ou droits d'accès associés au rôle (par exemple, accès en lecture/écriture, gestion des utilisateurs, consultation des rapports)"
          }
          onChange={handleChange}
          value={utilisateur.permissions}
          disabled
        />
      </div>
    </>
  );
  const iStatut = (
    <>
      <div style={{ display: "flex" }}>
        <Select
          label={"Compte"}
          name={"statut"}
          options={[
            { label: "actif", value: "actif" },
            { label: "inactif", value: "inactif" },
            { label: "suspendu", value: "suspendu" },
          ]}
          onChange={handleChange}
        />
        <Input
          name={"creation"}
          label={"date création"}
          type={"text"}
          value={utilisateur.creation}
          onChange={handleChange}
          disabled
        />
        <Input
          name={"connexion"}
          label={"dernière connexion"}
          type={"text"}
          value={utilisateur.connexion}
          onChange={handleChange}
          disabled
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextArea
          name={"activites"}
          placeholder={
            "Historique des actions récentes effectuées par l'utilisateur (par exemple, connexions, modifications de données)"
          }
          onChange={handleChange}
          value={utilisateur.activites}
          disabled
        />
      </div>
    </>
  );

  const iPreferences = (
    <>
      <div style={{ display: "flex" }}>
        <Select
          col={2}
          label={"langue"}
          name={"langue"}
          options={[{ label: "Français", value: "Français" }]}
          onChange={handleChange}
        />
        <Select
          col={2}
          label={"notifications"}
          name={"notifications"}
          options={[{ label: "email", value: "true" }]}
          onChange={handleChange}
        />
        <Select
          col={2}
          label={"theme"}
          name={"theme"}
          options={[{ label: "clair", value: "clair" }]}
          onChange={handleChange}
        />
      </div>
    </>
  );

  return (
    <div className="utilisateur">
      <Title />
      <form onSubmit={handleSubmit}>
        <Accordion
          title={"Informations générales"}
          content={iGeneral}
          open={true}
        />
        <Accordion title={"Rôle et permissions "} content={iRoles} />
        <Accordion
          title={"Informations d'authentification "}
          content={iAuthentifications}
        />
        <Accordion title={"Statut et activité "} content={iStatut} />
        <Accordion
          title={"Préférences et paramètres "}
          content={iPreferences}
        />

        <div className="form-button">
          <Button label={"Enrégistrer"} type={"submit"} />
          <Button
            label={"Quitter"}
            type={"reset"}
            onClick={() => navigate(-1)}
          />
        </div>
      </form>
    </div>
  );
};

export default UtilisateurForm;
