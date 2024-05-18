import { ADD_FACTURE, DELETE_FACTURE, UPDATE_FACTURE } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  factures: [],
};

const reducer = (state = initialState.factures, action) => {
  if (localStorage.getItem("factures")) {
    state = JSON.parse(localStorage.getItem("factures"));
  }
  switch (action.type) {
    case ADD_FACTURE:
      let factures = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("factures", JSON.stringify(factures));
      return factures;

    case DELETE_FACTURE:
      let filterFactures = state.filter(
        (facture) => action.payload.uuid !== facture.uuid
      );
      localStorage.setItem("factures", JSON.stringify(filterFactures));
      return filterFactures;

    case UPDATE_FACTURE:
      let updateFactures = state.map((facture) => {
        if (action.payload.uuid === facture.uuid) {
          return action.payload;
        }
        return facture;
      });
      localStorage.setItem("factures", JSON.stringify(updateFactures));
      return updateFactures;

    default:
      return state;
  }
};

export default reducer;
