
import { ADD_VEHICULE, DELETE_VEHICULE, UPDATE_VEHICULE  } from "./type";
// vehicule
export const addVehicule = (vehicule) => {

  return {
    type: ADD_VEHICULE,
    payload: vehicule,
  };
};

export const deleteVehicule = (vehicule) => {

  return {
    type: DELETE_VEHICULE,
    payload: vehicule,
  };
};

export const updateVehicule = (vehicule) => {
  return {
    type: UPDATE_VEHICULE,
    payload: vehicule,
  };
};
