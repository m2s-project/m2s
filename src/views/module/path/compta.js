import { mdiCashLock } from "@mdi/js";

export const compta = {
  name: "Comptabilité",
  icon: mdiCashLock,
  path: "compta",
  childrens: [
    {
      label: "Tiers",
      path: "operations",
      children: [
        {
          label: "Tranferts",

          path: "transferts",
          children: [
            {
              label: "Transactions",

              path: "transactions",
            },
          ],
        },
      ],
    },
    {
      label: "Journaux",
      path: "journaux",
      children: [
        {
          label: "Ventes",

          path: "ventes",
          children: [
            {
              label: "Factures",

              path: "factures",
            },
            {
              label: "Dévis",

              path: "devis",
            },
           
          ],
        },
        {
          label: "Achats",

          path: "achats",
          children: [
            {
              label: "Commandes",

              path: "commandes",
            },
            {
              label: "Réappro's",

              path: "reappro",
            },
         
          ],
        },
        {
          label: "Mouvements",

          path: "mouvements",
          children: [
            {
              label: "Entrée",

              path: "entree",
            },
            {
              label: "Sortie",

              path: "sortie",
            },
            {
              label: "Transfert",

              path: "transfert",
            },
         
          ],
        },
      ],
    },
    {
      label: "Immobilisations",
      path: "immobilisations",
      children: [
        {
          label: "Amortissements",

          path: "amortissements",
          children: [
            {
              label: "Résiduelle",

              path: "residuelle",
            },
            {
              label: "Inventaires",

              path: "Inventaires",
            },
           
          ],
        },
        {
          label: "Réevaluations",

          path: "reevaluations",
          children: [
            {
              label: "Plans",

              path: "plans",
            },
            {
              label: "Révision",

              path: "revision",
            },
            {
              label: "Sorties",

              path: "sorties",
            },
         
          ],
        },
        {
          label: "Optimisations",

          path: "optimisations",
          children: [
            {
              label: "Dérogations",

              path: "derogations",
            },
            {
              label: "Opérations",

              path: "operations",
            },
           
         
          ],
        },
      ],
    },

  ],
};
