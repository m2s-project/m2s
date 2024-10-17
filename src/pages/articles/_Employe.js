import React, { useState } from "react";
import { employe as init } from "./lib/definitions";
import Input from "../components/frontend/ui/input/Input";
import Accordion from "../components/frontend/ui/accordion/Accordion";

const Employes = () => {
const [employe, setEmploye] = useState(init)
  const onChange = (e) => {
    e.preventDefault();
    console.log(  e.target.value);
    
  setEmploye({...employe, [e.target.name]:e.target.value})
  };
  console.log(employe);
  const iGeneral = (  <div style={{display:"flex"}} >

    <Input name={'nom'} label={"Nom"} type={'text'} value={employe.nom} onChange={onChange}/>
    <Input name={'prenom'} label={"prenom"} type={'text'} value={employe.prenom} onChange={onChange}/>
    <Input name={'sexe'} label={"sexe"} type={'text'} value={employe.sexe} onChange={onChange}/>
    <Input name={'dateNaissance'} label={"dateNaissance"} type={'text'} value={employe.dateNaissance} onChange={onChange}/>
    <Input name={'telephone'} label={"telephone"} type={'text'} value={employe.telephone} onChange={onChange}/>
    <Input name={'email'} label={"email"} type={'text'} value={employe.email} onChange={onChange}/>
    <Input name={'adresse'} label={"adresse"} type={'text'} value={employe.adresse} onChange={onChange}/>
    <Input name={'cnss'} label={"cnss"} type={'text'} value={employe.cnss} onChange={onChange}/>
    <Input name={'statut'} label={"statut"} type={'text'} value={employe.statut} onChange={onChange}/>
   </div>)

   const iProfession= ( <div style={{display:"flex"}} >
    <Input name={'matricule'} label={"matricule"} type={'text'} value={employe.matricule} onChange={onChange}/>
    <Input name={'poste'} label={"poste"} type={'text'} value={employe.poste} onChange={onChange}/>
    <Input name={'service'} label={"service"} type={'text'} value={employe.service} onChange={onChange}/>
    <Input name={'dateEmbauche'} label={"dateEmbauche"} type={'text'} value={employe.dateEmbauche} onChange={onChange}/>
    <Input name={'dateDepart'} label={"dateDepart"} type={'text'} value={employe.dateDepart} onChange={onChange}/>
    <Input name={'typeContrat'} label={"typeContrat"} type={'text'} value={employe.typeContrat} onChange={onChange}/>
    <Input name={'responsabilites'} label={"responsabilites"} type={'text'} value={employe.responsabilites} onChange={onChange}/>
    </div>)

    const iAcces = (  <div style={{display:"flex"}} >
        <Input name={'roleDansLeSysteme'} label={"roleDansLeSysteme"} type={'text'} value={employe.roleDansLeSysteme} onChange={onChange}/>
        <Input name={'niveauAcces'} label={"niveauAcces"} type={'text'} value={employe.niveauAcces} onChange={onChange} col={2}/>
        <Input name={'modulesAccessibles'} label={"modulesAccessibles"} type={'text'} value={employe.modulesAccessibles} onChange={onChange} col={2}/>
        <Input name={'historiqueConnexions'} label={"historiqueConnexions"} type={'text'} value={employe.historiqueConnexions} onChange={onChange}/>
        <Input name={'historiqueActions'} label={"historiqueActions"} type={'text'} value={employe.historiqueActions} onChange={onChange}/>
        <Input name={'authentification'} label={"authentification"} type={'text'} value={employe.authentification} onChange={onChange}/>
        </div>)

        const iCompetences = ( <div style={{display:"flex"}} >
            <Input name={'certifications'} label={"certifications"} type={'text'} value={employe.certifications} onChange={onChange}/>
            <Input name={'competences'} label={"competences"} type={'text'} value={employe.competences} onChange={onChange}/>
            <Input name={'languesParlees'} label={"languesParlees"} type={'text'} value={employe.languesParlees} onChange={onChange}/>
            <Input name={'experience'} label={"experience"} type={'text'} value={employe.experience} onChange={onChange}/>
            <Input name={'formations'} label={"formations"} type={'text'} value={employe.formations} onChange={onChange}/>
            <Input name={'permis'} label={"permis"} type={'text'} value={employe.permis} onChange={onChange}/>
            </div>)
         

                const iInterventions =(<div style={{display:"flex"}} >
                    <Input name={'ordresTravailAttribues'} label={"ordresTravailAttribues"} type={'text'} value={employe.ordresTravailAttribues} onChange={onChange} col={1}/>
                    <Input name={'historiqueInterventions'} label={"historiqueInterventions"} type={'text'} value={employe.historiqueInterventions} onChange={onChange}/>
                    <Input name={'compteurInterventions'} label={"compteurInterventions"} type={'text'} value={employe.compteurInterventions} onChange={onChange}/>
                    <Input name={'tempsMoyenIntervention'} label={"tempsMoyenIntervention"} type={'text'} value={employe.tempsMoyenIntervention} onChange={onChange}/>
                    <Input name={'reussite'} label={"reussite"} type={'text'} value={employe.reussite} onChange={onChange}/>
                    <Input name={'disponibilite'} label={"disponibilite"} type={'text'} value={employe.disponibilite} onChange={onChange}/>
                    </div>)
                    
                    const iRh =(    
                        <div style={{display:"flex"}} >
                    <Input name={'salaire'} label={"salaire"} type={'text'} value={employe.salaire} onChange={onChange} col={1}/>
                    <Input name={'heuresSup'} label={"heuresSup"} type={'text'} value={employe.heuresSup} onChange={onChange}/>
                    <Input name={'conges'} label={"conges"} type={'text'} value={employe.conges} onChange={onChange}/>
                    <Input name={'absences'} label={"absences"} type={'text'} value={employe.absences} onChange={onChange}/>
                    <Input name={'evaluations'} label={"evaluations"} type={'text'} value={employe.evaluations} onChange={onChange}/>
                    <Input name={'primesBonus'} label={"primesBonus"} type={'text'} value={employe.primesBonus} onChange={onChange}/>
                    </div>)
                    const iSecurite=(<div style={{display:"flex"}} >
                        <Input name={'formationsSecurite'} label={"formationsSecurite"} type={'text'} value={employe.formationsSecurite} onChange={onChange} col={1}/>
                        <Input name={'epi'} label={"epi"} type={'text'} value={employe.epi} onChange={onChange}/>
                        <Input name={'accidents'} label={"accidents"} type={'text'} value={employe.accidents} onChange={onChange}/>
                        <Input name={'proceduresSecurite'} label={"proceduresSecurite"} type={'text'} value={employe.proceduresSecurite} onChange={onChange}/>
                        </div>)
                        const iCommentaires =(    <div style={{display:"flex"}} >
                            <Input name={'remarques'} label={"remarques"} type={'text'} value={employe.remarques} onChange={onChange}/>
                            <Input name={'notesCommentaires'} label={"notesCommentaires"} type={'text'} value={employe.notesCommentaires} onChange={onChange}/>
                            <Input name={'feedbackSuggestions'} label={"feedbackSuggestions"} type={'text'} value={employe.feedbackSuggestions} onChange={onChange}/>
                              </div>)
                              
  return(
  <>
   <Accordion title={"Informations Générales"} content={iGeneral}/>
    <Accordion title={"Informations Professionnelles"} content={iProfession}/>
    <Accordion title={"Informations sur les Rôles et Accès"} content={iAcces}/>
    <Accordion title={"Informations sur les Compétences"} content={iCompetences}/>
    
    <Accordion title={"Informations sur la Gestion des Interventions"} content={iInterventions}/>
    <Accordion title={"Informations RH et Paie"} content={iRh}/>
    <Accordion title={"Informations sur la Sécurité"} content={iSecurite}/>
    <Accordion title={"Notes et Commentaires"} content={iCommentaires}/>
    
  <form>

   
  
   


    

    
  
  </form>
  </>
  
  )
};

export default Employes;
