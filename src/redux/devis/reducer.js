import { ADD_DEVIS, DELETE_DEVIS, UPDATE_DEVIS } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  devis: [],
};

const reducer = (state = initialState.devis, action) => {
  if (localStorage.getItem("devis")) {
    state = JSON.parse(localStorage.getItem("devis"));
  }
  switch (action.type) {
    case ADD_DEVIS:
      let devis = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("devis", JSON.stringify(devis));
      return devis;

    case DELETE_DEVIS:
      let filterDevis = state.filter(
        (devis) => action.payload.uuid !== devis.uuid
      );
      localStorage.setItem("devis", JSON.stringify(filterDevis));
      return filterDevis;

    case UPDATE_DEVIS:
      let updateDevis = state.map((devis) => {
        if (action.payload.uuid === devis.uuid) {
          return action.payload;
        }
        return devis;
      });
      localStorage.setItem("devis", JSON.stringify(updateDevis));
      return updateDevis;

    default:
      return state;
  }
};

export default reducer;
