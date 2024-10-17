import React, { useState } from "react";
import { article as init } from "./lib/definitions";
import Input from "../components/frontend/ui/input/Input";
import Accordion from "../components/frontend/ui/accordion/Accordion";

const Articles = () => {
const [article, setArticle] = useState(init)
  const onChange = (e) => {
    e.preventDefault();
    console.log(  e.target.value);
    
  setArticle({...article, [e.target.name]:e.target.value})
  };
  console.log(article);
  const iGeneral = (  <div style={{display:"flex"}} >

    <Input name={'code'} label={"code"} type={'text'} value={article.code} onChange={onChange}/>
    <Input name={'nom'} label={"Nom"} type={'text'} value={article.nom} onChange={onChange}/>
    <Input name={'categorie'} label={"catégorie"} type={'text'} value={article.categorie} onChange={onChange}/>
    <Input name={'description'} label={"description"} type={'text'} value={article.description} onChange={onChange}/>
    <Input name={'statut'} label={"statut"} type={'text'} value={article.statut} onChange={onChange}/>
   </div>)

   const iTechnique = ( <div style={{display:"flex"}} >
    <Input name={'reference'} label={"reférence"} type={'text'} value={article.reference} onChange={onChange}/>
    <Input name={'marque'} label={"marque"} type={'text'} value={article.marque} onChange={onChange}/>
    <Input name={'modele'} label={"modèle"} type={'text'} value={article.modele} onChange={onChange}/>
    <Input name={'dimensions'} label={"dimensions"} type={'text'} value={article.dimensions} onChange={onChange}/>
    <Input name={'poids'} label={"poids"} type={'text'} value={article.poids} onChange={onChange}/>
    <Input name={'matiere'} label={"matière"} type={'text'} value={article.matiere} onChange={onChange}/>
    <Input name={'normes'} label={"normes"} type={'text'} value={article.normes} onChange={onChange}/>
    </div>)

    const iLog = (  <div style={{display:"flex"}} >
        <Input name={'unite'} label={"unité"} type={'text'} value={article.unite} onChange={onChange}/>
        <Input name={'quantiteMinimum'} label={"Minimum"} type={'text'} value={article.quantiteMinimum} onChange={onChange} col={2}/>
        <Input name={'quantiteEnStock'} label={"Stock"} type={'text'} value={article.quantiteEnStock} onChange={onChange} col={2}/>
        <Input name={'emplacement'} label={"emplacement"} type={'text'} value={article.emplacement} onChange={onChange}/>
        <Input name={'volume'} label={"volume"} type={'text'} value={article.volume} onChange={onChange}/>
        <Input name={'delai'} label={"délai"} type={'text'} value={article.delai} onChange={onChange}/>
        </div>)

        const iFournisseur = ( <div style={{display:"flex"}} >
            <Input name={'fournisseur'} label={"fournisseur"} type={'text'} value={article.fournisseur} onChange={onChange}/>
            <Input name={'refFournisseur'} label={"refFournisseur"} type={'text'} value={article.refFournisseur} onChange={onChange}/>
            <Input name={'prixAchat'} label={"prix"} type={'text'} value={article.prixAchat} onChange={onChange}/>
            <Input name={'conditionsAchat'} label={"conditions"} type={'text'} value={article.conditionsAchat} onChange={onChange}/>
            <Input name={'historiqueAchat'} label={"historique"} type={'text'} value={article.historiqueAchat} onChange={onChange}/>
            </div>)
            const iStock =(    <div style={{display:"flex"}} >
                <Input name={'stockDeSecurite'} label={"Securité"} type={'text'} value={article.stockDeSecurite} onChange={onChange} col={2}/>
                <Input name={'seuil'} label={"seuil"} type={'text'} value={article.seuil} onChange={onChange}/>
                <Input name={'stockMaximum'} label={"Maximum"} type={'text'} value={article.stockMaximum} onChange={onChange} col={2}/>
                <Input name={'historiqueMouvements'} label={"historiqueMouvements"} type={'text'} value={article.historiqueMouvements} onChange={onChange} col={2}/>
                </div>)
                const icVal =(<div style={{display:"flex"}} >
                    <Input name={'prixUnitaire'} label={"prixUnitaire"} type={'text'} value={article.prixUnitaire} onChange={onChange} col={1}/>
                    <Input name={'coutTotal'} label={"coutTotal"} type={'text'} value={article.coutTotal} onChange={onChange}/>
                    <Input name={'coutMoyen'} label={"coutMoyen"} type={'text'} value={article.coutMoyen} onChange={onChange}/>
                    <Input name={'modeValo'} label={"Valorisation"} type={'text'} value={article.modeValo} onChange={onChange}/>
                    </div>)
                    const iMaintenance =(    
                        <div style={{display:"flex"}} >
                    <Input name={'compatibilite'} label={"compatibilite"} type={'text'} value={article.compatibilite} onChange={onChange} col={1}/>
                    <Input name={'historiqueMaintenance'} label={"historiqueMaintenance"} type={'text'} value={article.historiqueMaintenance} onChange={onChange}/>
                    <Input name={'remplacement'} label={"remplacement"} type={'text'} value={article.remplacement} onChange={onChange}/>
                    </div>)
                    const iFinance=(<div style={{display:"flex"}} >
                        <Input name={'tva'} label={"tva"} type={'text'} value={article.tva} onChange={onChange} col={1}/>
                        <Input name={'coutDeTransport'} label={"Transport"} type={'text'} value={article.coutDeTransport} onChange={onChange}/>
                        <Input name={'modeDePaiement'} label={"Paiement"} type={'text'} value={article.modeDePaiement} onChange={onChange}/>
                        <Input name={'echeanceDePaiement'} label={"écheance"} type={'text'} value={article.echeanceDePaiement} onChange={onChange}/>
                        </div>)
                        const iDocs =(    <div style={{display:"flex"}} >
                            <Input name={'image'} label={"image"} type={'text'} value={article.image} onChange={onChange}/>
                            <Input name={'fichesTechniques'} label={"fichesTechniques"} type={'text'} value={article.fichesTechniques} onChange={onChange}/>
                            <Input name={'certificats'} label={"certificats"} type={'text'} value={article.certificats} onChange={onChange}/>
                            <Input name={'historiqueModif'} label={"historiqueModif"} type={'text'} value={article.historiqueModif} onChange={onChange}/>
                              </div>)
                              const autres =(  <div style={{display:"flex"}} >
                                <Input name={'notes'} label={"notes"} type={'text'} value={article.notes} onChange={onChange}/>
                                <Input name={'etatUsure'} label={"etatUsure"} type={'text'} value={article.etatUsure} onChange={onChange}/>
                                  </div>)
  return(
  <>
   <Accordion title={"Informations Générales"} content={iGeneral}/>
    <Accordion title={"Informations Techniques"} content={iTechnique}/>
    <Accordion title={"Informations Logistiques"} content={iLog}/>
    <Accordion title={"Informations sur les Fournisseurs"} content={iFournisseur}/>
    <Accordion title={"Coût et Valorisation"} content={icVal}/>
    <Accordion title={"Gestion des Stocks"} content={iStock}/>
    <Accordion title={"Données de Maintenance"} content={iMaintenance}/>
    <Accordion title={"Informations Financières"} content={iFinance}/>
    <Accordion title={"Images et Documents Associés"} content={iDocs}/>
    <Accordion title={"Autres Informations"} content={autres}/>
  <form>

   
  
   


    

    
  
  </form>
  </>
  
  )
};

export default Articles;
