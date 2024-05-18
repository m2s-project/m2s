import {
  mdiCashMultiple,
  mdiCashRegister,
  mdiFileChartCheckOutline,
  mdiFileCheck,
  mdiFileCompare,
} from "@mdi/js";

export const dataSideBAr = [
  {
    name: "Tableau de bord",
    route: "/",
  },
  {
    name: "Production",
    route: "production",
  },

  {
    name: "Activités",
    route: "activites",

    children: [
      { name: "Tâches", route: "offres" },
      { name: "Activités", route: "marches" },
      { name: "Planification", route: "bordereau" },
    ],
  },
  {
    name: "Données",
    route: "donnees",

    children: [{ name: "Taxes", route: "taxes" }],
  },
  {
    name: "Gestion",
    route: "gestion",

    children: [
      { name: "Journaux", route: "journaux" },
    
    ],
  },
  {
    name: "Tiers",
    route: "tiers",

    children: [
 
      { name: "Autres", route: "/" },
     
    ],
  },
 
  
  {
    name: "Paramètres",
    route: "/configurations",

    children: [
    ],
  },
  
];

export const buttonsProduction = [
  {
    icon: mdiFileCheck,
    link: "OR's",
    route: "/production/ors",
  },
  {
    icon: mdiFileCheck,
    link: "OT's",
    route: "/production/ots",
  },
  {
    icon: mdiFileCompare,
    link: "Dévis",
    route: "/production/devis",
  },
  {
    icon: mdiCashRegister,
    link: "Factures",
    route: "/production/factures",
  },
 
];
export const buttonsTiers = [

  {
    icon: mdiCashMultiple,
    link: "Clients",
    route: "/tiers/Clients",
  },
  {
    icon: mdiCashMultiple,
    link: "Fournisseurs",
    route: "/tiers/fournisseurs",
  },
  // {
  //   icon: mdiCashMultiple,
  //   link: "Regléments",
  //   route: "/tiers/reglements",
  // },
  {
    icon: mdiCashMultiple,
    link: "Utilisateurs",
    route: "/tiers/utilisateurs",
  },
  // {
  //   icon: mdiCashClock,
  //   link: "Echéanciers",
  //   route: "/tiers/echeanciers",
  // },
  // {
  //   icon: mdiCashMinus,
  //   link: "Ecarts",
  //   route: "/tiers/ecarts",
  // },
  // {
  //   icon: mdiCashFast,
  //   link: "Relances",
  //   route: "/clients/relances",
  // },

  // {
  //   icon: mdiCashCheck,
  //   link: "Transferts",
  //   route: "/tiers/transferts",
  // },
];
export const buttonsDashBoard = [
  {
    icon: mdiFileChartCheckOutline,
    link: "Asap",
    route: "/",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Autres..",
    route: "/",
  },
  // {
  //   icon: mdiFileChartCheckOutline,
  //   link: "Evolutions",
  //   route: "/",
  // },
  // {
  //   icon: mdiFileChartCheckOutline,
  //   link: "Stock",
  //   route: "/",
  // },


];
export const buttonsActivites = [
  
  {
    icon: mdiFileChartCheckOutline,
    link: "Réceptions",
    route: "/activites/receptions",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Diagnostics",
    route: "/activites/diagnostics",
  },
  
  // {
  //   icon: mdiFileChartCheckOutline,
  //   link: "Opérations",
  //   route: "/activites/operations",
  // },
  {
    icon: mdiFileChartCheckOutline,
    link: "Réparations",
    route: "/activites/reparations",
  },

  {
    icon: mdiFileChartCheckOutline,
    link: "Entretiens",
    route: "/activites/entretiens",
  },
];
export const buttonsDonnees = [
  {
    icon: mdiFileChartCheckOutline,
    link: "Articles",
    route: "/donnees/articles",
  },
  
  {
    icon: mdiFileChartCheckOutline,
    link: "Familles",
    route: "/donnees/familles",
  },
  
  {
    icon: mdiFileChartCheckOutline,
    link: "Véhicules",
    route: "/donnees/vehicules",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "COp's",
    route: "/donnees/cops",
  },
  

];
export const buttonsGestion = [
  {
    icon: mdiFileChartCheckOutline,
    link: "Achats",
    route: "/gestion/achats",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Ventes",
    route: "/gestion/ventes",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Stocks",
    route: "/gestion/stocks",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Ateliers",
    route: "/gestion/ateliers",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Dépôt",
    route: "/gestion/depots",
  },
  

 
];
export const buttonsUtilisateurs = [
  {
    icon: mdiFileChartCheckOutline,
    link: "Employés",
    route: "/utilisateurs/employes",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Partenaires",
    route: "/utilisateurs/partenaires",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Clients",
    route:"/utilisateurs/clients",
  },


 
];
export const buttonsParametres = [
  {
    icon: mdiFileChartCheckOutline,
    link: "Sociétés",
    route: "/configurations",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Constantes",
    route: "/configurations",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Autres..?",
    route: "/configurations",
  },



 
];
