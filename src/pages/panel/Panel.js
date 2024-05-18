import React from "react";
import "./panel.css";
import {
  mdiCashRegister,
  mdiMonitorDashboard,
  mdiWarehouse,
  mdiStore,
  mdiAccountDetails,
  mdiTools,
  mdiWrenchClock,
  mdiCarWrench,
  mdiCogs,
  mdiHelp,
  mdiAccountSupervisor,
} from "@mdi/js";
import Module from "./Module";

// eslint-disable-next-line no-sparse-arrays
const modules = [
  { name: "Tableau de bord", icon: mdiMonitorDashboard },
  { name: "Comptoir", icon: mdiCashRegister },
  { name: "Stock", icon: mdiWarehouse },
  { name: "Ventes", icon: mdiStore },
  { name: "Marketing", icon: mdiAccountDetails },
  { name: "RH", icon: mdiAccountSupervisor },
  { name: "Comptabilité", icon: mdiHelp },
  { name: "Maintenance", icon: mdiCarWrench },
  ,
  { name: "Paramètres", icon: mdiCogs },
];

const list = [
  "Dashbord",
  "Stock",
  "Commerce",
  "Clientèle",
  "Maintenance",
  "Entretien",
  "Réparation",
  "Paramètres",
  "Aides",
];

const Panel = () => {
  return (
    <div className="panel">
      <div className="panel-list col-12 ">
        {modules.map((item, index) => (
          <Module key={index} name={item.name} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default Panel;
