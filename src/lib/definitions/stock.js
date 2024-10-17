export const stock = {
  // 1.	informations générales 
  code: "",
  designation: "",
  categorie: "",// mécanique, électrique, consommables...
  description: "",
//  2.	quantité et disponibilité 
stock_min: '',
stock_max: "",
stock_actuel: '', //dispo
seuil_reappro: "",
  // 3.	emplacement*
    localisation: "",
    entrepot: "",
  // 4.	données de gestion* 

    prix_achat: 10.5,
    prix_vente: 15.0,
    cout_stockage: 0.05,
    date_entree: "2024-09-10",
    date_peremption: null,
    fournisseur: "" ,
  // 5.	mouvements de stock 
  mouvements_stock: {
    derniere_entree: {
      date: "2024-09-10",
      quantite: 50,
      fournisseur: "skf distributeur",
    },
    derniere_sortie: {
      date: "2024-09-20",
      quantite: 10,
      destinataire: "atelier de maintenance",
    },
    historique: [ ],
  },
  // 6.	informations supplémentaires* 
 
    statut: "",//est en stock, en réapprovisionnement, en rupture de stock
    lot: "",
    responsable: "",
    unite: "",
 
};
