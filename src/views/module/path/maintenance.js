import { mdiStore,  } from "@mdi/js";

export const maintenances = {
  name: "Maintenances",
  icon: mdiStore,
  path: "maintenances",
  childrens: [
    {
      label: "Vue d'ensemble",
      path: "overview",
      children: [
      
        {
          label: "Alertes",
          path: "alerts",
        },
      ],
    },
    {
      label: "Equipements",
      path: "equipements",
      children: [
        {
          label: "Nouveau",
          path: "nouveau",
        },
     
      ],
    },
    {
      label: "Sites",

      path: "sites",
      children: [
        {
          label: "Liste",
          path: "list",
        },
        {
          label: "Ajouter",
          path: "nouveau",
        },
       
      ],
    },
    {
      label: "Interventions",

      path: "interventions",
      children: [
        {
          label: "Plannings ",
          path: "planings",
        },
        {
          label: "Historique ",
          path: "history",
        },
        
      ],
    },
    {
      label: "Inspections",

      path: "inspections",
      children: [
        {
          label: "Demandes",
          path: "requests",
        },
        {
          label: "Plannings ",
          path: "planings",
        },
        {
          label: "Historique ",
          path: "history",
        },
      ],
    },
    {
      label: "Inventaire",

      path: "inventory",
      children: [
        {
          label: "Planification",
          path: "planning",
        },
        {
          label: "Réalisation",
          path: "realization",
        },
        {
          label: "Ajustements",
          path: "adjustments",
        },
        {
          label: "Historique",
          path: "history",
        },
      ],
    },
    {
      label: "Rapports",

      path: "reports",
      children: [
        {
          label: "Mouvements",
          path: "movements",
        },
        {
          label: "Inventaires",
          path: "inventory",
        },
        {
          label: "Réappro.",
          path: "replenishment",
        },
        {
          label: "Ajustements .",
          path: "adjustments ",
        },
      ],
    },
    {
      label: "Paramètres",

      path: "settings",
      children: [
        {
          label: "Catégories ",
          path: "categories",
        },
        {
          label: "Unités ",
          path: "units",
        },
        {
          label: "Fournisseurs",
          path: "suppliers",
        },

        {
          label: "Alertes",
          path: "alerts",
        },
      ],
    },
  ],
};
