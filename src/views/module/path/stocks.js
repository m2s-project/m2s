import { mdiWarehouse } from "@mdi/js";

export const stocks = {
  name: "Stocks",
  icon: mdiWarehouse,
  path: "stocks",
  childrens: [
    
    {
      label: "articles",
      path: "articles",
      children: [
        {
          label: "alertes",
          path: "alertes",
        },
        {
          label: "réappro's",
          path: "reapprovisionnements",
        },
      ],
    },
    {
      label: "Entrepôts",

      path: "entrepots",
      children: [
        {
          label: "principal",
          path: "principal",
        },
      
        {
          label: "Transfert",
          path: "transfer",
        },
      ],
    },
    {
      label: "Mouvements",

      path: "movements",
      children: [
        {
          label: "Historique ",
          path: "history",
        },
        {
          label: "Entrée",
          path: "entry",
        },
        {
          label: "Sortie",
          path: "exit",
        },
        {
          label: "Interne",
          path: "internal",
        },
      ],
    },
    {
      label: "Réappro.",

      path: "replenishment",
      children: [
        {
          label: "Demandes",
          path: "requests",
        },
        {
          label: "Nouvelle",
          path: "entry",
        },
        {
          label: "Commandes",
          path: "orders",
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
