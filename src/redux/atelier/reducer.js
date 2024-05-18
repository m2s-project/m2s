import { ADD_ATELIER, DELETE_ATELIER, UPDATE_ATELIER } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  ateliers: [],
};

const reducer = (state = initialState.ateliers, action) => {
  if (localStorage.getItem("ateliers")) {
    state = JSON.parse(localStorage.getItem("ateliers"));
  }
  switch (action.type) {
    case ADD_ATELIER:
      let ateliers = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("ateliers", JSON.stringify(ateliers));
      return ateliers;

    case DELETE_ATELIER:
      let filterAteliers = state.filter(
        (atelier) => action.payload.uuid !== atelier.uuid
      );
      localStorage.setItem("ateliers", JSON.stringify(filterAteliers));
      return filterAteliers;

    case UPDATE_ATELIER:
      let updateAtelier = state.map((atelier) => {
        if (action.payload.uuid === atelier.uuid) {
          return action.payload;
        }
        return atelier;
      });
      localStorage.setItem("ateliers", JSON.stringify(updateAtelier));
      return updateAtelier;

    default:
      return state;
  }
};

export default reducer;
