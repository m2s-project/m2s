import { mdiCart } from "@mdi/js";

export const reappro = {
  name: "Réappro's",
  icon: mdiCart,
  path: "reappro",
  childrens: [
    {
      label: "Vue d'ensemble",
      path: "dasboard",
      children: [
        {
          label: "liste articles",
    
          path: "replenishment",
         
        },
        {
          label: "Demandes",
          path: "requests",
        },
        {
          label: "Propositions ",
          path: "order",
        },
        {
          label: "Commandes",
          path: "orders",
        },
        {
          label: "Historiques",
          path: "ordersHistory",
        },
      ],
    },
]
};
