import { ADD_UTILISATEUR, DELETE_UTILISATEUR, UPDATE_UTILISATEUR } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  utilisateurs: [],
};

const reducer = (state = initialState.utilisateurs, action) => {
  if (localStorage.getItem("utilisateurs")) {
    state = JSON.parse(localStorage.getItem("utilisateurs"));
  }
  switch (action.type) {
    case ADD_UTILISATEUR:
      let utilisateurs = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
      return utilisateurs;

    case DELETE_UTILISATEUR:
      let filterUtilisateurs = state.filter(
        (utilisateur) => action.payload.uuid !== utilisateur.uuid
      );
      localStorage.setItem("utilisateurs", JSON.stringify(filterUtilisateurs));
      return filterUtilisateurs;

    case UPDATE_UTILISATEUR:
      let updateUtilisateur = state.map((utilisateur) => {
        if (action.payload.uuid === utilisateur.uuid) {
          return action.payload;
        }
        return utilisateur;
      });
      localStorage.setItem("utilisateurs", JSON.stringify(updateUtilisateur));
      return updateUtilisateur;

    default:
      return state;
  }
};

export default reducer;
