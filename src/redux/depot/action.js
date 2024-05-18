
import { ADD_DEPOT, DELETE_DEPOT, UPDATE_DEPOT  } from "./type";
// depot
export const addDepot = (depot) => {

  return {
    type: ADD_DEPOT,
    payload: depot,
  };
};

export const deleteDepot = (depot) => {

  return {
    type: DELETE_DEPOT,
    payload: depot,
  };
};

export const updateDepot = (depot) => {
  return {
    type: UPDATE_DEPOT,
    payload: depot,
  };
};
