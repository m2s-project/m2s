import { ADD_VEHICULE, DELETE_VEHICULE, UPDATE_VEHICULE } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  vehicules: [],
};

const reducer = (state = initialState.vehicules, action) => {
  if (localStorage.getItem("vehicules")) {
    state = JSON.parse(localStorage.getItem("vehicules"));
  }
  switch (action.type) {
    case ADD_VEHICULE:
      let vehicules = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("vehicules", JSON.stringify(vehicules));
      return vehicules;

    case DELETE_VEHICULE:
      let filterVehicules = state.filter(
        (vehicule) => action.payload.uuid !== vehicule.uuid
      );
      localStorage.setItem("vehicules", JSON.stringify(filterVehicules));
      return filterVehicules;

    case UPDATE_VEHICULE:
      let updateVehicules = state.map((vehicule) => {
        if (action.payload.uuid === vehicule.uuid) {
          return action.payload;
        }
        return vehicule;
      });
      localStorage.setItem("vehicules", JSON.stringify(updateVehicules));
      return updateVehicules;

    default:
      return state;
  }
};

export default reducer;
