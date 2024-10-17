import { mdiAccountCard } from "@mdi/js";

export const tiers = {
  name: "Tiers",
  icon: mdiAccountCard,
  path: "tiers",
  childrens: [
    {
      label: "Clients",
      path: "clients",
      children: [
        {
          label: "Historique",
          path: "historique",
       
        },
      ],
    },
    {
      label: "Fournisseurs",
      path: "fournisseurs",
      children: [
        {
          label: "Historique",
          path: "historique",
        
        },
      ],
    },
   
  ],
};
