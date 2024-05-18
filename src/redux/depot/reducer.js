import { ADD_DEPOT, DELETE_DEPOT, UPDATE_DEPOT } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  depots: [],
};

const reducer = (state = initialState.depots, action) => {
  if (localStorage.getItem("depots")) {
    state = JSON.parse(localStorage.getItem("depots"));
  }
  switch (action.type) {
    case ADD_DEPOT:
      let depots = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("depots", JSON.stringify(depots));
      return depots;

    case DELETE_DEPOT:
      let filterDepots = state.filter(
        (depot) => action.payload.uuid !== depot.uuid
      );
      localStorage.setItem("depots", JSON.stringify(filterDepots));
      return filterDepots;

    case UPDATE_DEPOT:
      let updateDepots = state.map((depot) => {
        if (action.payload.uuid === depot.uuid) {
          return action.payload;
        }
        return depot;
      });
      localStorage.setItem("depots", JSON.stringify(updateDepots));
      return updateDepots;

    default:
      return state;
  }
};

export default reducer;
