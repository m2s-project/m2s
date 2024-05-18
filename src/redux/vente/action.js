
import { ADD_VENTE, DELETE_VENTE, UPDATE_VENTE  } from "./type";
// vente
export const addVente = (vente) => {

  return {
    type: ADD_VENTE,
    payload: vente,
  };
};

export const deleteVente = (vente) => {

  return {
    type: DELETE_VENTE,
    payload: vente,
  };
};

export const updateVente = (vente) => {
  return {
    type: UPDATE_VENTE,
    payload: vente,
  };
};
