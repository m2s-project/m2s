import {
  mdiMonitorDashboard,
  mdiStore,
  mdiCogs,
  mdiTools,
  mdiFactory,
  mdiCheckAll,
  mdiCashRegister,
  mdiDevices,
 
} from "@mdi/js";
import { achats, compta, maintenances, reappro, ressources, stocks, tiers } from "./path";

export const modules = [
  {
    name: "Tableau de bord",
    icon: mdiMonitorDashboard,
    path: "dashboard",
    childrens: [],
  },
 achats,
 stocks,
 tiers,
 reappro,
 ressources,
 compta,
  {
    name: "Interventions",
    icon: mdiTools,
    path: "interventions",
    childrens: [],
  },
  {
    name: "Facturations",
    icon: mdiCashRegister,
    path: "facturations",
    childrens: [],
  },
  maintenances,
  {
    name: "Inspections",
    icon: mdiCheckAll,
    path: "inspections",
    childrens: [],
  },

  {
    name: "Ateliers",
    icon: mdiFactory,
    path: "maintenances",
    childrens: [],
  },

  { name: "Notifications", icon: mdiDevices, path: "notifications", childrens: [] },
  { name: "Paramètres", icon: mdiCogs, path: "settings", childrens: [] },
];
