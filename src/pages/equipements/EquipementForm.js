import React, { useState } from "react";
import "./equipement.css";
import Title from "../../components/titlebar/Title";
import Input from "../../ui/input/Input";
import Accordion from "../../ui/accordion/Accordion";
import Button from "../../ui/button/Button";
import { useNavigate } from "react-router-dom";
import Select from "../../ui/select/Select";
import { equipement as init } from "../../lib/definitions/equipement";
import TextArea from "../../ui/textarea/TextArea";
import { useDispatch } from "react-redux";
import { addEquipement } from "../../redux/equipementSlice";
import { v6 as uuid } from "uuid";
const EquipementForm = () => {
  const dispatch = useDispatch();
  const [equipement, setEquipement] = useState(init);
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();

    setEquipement({ ...equipement, [e.target.name]: e.target.value });
    console.log(equipement);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addEquipement({ uuid: uuid(), ...equipement }));
    setEquipement(init)
    console.log(equipement);
    // navigate(-1);
  };

  const iGeneral = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={4}
          name={"designation"}
          label={"Désignation"}
          type={"text"}
          value={equipement.designation}
          onChange={handleChange}
        />
        <Select
          col={2}
          label={"catégorie"}
          name={"categorie"}
          options={[
            { label: "moteurs", value: "moteurs" },
            { label: "pompes", value: "pompes" },
            { label: "machines", value: "machines" },
            { label: "engins", value: "engins" },
            { label: "outils", value: "outils" },
          ]}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"marque"}
          label={"marque"}
          type={"text"}
          value={equipement.marque}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"modele"}
          label={"modele"}
          type={"text"}
          value={equipement.modele}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"serie"}
          label={"serie"}
          type={"text"}
          value={equipement.serie}
          onChange={handleChange}
        />

      </div>
      <div style={{ display: "flex" }}>
        <TextArea
          name={"description"}
          placeholder={"Description et détails supplémentaires sur l'equipement "}
          onChange={handleChange}
          value={equipement.description}
        />
      </div>
    </>
  );
  const iTechnique = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          placeholder={"puissance"}
          name={"puissance"}
          label={"puissance"}
          type={"text"}
          value={equipement.puissance}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"poids"}
          label={"poids"}
          type={"text"}
          value={equipement.poids}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"capacite"}
          label={"capacite"}
          type={"text"}
          value={equipement.capacite}
          onChange={handleChange}
        />

        <Input
          col={2}
          name={"tension"}
          label={"tension"}
          type={"text"}
          value={equipement.tension}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"frequence"}
          label={"frequence"}
          type={"text"}
          value={equipement.frequence}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"vitesse"}
          label={"vitesse"}
          type={"text"}
          value={equipement.vitesse}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>

        <Input
          col={2}
          placeholder={'dimension'}
          name={"longueur"}
          label={"longueur"}
          type={"number"}
          value={equipement.longueur}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={'dimension'}
          name={"largeur"}
          label={"largeur"}
          type={"number"}
          value={equipement.largeur}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={'dimension'}
          name={"hauteur"}
          label={"hauteur"}
          type={"number"}
          value={equipement.hauteur}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={'temperature'}
          name={"tmin"}
          label={"mininale"}
          type={"number"}
          value={equipement.tmin}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={'temperature'}
          name={"tmax"}
          label={"maximale"}
          type={"number"}
          value={equipement.tmax}
          onChange={handleChange}
        />
      </div>
    </>
  );

  const iAchat = (
    <div style={{ display: "flex" }}>

      <Input
        col={2}
        placeholder={"date"}
        name={"date"}
        label={"date"}
        type={"date"}
        value={equipement.date}
        onChange={handleChange}
      />
      <Input
        placeholder={"nom"}
        name={"fournisseur"}
        label={"fournisseur"}
        type={"text"}
        value={equipement.fournisseur}
        onChange={handleChange}
        col={3}
      />
      <Input
        col={2}
        placeholder={"acquisition"}
        name={"cout"}
        label={"coût"}
        type={"number"}
        value={equipement.cout}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"vie estimée"}
        name={"duree"}
        label={"durée"}
        type={"number"}
        value={equipement.duree}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"nb d'année"}
        name={"garantie"}
        label={"garantie"}
        type={"number"}
        value={equipement.garantie}
        onChange={handleChange}
      />
      <Select
        col={2}
        label={"statut"}
        name={"statut"}
        options={[
          { label: "propriétaire", value: "propriétaire" },
          { label: "location", value: "location" },

        ]}
        onChange={handleChange}
      />
    </div>
  );
  const iMaintenances = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={10}
          placeholder={"Entretien préventif mensuel, inspection annuelle"}
          name={"plan"}
          label={"planning"}
          type={"text"}
          value={equipement.plan}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={"date"}
          name={"derniere"}
          label={"dernière"}
          type={"date"}
          value={equipement.derniere}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={"prochaine"}
          name={"prochaine"}
          label={"prochaine"}
          type={"date"}
          value={equipement.prochaine}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>

        <Input
          col={2}
          placeholder={"durée entre 2 pannes"}
          name={"MTBF"}
          label={"MTBF"}
          type={"number"}
          value={equipement.MTBF}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={"temps de réparation"}
          name={"MTTR"}
          label={"MTTR"}
          type={"number"}
          value={equipement.MTTR}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextArea
          name={"interventions"}
          placeholder={"Historique des interventions et autres... "}
          onChange={handleChange}
          value={equipement.interventions}
        />
      </div>
    </>
  );
  const iEmplacement = (
    <div style={{ display: "flex" }}>
      <Input
        col={4}
        placeholder={""}
        name={"localisation"}
        label={"localisation"}
        type={"text"}
        value={equipement.localisation}
        onChange={handleChange}
      />

      <Input
        col={3}
        placeholder={""}
        name={"site"}
        label={"site"}
        type={"text"}
        value={equipement.site}
        onChange={handleChange}
      />


    </div>
  );

  const iStatut = (
    <div style={{ display: "flex" }}>
      <Input
        col={2}
        placeholder={"mis en service "}
        name={"debut"}
        label={"date"}
        type={"date"}
        value={equipement.debut}
        onChange={handleChange}
      />
      <Select
        col={2}
        label={"etat"}
        name={"etat"}
        options={[
          { label: "en service", value: "en service" },
          { label: "hors service", value: "hors service" },
          { label: "en maintenance", value: "en maintenance" },

        ]}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"fonctionnement"}
        name={"temps"}
        label={"temps"}
        type={"number"}
        value={equipement.temps}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"taux "}
        name={"usure"}
        label={"usure"}
        type={"number"}
        value={equipement.usure}
        onChange={handleChange}
      />

    </div>
  );


  const iDocs = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          name={"image"}
          label={"image"}
          type={"file"}
          onChange={handleChange}
        />
        <Input
          name={"fiche"}
          label={"fiche"}
          type={"file"}
          onChange={handleChange}
        />
        <Input
          name={"manuel"}
          label={"manuel"}
          type={"file"}
          onChange={handleChange}
        />
        <Input
          name={"certificat"}
          label={"certificat"}
          type={"file"}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          placeholder={"assurance"}
          name={"police"}
          label={"police"}
          type={"text"}
          value={equipement.police}
          onChange={handleChange}
        />
        <Input
          col={3}
          placeholder={"assurance"}
          name={"compagnie"}
          label={"compagnie"}
          type={"text"}
          value={equipement.compagnie}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>

      </div>
      <div style={{ display: "flex" }}>
        <TextArea
          name={"notes"}
          placeholder={"notes ou remarques suplémentaires... "}
          onChange={handleChange}
          value={equipement.notes}
        />
      </div>
    </>
  );
  const iCapteurs = (
    <div style={{ display: "flex" }}>
      <Input
        col={2}
        placeholder={"relevé capteur"}
        name={"temperature"}
        label={"temperature"}
        type={"number"}
        value={equipement.temperature}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"relevé capteur"}
        name={"vibration"}
        label={"vibration"}
        type={"number"}
        value={equipement.vibration}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"relevé capteur"}
        name={"humidite"}
        label={"humidité"}
        type={"number"}
        value={equipement.humidite}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"relevé capteur"}
        name={"mesure"}
        label={"mésures"}
        type={"number"}
        value={equipement.mesure}
        onChange={handleChange}
      />
    </div>
  );


  return (
    <div className="equipement">
      <Title />
      <form onSubmit={handleSubmit}>
        <Accordion
          title={"Informations générales"}
          content={iGeneral}
          open={true}
        />
        <Accordion title={"Caractéristiques techniques"} content={iTechnique} />
        <Accordion title={"Données d’achat et de gestion"} content={iAchat} />
        <Accordion title={"Informations de maintenance"} content={iMaintenances} />
        <Accordion title={"Emplacement"} content={iEmplacement} />
        <Accordion title={"Statut opérationnel"} content={iStatut} />
        <Accordion title={"Documents associés"} content={iDocs} />
        <Accordion title={"Capteurs et IoT"} content={iCapteurs} />
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

export default EquipementForm;
