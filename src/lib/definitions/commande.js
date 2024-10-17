import { tiers } from "./tiers";

export const commande = {
  numero: "",
  date: "",
  type: "",//vente, achat, réapprovisionnement
  statut: "",//en attente, validée, expédiée, livrée, annulée
  reference: "",//référence ou numéro de commande client ou fournisseur
 //client / fournisseur 
  tiers: '',
  //details articles et quantités 
  articles: [ ],
  //conditions financières 
  
    montant: "",
    taxes:"",
    paiement: "",//methode de paiement utilisée (carte bancaire, virement, chèque, etc.).
    echeance: "",
    recu: '',//montant total déjà payé
    solde: '',//montant restant à payer
 //livraison et logistique
  
    mode: "",//(expédition, retrait en magasin, livraison à domicile).
    date_prevue: "",
    date__estimee: "",
    transporteur: "",
    numero_suivi: "",
    etat: "",//en transit, livrée, en retard
 
    //historique_suivi
  
    cree_par: "",
    modification: "",
    commentaires:'' ,
    actions: [ ],
  
  //documents associés 
    bon_de_cmd: null,
    facture: null,
    bon_de_liv: null,
    devis: null,
  notes:'',
};
