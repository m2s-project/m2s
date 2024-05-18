export const data = [
  {
    name: "Dashboard",
    route: "/",
  },
  {
    name: "Clients",
    route: "clients",

    children: [
      // { name: "Profiles", route: "profile" },
      { name: "Réglements", route: "reglement" },
      { name: "Ecarts", route: "ecart" },
      { name: "Echéanciers", route: "echeanciers" },
      { name: "Relances", route: "relances" },
      { name: "Transferts", route: "transfert" },
    ],
  },
  {
    name: "Dossiers",
    route: "dossiers",

    children: [
      { name: "Offres", route: "offres" },
      { name: "Marchés", route: "marches" },
      { name: "Bordereaux", route: "bordereau" },
    ],
  },
  {
    name: "Facturations",
    route: "facturations",

    children: [
      { name: "Acomptes", route: "acomptes" },
      { name: "Avoirs", route: "avoirs" },
      { name: "Devis", route: "devis" },
      { name: "Factures", route: "factures" },
    ],
  },

  {
    name: "Comptabilité",
    route: "comptabilite",

    children: [
      { name: "Journaux", route: "journaux" },
      { name: "Balance", route: "balance" },
      {
        name: "Grand Livre",
        route: "grandLivre",
      },
      {
        name: "Bilan",
        route: "bilan",
      },
      {
        name: "Résultat",
        route: "resultat",
      },
      {
        name: "Plan de comptes",
        route: "plan",
      },
    ],
  },

  {
    name: "RH's",
    route: "rh",

    children: [
      { name: "Employés", route: "employes" },
      { name: "CV's", route: "cv" },
      { name: "Paies", route: "paies" },
    ],
  },
  {
    name: "Paramètres",
    route: "parametres",

    children: [{ name: "Saha", route: "saha" },{ name: "Syscohada", route: "syscohada" }],

  },
];
