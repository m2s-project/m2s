import { ADD_FOURNISSEUR, DELETE_FOURNISSEUR, UPDATE_FOURNISSEUR } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  fournisseurs: [],
};

const reducer = (state = initialState.fournisseurs, action) => {
  if (localStorage.getItem("fournisseurs")) {
    state = JSON.parse(localStorage.getItem("fournisseurs"));
  }
  switch (action.type) {
    case ADD_FOURNISSEUR:
      let fournisseurs = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("fournisseurs", JSON.stringify(fournisseurs));
      return fournisseurs;

    case DELETE_FOURNISSEUR:
      console.log("de");
      let filterFournisseurs = state.filter(
        (fournisseur) => action.payload.uuid !== fournisseur.uuid
      );
      localStorage.setItem("fournisseurs", JSON.stringify(filterFournisseurs));
      
      return filterFournisseurs;

    case UPDATE_FOURNISSEUR:
      let updateFournisseur = state.map((fournisseur) => {
        if (action.payload.uuid === fournisseur.uuid) {
          return action.payload;
        }
        return fournisseur;
      });
      localStorage.setItem("fournisseurs", JSON.stringify(updateFournisseur));
      return updateFournisseur;

    default:
      return state;
  }
};

export default reducer;
