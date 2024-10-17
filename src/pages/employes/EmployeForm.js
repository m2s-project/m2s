import React, { useEffect, useState } from "react";
import "./employe.css";
import Title from "../../components/titlebar/Title";
import Input from "../../ui/input/Input";
import Accordion from "../../ui/accordion/Accordion";
import Button from "../../ui/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "../../ui/select/Select";
import { employe as init } from "../../lib/definitions/employe";
import TextArea from "../../ui/textarea/TextArea";
import RadioButton from "../../ui/radiobutton/RadioButton";
import { useDispatch } from "react-redux";
import {  deleteEmploye, upsertEmploye } from "../../redux/employeSlice";
import { v6 as uuid } from "uuid";

const EmployeForm = () => {
  const dispatch = useDispatch();
  const [employe, setEmploye] = useState(init);
  const navigate = useNavigate();
  const {  state } = useLocation();
  console.log(state);
  
  useEffect(() => {
    state.item && setEmploye(state.item);
  }, [state]);
  console.log(state);
  const handleChange = (e) => {
    e.preventDefault();
    setEmploye({ ...employe, [e.target.name]: e.target.value });
    console.log(employe);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    switch (state.type) {
      case 'new':
        console.log(uuid());
        
        dispatch(upsertEmploye({ id: uuid(), data:employe }))
        break;
      case 'delete':
        dispatch(deleteEmploye(employe.id))
        navigate(-1)
        break;
      case 'update':
        dispatch(upsertEmploye({ id: employe.id, data:employe }))
        navigate(-1)
        break;
    
      default:
        
        break;
    }
    setEmploye(init);

  };

  const iGeneral = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={3}
          name={"nom"}
          label={"nom"}
          type={"text"}
          value={employe.nom}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"prenom"}
          label={"prénom"}
          type={"text"}
          value={employe.prenom}
          onChange={handleChange}
        />

        <Select
          label={"Sexe"}
          name={"sexe"}
          options={[
            { label: "masculin", value: "masculin" },
            { label: "féminin", value: "féminin" },
            { label: "iNotes", value: "iNotes" },
          ]}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"naissance"}
          label={"naissance"}
          type={"date"}
          value={employe.naissance}
          onChange={handleChange}
        />

        <Select
          label={"Statut"}
          name={"statut"}
          options={[
            { label: "Inactif", value: "inactif" },
            { label: "Actif", value: "actif" },
            { label: "En congé", value: "en congé" },
            { label: "En mission", value: "en mission" },
            { label: "Malade", value: "malade" },
          ]}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          name={"tel"}
          label={"téléphone"}
          type={"text"}
          value={employe.tel}
          onChange={handleChange}
        />
        <Input
          col={3}
          name={"email"}
          label={"email"}
          type={"email"}
          value={employe.email}
          onChange={handleChange}
        />
        <Input
          col={1}
          name={"bp"}
          label={"bp"}
          type={"number"}
          value={employe.bp}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"ville"}
          label={"ville"}
          type={"text"}
          value={employe.ville}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"pays"}
          label={"pays"}
          type={"text"}
          value={employe.pays}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"cnss"}
          label={"cnss"}
          type={"text"}
          value={employe.cnss}
          onChange={handleChange}
        />
      </div>
    </>
  );
  const iPro = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          placeholder={"matricule"}
          name={"matricule"}
          label={"matricule"}
          type={"text"}
          value={employe.matricule}
          onChange={handleChange}
        />
        <Select
          label={"poste"}
          name={"poste"}
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
        <Input
          col={2}
          name={"service"}
          label={"service"}
          type={"text"}
          value={employe.service}
          onChange={handleChange}
        />

        <Input
          col={2}
          name={"embauche"}
          label={"embauche"}
          type={"date"}
          value={employe.embauche}
          onChange={handleChange}
        />
        <Select
          label={"contrat"}
          name={"contrat"}
          options={[
            { label: "CDD", value: "CDD" },
            { label: "CDI", value: "CDI" },
            { label: "freelance", value: "freelance" },
            { label: "Autres", value: "Autres" },
          ]}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextArea
          name={"responsabilites"}
          placeholder={
            "Liste des tâches principales et responsabilités associées à l'employé  "
          }
          onChange={handleChange}
          value={employe.responsabilites}
        />
      </div>
    </>
  );

  const iCompetences = (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextArea
          name={"certifications"}
          placeholder={"Liste des certifications obtenues par l'employé  "}
          onChange={handleChange}
          value={employe.certifications}
        />
        <TextArea
          name={"formations"}
          placeholder={
            "Liste des formations suivies par l'employé (internes et externes) "
          }
          onChange={handleChange}
          value={employe.formations}
        />
        <TextArea
          name={"competences"}
          placeholder={
            "Liste des compétences techniques et spécifiques (mécanique, hydraulique, automatisme, ) "
          }
          onChange={handleChange}
          value={employe.competences}
        />
        <TextArea
          name={"langues"}
          placeholder={"Liste des langues maîtrisées par l'employé  "}
          onChange={handleChange}
          value={employe.langues}
        />
        <TextArea
          name={"permis"}
          placeholder={
            "Liste des permis ou autorisations spécifiques (ex : permis de conduire d'engins)  "
          }
          onChange={handleChange}
          value={employe.permis}
        />
      </div>

      <div style={{ display: "flex" }}>
        <Input
          col={2}
          name={"expérience"}
          label={"experience"}
          type={"number"}
          value={employe.experience}
          onChange={handleChange}
        />
      </div>
    </>
  );

  const iInterventions = (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextArea
          name={"ordres"}
          placeholder={
            "Ordres de Travail Attribués et Liste des interventions ou tâches en cours affectées à cet utilisateur "
          }
          onChange={handleChange}
          value={employe.ordres}
        />
        <TextArea
          name={"interventions"}
          placeholder={
            "Historiques des interventions effectuéés par l'employé (internes et externes) "
          }
          onChange={handleChange}
          value={employe.interventions}
        />
      </div>

      <div style={{ display: "flex" }}>
        <Input
          col={2}
          name={"performance"}
          label={"performance"}
          type={"number"}
          value={employe.performance}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"TMI"}
          label={"TMI"}
          type={"number"}
          value={employe.TMI}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"reussite"}
          label={"reussite"}
          type={"number"}
          value={employe.reussite}
          onChange={handleChange}
        />
        <div className="col-3" style={{ display: "flex", marginTop: 5 }}>
          <label>Disponible</label>
          <RadioButton
            name="disponibilite"
            label={"Oui"}
            value={true}
            onChange={handleChange}
          />
          <RadioButton
            name="disponibilite"
            label={"Non"}
            value={false}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );

  const iSecurite = (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextArea
          name={"formations_secu"}
          placeholder={
            "Formation spécifique suivie par l'employé concernant les normes de sécurité  "
          }
          onChange={handleChange}
          value={employe.formations_secu}
        />
        <TextArea
          name={"epi"}
          placeholder={
            "Équipement de protection que l'employé doit utiliser dans son travail (ex : casque, gants, lunettes) .. "
          }
          onChange={handleChange}
          value={employe.epi}
        />
        <TextArea
          name={"accidents"}
          placeholder={
            "Historique des accidents de travail, avec détails sur les incidents "
          }
          onChange={handleChange}
          value={employe.accidents}
        />
        <TextArea
          name={"procedures"}
          placeholder={
            "Procédures spécifiques que l'utilisateur doit suivre dans ses tâches  "
          }
          onChange={handleChange}
          value={employe.procedures}
        />
        <TextArea
          name={"permis"}
          placeholder={
            "Liste des permis ou autorisations spécifiques (ex : permis de conduire d'engins)  "
          }
          onChange={handleChange}
          value={employe.permis}
        />
      </div>
    </>
  );
  const iRh = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          name={"salaire"}
          label={"salaire"}
          type={"number"}
          value={employe.salaire}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={"heures supplémentaires"}
          name={"heures_sup"}
          label={"HS"}
          type={"number"}
          value={employe.heures_sup}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={"restants"}
          name={"conges"}
          label={"congés"}
          type={"number"}
          value={employe.conges}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextArea
          name={"absences"}
          placeholder={
            "Liste des absences (justifiées ou non) avec les raisons associées  "
          }
          onChange={handleChange}
          value={employe.absences}
        />
        <TextArea
          name={"evaluations"}
          placeholder={
            "Évaluations de performance réalisées par les responsables ou superviseurs  "
          }
          onChange={handleChange}
          value={employe.evaluations}
        />
        <TextArea
          name={"primes"}
          placeholder={
            "Primes obtenues pour les performances exceptionnelles ou projets réalisés "
          }
          onChange={handleChange}
          value={employe.primes}
        />
      </div>
    </>
  );

  const iNotes = (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextArea
          name={"remarques"}
          placeholder={
            "Remarques générales sur l'employé, utiles pour les ressources humaines "
          }
          onChange={handleChange}
          value={employe.remarques}
        />
        <TextArea
          name={"feedback"}
          placeholder={
            "Commentaires de l'employé sur son travail, l'environnement de travail ou les outils utilisés "
          }
          onChange={handleChange}
          value={employe.feedback}
        />
        <TextArea
          name={"suggestions"}
          placeholder={
            "Suggestions faites par l'employé pour améliorer les processus ou la maintenance "
          }
          onChange={handleChange}
          value={employe.suggestions}
        />
      </div>
    </>
  );

  return (
    <div className="employe">
      <Title />
      <form onSubmit={handleSubmit}>
        <Accordion
          title={"Informations générales"}
          content={iGeneral}
          open={true}
        />
        <Accordion title={"Informations professionnelles"} content={iPro} />
        <Accordion
          title={"Informations sur les compétences"}
          content={iCompetences}
        />
        <Accordion
          title={"Informations sur les interventions "}
          content={iInterventions}
        />
        <Accordion title={"Informations sur la sécurité"} content={iSecurite} />
        <Accordion title={"Informations RH"} content={iRh} />
        <Accordion title={"Notes et commentaires"} content={iNotes} />
        <div className="form-button">
        {state.type === 'view' ?null:<Button label={"Enrégistrer"} type={"submit"} /> }

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

export default EmployeForm;
