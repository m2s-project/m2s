import React, { useEffect, useState } from "react";
import "./entrepot.css";
import Title from "../../components/titlebar/Title";
import Input from "../../ui/input/Input";
import Accordion from "../../ui/accordion/Accordion";
import Button from "../../ui/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "../../ui/select/Select";
import { entrepot as init } from "../../lib/definitions/entrepot";
import { useDispatch } from "react-redux";
import { deleteEntrepot, upsertEntrepot } from "../../redux/entrepotSlice";
import { v6 as uuid } from "uuid";

const EntrepotForm = () => {
  const dispatch = useDispatch();
  const [entrepot, setEntrepot] = useState(init);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    state.item && setEntrepot(state.item);
  }, [state]);
  console.log(state);
  const handleChange = (e) => {
    e.preventDefault();
    setEntrepot({ ...entrepot, [e.target.name]: e.target.value });
    console.log(entrepot);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    switch (state.type) {
      case "new":
        console.log("disp",entrepot);
        
        dispatch(upsertEntrepot({ id: uuid(), data: entrepot }));
        break;
      case "delete":
        dispatch(deleteEntrepot(entrepot.id));
        navigate(-1);
        break;
      case "update":
        dispatch(upsertEntrepot({ id: entrepot.id, data: entrepot }));
        navigate(-1);
        break;

      default:
        break;
    }
    setEntrepot(init);
  };

  const iGeneral = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={3}
          name={"nom"}
          label={"nom"}
          type={"text"}
          value={entrepot.nom}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"ville"}
          label={"ville"}
          type={"text"}
          value={entrepot.ville}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"bp"}
          label={"bp"}
          type={"text"}
          value={entrepot.bp}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"pays"}
          label={"pays"}
          type={"text"}
          value={entrepot.pays}
          onChange={handleChange}
        />

        <Select
          col={2}
          label={"type"}
          name={"type"}
          options={[
            { label: "général", value: "général" },
            { label: "frigorifique", value: "frigorifique" },
            { label: "matières dangereuses", value: "matières dangereuses" },
            { label: "autres", value: "autres" },
          ]}
          onChange={handleChange}
          value={entrepot.type}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Input
          col={8}
          name={"description"}
          label={"description"}
          type={"text"}
          value={entrepot.description}
          onChange={handleChange}
        />
      </div>
    </>
  );
  const iDimensions = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          placeholder={"surface"}
          name={"surface"}
          label={"surface"}
          type={"number"}
          value={entrepot.surface}
          onChange={handleChange}
        />

        <Input
          col={2}
          name={"capacite"}
          label={"capacite"}
          type={"number"}
          value={entrepot.capacite}
          onChange={handleChange}
        />

        <Input
          col={2}
          name={"volume"}
          label={"volume"}
          type={"number"}
          value={entrepot.volume}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"hauteur"}
          label={"hauteur"}
          type={"number"}
          value={entrepot.hauteur}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"rayons"}
          label={"rayons"}
          type={"number"}
          value={entrepot.rayons}
          onChange={handleChange}
        />
      </div>
    </>
  );

  const iConditions = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          placeholder={"température"}
          name={"tmin"}
          label={"minimale (°C)"}
          type={"number"}
          value={entrepot.tmin}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={"température"}
          name={"tmax"}
          label={"maximale (°C)"}
          type={"number"}
          value={entrepot.tmax}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"humidite"}
          label={"humidité (%)"}
          type={"number"}
          value={entrepot.humidite}
          onChange={handleChange}
        />
        <Input
          col={3}
          name={"eclairage"}
          label={"éclairage"}
          type={"text"}
          value={entrepot.eclairage}
          onChange={handleChange}
        />
        <Input
          col={3}
          name={"ventilation"}
          label={"ventilation"}
          type={"text"}
          value={entrepot.ventilation}
          onChange={handleChange}
        />
      </div>
    </>
  );

  const iSecurite = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={3}
          name={"acces"}
          label={"acces"}
          type={"text"}
          value={entrepot.acces}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"cameras"}
          label={"cameras"}
          type={"number"}
          value={entrepot.cameras}
          onChange={handleChange}
        />
        <Input
          col={3}
          name={"alarme"}
          label={"alarme"}
          type={"text"}
          value={entrepot.alarme}
          onChange={handleChange}
        />

        <Input
          col={2}
          placeholder={"nombres"}
          name={"portes"}
          label={"portes"}
          type={"number"}
          value={entrepot.portes}
          onChange={handleChange}
        />
        <Input
          placeholder={"chargement"}
          col={2}
          name={"quais"}
          label={"quais"}
          type={"number"}
          value={entrepot.quais}
          onChange={handleChange}
        />
      </div>
    </>
  );

  const iExploitation = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={4}
          name={"responsable"}
          label={"responsable"}
          type={"text"}
          value={entrepot.responsable}
          onChange={handleChange}
        />

        <Input
          col={2}
          name={"tel"}
          label={"téléphone"}
          type={"text"}
          value={entrepot.tel}
          onChange={handleChange}
        />
        <Input
          col={3}
          name={"email"}
          label={"email"}
          type={"email"}
          value={entrepot.email}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          name={"horaires"}
          label={"horaires"}
          type={"text"}
          value={entrepot.horaires}
          onChange={handleChange}
        />
        <Input
          name={"inspection"}
          label={"inspection"}
          type={"date"}
          value={entrepot.inspection}
          onChange={handleChange}
        />
        <Select
          label={"statut"}
          name={"statut"}
          options={[
            { label: "ouvert", value: "ouvert" },
            { label: "fermé", value: "fermé" },
            { label: "en maintenance", value: "en maintenance" },
          ]}
          onChange={handleChange}
          value={entrepot.statut}
        />
      </div>
    </>
  );
  const iLocalisation = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          name={"latitude"}
          label={"latitude"}
          type={"number"}
          value={entrepot.latitude}
          onChange={handleChange}
        />

        <Input
          col={2}
          name={"longitude"}
          label={"longitude"}
          type={"number"}
          value={entrepot.longitude}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"region"}
          label={"région"}
          type={"text"}
          value={entrepot.region}
          onChange={handleChange}
        />

        <Input
          col={4}
          name={"proximite"}
          label={"proximité"}
          type={"text"}
          value={entrepot.proximite}
          onChange={handleChange}
        />
      </div>
    </>
  );
  const iInventaire = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          placeholder={"total"}
          name={"articles"}
          label={"articles"}
          type={"number"}
          value={entrepot.articles}
          onChange={handleChange}
        />

        <Input
          col={2}
          placeholder={"stock"}
          name={"valeur"}
          label={"valeur"}
          type={"number"}
          value={entrepot.valeur}
          onChange={handleChange}
        />
        <Input
          col={8}
          name={"categories"}
          label={"categories"}
          type={"text"}
          value={entrepot.categories.toString()}
          onChange={handleChange}
        />
      </div>
    </>
  );

  return (
    <div className="entrepot">
      <Title />
      <form onSubmit={handleSubmit}>
        <Accordion
          title={"Informations générales"}
          content={iGeneral}
          open={true}
        />
        <Accordion title={"Conditions environnementales "} content={iConditions} />
        <Accordion title={"Dimensions et capacité"} content={iDimensions} />
        <Accordion title={"Sécurité et accès"} content={iSecurite} />
        <Accordion title={"Données d’exploitation"} content={iExploitation} />
        <Accordion
          title={"Localisation géographique"}
          content={iLocalisation}
        />
        <Accordion title={"Inventaire actuel "} content={iInventaire} />
        <div className="form-button">
          {state.type === "view" ? null : (
            <Button label={"Enrégistrer"} type={"submit"} />
          )}

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

export default EntrepotForm;
