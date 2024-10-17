export const utilisateur = {
  nom: "",
  prenom: "",
  pseudonyme: "",
  email: "",
  tel: "",
  naissance: "",
  bp: "",
  ville: "",
  pays: "",
  role: "",
  permissions: [],

  password: "",
  methode: "Email",
  token: "************************",

  statut: "",
  creation: new Date().toISOString(),
  connexion: "",
  activites: [],

  langue: "Français",

  email: true,
  sms: false,
  push: false,

  theme: "clair",

  maintenances: {
    tickets: [],
    equipements: [],
  },
};
