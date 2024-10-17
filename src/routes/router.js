import { createHashRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Protect from "./Protect";


import { Dashboard } from "../pages/dashboard";

import { Interventions } from "../pages/interventions";
import { Inspections } from "../pages/inspections";
import { Maintenances } from "../pages/maintenances";
import { Ressources } from "../pages/ressources";
import { Settings } from "../pages/settings";
import ReapproList from "../pages/reappro/ReapproList";
import EmployeList from "../pages/employes/EmployeList";
import EmployeForm from "../pages/employes/EmployeForm";
import UtilisateurList from "../pages/utilisateur/UtilisateurList";
import UtilisateurForm from "../pages/utilisateur/UtilisateurForm";
import TiersList from "../pages/tiers/TiersList";
import TiersForm from "../pages/tiers/TiersForm";
import ArticleForm from "../pages/articles/ArticleForm";
import ArticleList from "../pages/articles/ArticleList";
import Stocks from "../pages/stocks/Stocks";
import EquipementList from "../pages/equipements/EquipementList";
import EquipementForm from "../pages/equipements/EquipementForm";
import CommandeList from "../pages/commandes/CommandeList";
import CommandeForm from "../pages/commandes/CommandeForm";
import AchatList from "../pages/achats/achatList";
import AchatForm from "../pages/achats/achatForm";
import OrdersList from "../pages/order/orderList";
import RegisterForm from "../pages/login/RegisterForm";
import UpdateProfileForm from "../pages/login/UpdateProfileForm";
import Logs from "../pages/logs/Logs";
import AlertList from "../pages/articles/AlertList";
import EntrepotList from "../pages/entrepot/EntrepotList";
import EntrepotForm from "../pages/entrepot/EntrepotForm";


export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      // Login
      { index: true, element: <Login /> },

      // Home
      {
        path: "home",
        element: (
          <Protect>
            <Home />
          </Protect>
        ),
      },
      // Tableau de bord
      {
        path: "home/dashboard",
        element: <Dashboard />,
      },
      // Achats
      {
        path: "home/achats",
        element: <AchatList />,
      },
      {
        path: "home/achats/nouveau",
        element: <AchatForm />,
      },
      {
        path: "home/achats/*",
        element: <AchatList />,
      },
      // Commandes
      {
        path: "home/achats/commandes/liste",
        element: <OrdersList />,
      },
      {
        path: "home/achats/commandes",
        element: <CommandeList />,
      },
      {
        path: "home/achats/commandes/nouveau",
        element: <CommandeForm />,
      },
      {
        path: "home/achats/commandes/details",
        element: <CommandeForm />,
      },
      {
        path: "home/achats/commandes/edition",
        element: <CommandeForm />,
      },
      {
        path: "home/achats/commandes/suppression",
        element: <CommandeForm />,
      },
 
      // ReapproList
      {
        path: "home/reappro",
        element: <ReapproList />,
      },
      {
        path: "home/reappro/*",
        element: <ReapproList />,
      },
      // Compta
      {
        path: "home/compta/*",
        element: <TiersList />,
      },
      // Tiers
      {
        path: "home/tiers",
        element: <TiersList />,

      },
      // clients
      {
        path: "home/tiers/clients/nouveau",
        element: <TiersForm />,
      },
      {
        path: "home/tiers/clients/details",
        element: <TiersForm />,
      },
      {
        path: "home/tiers/clients/edition",
        element: <TiersForm />,
      },
      {
        path: "home/tiers/clients/suppression",
        element: <TiersForm />,
      },
      // fournisseurs
      {
        path: "home/tiers/fournisseurs/nouveau",
        element: <TiersForm />,
      },
      {
        path: "home/tiers/fournisseurs/details",
        element: <TiersForm />,
      },
      {
        path: "home/tiers/fournisseurs/edition",
        element: <TiersForm />,
      },
      {
        path: "home/tiers/fournisseurs/suppression",
        element: <TiersForm />,
      },
// tiers autres
      {
        path: "home/tiers/*",
        element: <TiersList />,
      },
      // Stocks
      {
        path: "home/stocks",
        element: <Stocks />,
      },

      {
        path: "home/stocks/*",
        element: <Stocks />,
      },
      // Articles
      {
        path: "home/stocks/articles",
        element: <ArticleList />,
      },
      {
        path: "home/stocks/articles/alertes",
        element: <AlertList />,
      },
      {
        path: "home/stocks/articles/reapprovisionnements",
        element: <ReapproList />,
      },
      {
        path: "home/stocks/articles/nouveau",
        element: <ArticleForm />,
      },
      {
        path: "home/stocks/articles/details",
        element: <ArticleForm />,
      },
      {
        path: "home/stocks/articles/edition",
        element: <ArticleForm />,
      },
      {
        path: "home/stocks/articles/suppression",
        element: <ArticleForm />,
      },
      // entrepots
      {
        path: "home/stocks/entrepots/*",
        element: <EntrepotList />,
      },
      {
        path: "home/stocks/entrepots/nouveau",
        element: <EntrepotForm />,
      },
      {
        path: "home/stocks/entrepots/details",
        element: <EntrepotForm />,
      },
      {
        path: "home/stocks/entrepots/edition",
        element: <EntrepotForm />,
      },
      {
        path: "home/stocks/entrepots/suppression",
        element: <EntrepotForm />,
      },
      // Mouvements
      {
        path: "home/stocks/mouvements",
        element: <Stocks />,
      },
      {
        path: "home/stocks/mouvements/*",
        element: <Stocks />,
      },
      // Interventions
      {
        path: "home/interventions",
        element: <Interventions />,
      },
      // Inspections
      {
        path: "home/inspections",
        element: <Inspections />,
      },
      // Maintenances
      {
        path: "home/maintenances",
        element: <Maintenances />,
      },
      {
        path: "home/maintenances/*",
        element: <Maintenances />,
      },
      {
        path: "home/maintenances/equipements",
        element: <EquipementList />,
      },
      {
        path: "home/maintenances/equipements/nouveau",
        element: <EquipementForm />,
      },
      // RH
      {
        path: "home/ressources",
        element: <Ressources />,
      },
      {
        path: "home/ressources/employes/*",
        element: <EmployeList />,
      },
      {
        path: "home/ressources/employes",
        element: <EmployeList />,
      },
      {
        path: "home/ressources/employes/nouveau",
        element: <EmployeForm />,
      },

      {
        path: "home/ressources/employes/details",
        element: <EmployeForm />,
      },
      {
        path: "home/ressources/employes/edition",
        element: <EmployeForm />,
      },
      {
        path: "home/ressources/employes/suppression",
        element: <EmployeForm />,
      },
      // utilisateurs
      {
        path: "home/ressources/utilisateurs",
        element: <UtilisateurList />,
      },
      {
        path: "home/ressources/utilisateurs/nouveau",
        element: <UtilisateurForm />,
      },
      {
        path: "home/ressources/utilisateurs/details",
        element: <UtilisateurForm />,
      },
      {
        path: "home/ressources/utilisateurs/edition",
        element: <UtilisateurForm />,
      },
      {
        path: "home/ressources/utilisateurs/suppression",
        element: <UtilisateurForm />,
      },
      {
        path: "home/ressources/utilisateurs/profiles",
        element: <UpdateProfileForm />,
      },
      {
        path: "home/ressources/utilisateurs/inscription",
        element: <RegisterForm />,
      },
      {
        path: "home/ressources/*",
        element: <Ressources />,
      },
      // Logs
      {
        path: "home/ressources/logs",
        element: <Logs />,
      },
      // Paramètres
      {
        path: "home/settings",
        element: <Settings />,
      },
    ],
  },
]);
