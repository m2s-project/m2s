import { mdiAccountGroup } from "@mdi/js";

export const ressources = {
  name: "RH",
  icon: mdiAccountGroup,
  path: "ressources",
  childrens: [
    {
      label: "Employés",
      path: "employes",
      children: [
        {
          label: "Autres",
          path: "autres",
        },
      ],
    },
    {
      label: "Utilisateurs",
      path: "utilisateurs",
      children: [
        {
          label: "Profiles",
          path: "profiles",
        },
       
        {
          label: "Inscription",
          path: "inscription",
        }
       
      ],
    },

    
    
    {
      label: "Logs",
      path: "logs",
   
    },
   
  ],
};
