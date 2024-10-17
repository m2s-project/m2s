import React, { useEffect, useState } from "react";
import "./commande.css";
import Title from "../../components/titlebar/Title";
import Input from "../../ui/input/Input";
import Accordion from "../../ui/accordion/Accordion";
import Button from "../../ui/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "../../ui/select/Select";
import { commande as init } from "../../lib/definitions/commande";
import TextArea from "../../ui/textarea/TextArea";
import { useDispatch } from "react-redux";
import {
  addCommande,
  deleteCommande,
  updateCommande,
} from "../../redux/commandeSlice";
import { v6 as uuid } from "uuid";
const CommandeForm = () => {
  const dispatch = useDispatch();
  const [commande, setCommande] = useState(init);
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
  console.log(pathname.split("/").includes("suppression"));
  const handleChange = (e) => {
    e.preventDefault();

    setCommande({ ...commande, [e.target.name]: e.target.value });
    console.log(commande);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pathname.split("/").includes("suppression")) {
      dispatch(deleteCommande(commande));
      navigate(-1);
    } else {
      state
        ? dispatch(updateCommande(commande))
        : dispatch(addCommande({ uuid: uuid(), ...commande }));
    }

    setCommande(init);
    console.log(commande);
  };

  const iGeneral = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          name={"numero"}
          label={"numéro"}
          type={"number"}
          value={commande.numero}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"date"}
          label={"date"}
          type={"date"}
          value={commande.date}
          onChange={handleChange}
        />
        <Select
          col={2}
          label={"type"}
          name={"type"}
          options={[
            { label: "achat", value: "achat" },
            { label: "vente", value: "vente" },
            { label: "réappro", value: "réappro" },
          ]}
          onChange={handleChange}
        />
        <Select
          col={2}
          label={"statut"}
          name={"statut"}
          options={[
            { label: "en attente", value: "en attente" },
            { label: "validée", value: "validée" },
            { label: "expédiée", value: "expédiée" },
            { label: "livrée", value: "livrée" },
            { label: "annulée", value: "annulée" },
          ]}
          value={commande.statut}
          onChange={handleChange}
        />

        <Input
          col={2}
          name={"reference"}
          label={"reférence"}
          type={"text"}
          value={commande.reference}
          onChange={handleChange}
        />
      </div>
    </>
  );

  const iTiers = (
    <div style={{ display: "flex" }}>
      <TextArea
        name={"tiers"}
        placeholder={"Informations client / fournisseur ... "}
        onChange={handleChange}
        value={commande.tiers}
      />
    </div>
  );
  const iDetails = (
    <div style={{ display: "flex" }}>
      <TextArea
        name={"articles"}
        placeholder={"Liste des articles et quantités... "}
        onChange={handleChange}
        value={commande.articles}
      />
    </div>
  );

  const iFinance = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={3}
          placeholder={" total"}
          name={"montant"}
          label={"montant"}
          type={"number"}
          value={commande.montant}
          onChange={handleChange}
        />

        <Input
          col={2}
          placeholder={"19%"}
          name={"taxes"}
          label={"taxes"}
          type={"number"}
          value={commande.taxes}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={"montant "}
          name={"recu"}
          label={"reçu"}
          type={"number"}
          value={commande.recu}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          placeholder={"restant"}
          name={"solde"}
          label={"solde"}
          type={"number"}
          value={commande.solde}
          onChange={handleChange}
        />
        <Select
          label={"écheance"}
          name={"echeance"}
          options={[
            { label: "30 jours", value: "30 jours" },
            { label: "1 semaine", value: "1 semaine" },
            { label: "immédiat", value: "immédiat" },
          ]}
          onChange={handleChange}
        />
        <Select
          label={"paiement"}
          name={"paiement"}
          options={[
            { label: "carte bancaire", value: "carte bancaire" },
            { label: "virement", value: "virement" },
            { label: "chèque", value: "chèque" },
            { label: "espèces", value: "espèces" },
          ]}
          onChange={handleChange}
        />
      </div>
    </>
  );

  const iLivraison = (
    <>
      <div style={{ display: "flex" }}>
        <Select
          col={2}
          label={"mode"}
          name={"mode"}
          options={[
            { label: "à domicile", value: "à domicile" },
            { label: "retrait", value: "retrait" },
            { label: "expédition", value: "expédition" },
          ]}
          onChange={handleChange}
        />

        <Input
          col={2}
          name={"date_prevue"}
          label={"prévision"}
          type={"date"}
          value={commande.date_prevue}
          onChange={handleChange}
        />

        <Input
          col={2}
          name={"date__estimee"}
          label={"estimation"}
          type={"date"}
          value={commande.date__estimee}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Input
          name={"transporteur"}
          label={"transporteur"}
          type={"text"}
          value={commande.transporteur}
          onChange={handleChange}
        />
        <Input
          name={"numero_suivi"}
          label={"numero tracking"}
          type={"text"}
          value={commande.numero_suivi}
          onChange={handleChange}
        />

        <Select
          label={"etat"}
          name={"etat"}
          options={[
            { label: "en transit", value: "en transit" },
            { label: "en retard", value: "en retard" },
            { label: "livrée", value: "livrée" },
          ]}
          onChange={handleChange}
        />
      </div>
    </>
  );

  const iHistorique = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={3}
          placeholder={"employé"}
          name={"cree_par"}
          label={"crée par"}
          type={"text"}
          value={commande.cree_par}
          onChange={handleChange}
        />
        <Input
          name={"modification"}
          label={"modification"}
          type={"date"}
          value={commande.modification}
          onChange={handleChange}
        />
        <Input
          col={5}
          name={"commentaires"}
          label={"commentaires"}
          type={"text"}
          value={commande.commentaires}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextArea
          name={"actions"}
          placeholder={"Historiques des actions... "}
          onChange={handleChange}
          value={commande.actions}
        />
      </div>
    </>
  );

  const iDocs = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          name={"bon_de_cmd"}
          label={"bon de commande"}
          type={"file"}
          onChange={handleChange}
        />
        <Input
          name={"facture"}
          label={"facture"}
          type={"file"}
          onChange={handleChange}
        />
        <Input
          name={"bon_de_liv"}
          label={"bon de livraison"}
          type={"file"}
          onChange={handleChange}
        />
        <Input
          name={"devis"}
          label={"dévis"}
          type={"file"}
          onChange={handleChange}
        />
      </div>

      <div style={{ display: "flex" }}>
        <TextArea
          name={"notes"}
          placeholder={"notes ou remarques suplémentaires... "}
          onChange={handleChange}
          value={commande.notes}
        />
      </div>
    </>
  );

  useEffect(() => {
    state && setCommande(state);
  }, [state]);

  return (
    <div className="commande">
      <Title />
      <form onSubmit={handleSubmit}>
        <Accordion
          title={"Informations générales"}
          content={iGeneral}
          open={true}
        />
        <Accordion title={"Informations tiers"} content={iTiers} />
        <Accordion title={"Détails articles et quantités"} content={iDetails} />
        <Accordion title={"Conditions financières"} content={iFinance} />
        <Accordion title={"Livraison et logistique"} content={iLivraison} />
        <Accordion
          title={"Historique et suivi commande"}
          content={iHistorique}
        />
        <Accordion title={"Documents associés"} content={iDocs} />
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

export default CommandeForm;
