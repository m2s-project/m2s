export const article = {
  code: "",
  designation: "",
  categorie: "",// mécanique, électrique, consommables...
  description: "",
  statut: true,
  ref_fabricant: "",
  marque: "",
  modele: "",
  dimensions: {
    longueur: "",
    largeur: "",
    hauteur: "",
  },
  poids: "",
  matiere: "",//acier, plastique, etc
  normes: [],
  unite: "",//pièce, kilogramme, litre, etc.).
  stock_min: '',
  stock_max: "",
  stock_actuel: '', //dispo
  stock_securite: '',
  seuil_reappro: "",
  Localisation :[],
  volume: "",
  delai: "",
  fournisseur: "",
  ref_fournisseur: "",
  prix_achat: '',
  prix_vente:"",
  conditions: "",
  achats: [], //historique
  
  mouvements: [], //historique
  maintenances: [], //historique
  prix_revient:'',
  fret: '', //cout
  total:"",
  cump:'',
  valorisation:'', //FIFO, LIFO, CUMP
  tva: 19,
  paiement: "Virement bancaire", //mode
  echeance: "30 jours", // paiement
  
  compatibilite: '',//equipements
  liaison:[],
  image: "url-de-l-image.jpg",
  fiches: ["fichier-technique.pdf"], //Techniques
  certificat: ["certificat-CE.pdf"],
  modifications:[],// Historique modif article
  notes: "",
  etat: "Neuf", //etat usure
  remplacement:""
};
