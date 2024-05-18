import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import dossierReducer from "./dossier/reducer";
import clientReducer from "./client/reducer";
import fournisseurReducer from "./fournisseur/reducer";
import utilisateurReducer from "./utilisateur/reducer";
import atelierReducer from "./atelier/reducer";
import diagnosticReducer from "./diagnostic/reducer";
import vehiculeReducer from "./vehicule/reducer";
import venteReducer from "./vente/reducer";
import stockReducer from "./stock/reducer";
import depotReducer from "./depot/reducer";
import articleReducer from "./article/reducer";
import familleReducer from "./famille/reducer";
import achatReducer from "./achat/reducer";
import operationReducer from "./operation/reducer";
import factureReducer from "./facture/reducer";
import receptionReducer from "./reception/reducer";
import copReducer from "./cop/reducer";
import otReducer from "./ot/reducer";
import orReducer from "./or/reducer";


const rootReducer = combineReducers({
    dossiers: dossierReducer,
    clients:clientReducer, 
    fournisseurs:fournisseurReducer, 
    utilisateurs:utilisateurReducer, 
    ateliers:atelierReducer, 
    diagnostics:diagnosticReducer, 
    vehicules:vehiculeReducer, 
    ventes:venteReducer, 
    stocks:stockReducer, 
    depots:depotReducer, 
    articles:articleReducer, 
    familles:familleReducer, 
    achats:achatReducer, 
    operations:operationReducer, 
    factures:factureReducer, 
    receptions:receptionReducer, 
    cops:copReducer, 
    ots:otReducer, 
    ors:orReducer, 
  });
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  export default store;