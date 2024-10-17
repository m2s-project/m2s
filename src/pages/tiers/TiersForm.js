import React, { useEffect, useState } from "react";
import "./tiers.css";
import Title from "../../components/titlebar/Title";
import Input from "../../ui/input/Input";
import Accordion from "../../ui/accordion/Accordion";
import Button from "../../ui/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "../../ui/select/Select";
import { tiers as init } from "../../lib/definitions/tiers";
import TextArea from "../../ui/textarea/TextArea";
import { useDispatch } from "react-redux";

import { v6 as uuid } from "uuid";
import { deleteTiers, upsertTiers } from "../../redux/tiersSlice";

const TiersForm = () => {
  const dispatch = useDispatch();
  const [tiers, setTiers] = useState(init);
  const navigate = useNavigate();
  const { state, pathname } = useLocation();

  useEffect(() => {
    state.item && setTiers(state.item);
  }, [state]);

  const handleChange = (e) => {
    e.preventDefault();
    setTiers({ ...tiers, [e.target.name]: e.target.value });
    console.log(tiers);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    switch (state.type) {
      case "new":
        let categorie = pathname.split("/").includes("clients")
          ? "client"
          : "fournisseur";
        dispatch(upsertTiers({ id: uuid(), data: { ...tiers, categorie } }));
        break;
      case "delete":
        dispatch(deleteTiers(tiers.id));
        navigate(-1);
        break;
      case "update":
        dispatch(upsertTiers({ id: tiers.id, data: tiers }));
        navigate(-1);
        break;

      default:
        break;
    }
    setTiers(init);
  };
  const iGeneral = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={1}
          name={"nif"}
          label={"NIF"}
          type={"text"}
          value={tiers.nif}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={"raison sociale"}
          name={"nom"}
          label={"nom"}
          type={"text"}
          value={tiers.nom}
          onChange={handleChange}
        />

        <Select
          label={"type"}
          name={"type"}
          options={[
            { label: "particulier", value: "particulier" },
            { label: "entreprise", value: "entreprise" },
            { label: "gouvernement", value: "gouvernement" },
            { label: "grossiste", value: "grossiste" },
            { label: "fabricant", value: "fabricant" },
            { label: "distributeur", value: "distributeur" },
            { label: "divers", value: "divers" },
          ]}
          onChange={handleChange}
          value={tiers.type}
        />
        <Input
          col={2}
          name={"tel"}
          label={"téléphone"}
          type={"text"}
          value={tiers.tel}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"email"}
          label={"email"}
          type={"email"}
          value={tiers.email}
          onChange={handleChange}
        />

        <Input
          col={1}
          name={"bp"}
          label={"bp"}
          type={"number"}
          value={tiers.bp}
          onChange={handleChange}
        />
        <Input
          col={1}
          name={"ville"}
          label={"ville"}
          type={"text"}
          value={tiers.ville}
          onChange={handleChange}
        />
        <Input
          col={1}
          name={"pays"}
          label={"pays"}
          type={"text"}
          value={tiers.pays}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}></div>
    </>
  );
  const iContact = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={3}
          name={"contact"}
          label={"nom complet"}
          type={"text"}
          value={tiers.contact}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={"poste occupé"}
          name={"position"}
          label={"position"}
          type={"text"}
          value={tiers.position}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"telc"}
          label={"Téléphone"}
          type={"text"}
          value={tiers.telc}
          onChange={handleChange}
        />

        <Input
          col={2}
          name={"email"}
          label={"email"}
          type={"email"}
          value={tiers.email}
          onChange={handleChange}
        />
      </div>
    </>
  );

  const iHoriques = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          placeholder={"comptabilé"}
          name={"compte"}
          label={"compte"}
          type={"number"}
          value={tiers.compte}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"creation"}
          label={"création"}
          type={"date"}
          value={tiers.creation}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"depenses"}
          label={"Dépenses"}
          type={"number"}
          value={tiers.depenses}
          onChange={handleChange}
          disabled
        />
        <Select
          label={"statut"}
          name={"statut"}
          options={[
            { label: "Actif", value: "Actif" },
            { label: "inactif", value: "inactif" },
            { label: "suspendu", value: "suspendu" },
          ]}
          onChange={handleChange}
          value={tiers.statut}
        />
      </div>

      <div style={{ display: "flex" }}>
        <TextArea
          name={"historiques"}
          placeholder={"liste des commandes ou achats passés..."}
          onChange={handleChange}
          value={tiers.historiques}
        />
      </div>
    </>
  );

  const ipaiements = (
    <div style={{ display: "flex" }}>
      <Select
        col={2}
        label={"mode"}
        name={"mode"}
        options={[
          { label: "espèce", value: "espèce" },
          { label: "Chèque", value: "Chèque" },
          { label: "virement", value: "virement" },
          { label: "Cb", value: "Cb" },
          { label: "autres", value: "autres" },
        ]}
        onChange={handleChange}
        value={tiers.mode}
      />

      <Select
        col={2}
        label={"condition"}
        name={"condition"}
        options={[
          { label: "immédiat", value: "immédiat" },
          { label: "1 semaine", value: "1 semaine" },
          { label: "30 jours", value: "30 jours" },
          { label: "autres", value: "autres" },
        ]}
        onChange={handleChange}
        value={tiers.condition}
      />
    </div>
  );

  return (
    <div className="tiers">
      <Title />
      <form onSubmit={handleSubmit}>
        <Accordion
          title={"Informations générales"}
          content={iGeneral}
          open={true}
        />
        <Accordion title={"Données de contact"} content={iContact} />
        <Accordion
          title={"Historique et données commerciales"}
          content={iHoriques}
        />
        <Accordion title={"Informations de paiement "} content={ipaiements} />

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

export default TiersForm;
