export const entrepot = {
  //	informations générales
  nom: "",
  ville: "",
  bp: "",
  pays: "",

  type: "", //général, frigorifique, matières dangereuses
  description: "",
  //	dimensions et capacité

  surface: "",
  capacite: "",
  volume: "",
  hauteur: "",
  rayons: "",

  //	conditions environnementales

  tmin: "-",
  tmax: "",
  humidite: "",
  eclairage: "",
  ventilation: " ",

  //	sécurité et accès

  acces: "",
  cameras: "",
  alarme: "Alarme incendie et intrusion",
  portes: "",
  quais: "",
  //	données d’exploitation

  responsable: "",
  tel: "",
  email: "",

  horaires: "08:00 - 18:00",
  inspection: "",
  statut: "Ouvert", //ouvert, fermé, en maintenance

  //	localisation géographique

  latitude: "",
  longitude: "",
  region: "",
  proximite: "",

  //	inventaire actuel

  articles: "0",
  valeur: "0",
  categories: ["Produits surgelés", "Produits frais", "Produits secs"],

  //	technologies de gestion

  systeme: "eXM2s",
};
