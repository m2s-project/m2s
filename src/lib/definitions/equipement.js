export const equipement = {
  //Informations générales
  designation: "",
  categorie: "", //moteur, pompe, machine-outil
  marque: "",
  modele: "",
  serie: "",
  description: "", //Brève description des fonctionnalités ou de l'usage de l'équipement
  
  //Caracteristiques techniques

    puissance: "",
    poids: "",
    capacite: "",
    tension: "",
    frequence: "",
    vitesse: "",
   
      tmin: "",//temperature
      tmax: "",
   
    longueur: "",//dimensions
    largeur: "",
    hauteur: "",


  //Données d’achat et de gestion
  date: "",
  fournisseur: "",
  cout: "",
  duree: "",//Durée de vie estimée 
  garantie: "",
  statut: "", //propriétaire ou loué

  //Informations de maintenance
  plan: "", //Entretien préventif tous les 6 mois, inspection annuelle.
  derniere: "",
  prochaine: "",
  MTBF: "",
  MTTR: "",
  interventions: [],

  //Emplacement
  localisation: "",
  site: "",

  //Statut opérationnel
  debut :'', //date de mis en service
  etat: "", //normal, en panne, en maintenance, hors service.
  temps: "",
  usure: "",

  //Documents associés
  image: [],
  fiche: "",
  manuel: "",
  certificat: [],
  police: "",
  compagnie: "",
  notes:[],

  //Capteurs et IoT
  temperature: "",
  vibration: "",
  humidite: "",
  mesure: "",
};
