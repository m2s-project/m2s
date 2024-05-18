import { ADD_VENTE, DELETE_VENTE, UPDATE_VENTE } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  ventes: [],
};

const reducer = (state = initialState.ventes, action) => {
  if (localStorage.getItem("vente")) {
    state = JSON.parse(localStorage.getItem("vente"));
  }
  switch (action.type) {
    case ADD_VENTE:
      let ventes = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("ventes", JSON.stringify(ventes));
      return ventes;

    case DELETE_VENTE:
      let filterVentes = state.filter(
        (vente) => action.payload.uuid !== vente.uuid
      );
      localStorage.setItem("vente", JSON.stringify(filterVentes));
      return filterVentes;

    case UPDATE_VENTE:
      let updateVentes = state.map((vente) => {
        if (action.payload.uuid === vente.uuid) {
          return action.payload;
        }
        return vente;
      });
      localStorage.setItem("vente", JSON.stringify(updateVentes));
      return updateVentes;

    default:
      return state;
  }
};

export default reducer;
