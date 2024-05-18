
import { ADD_FACTURE, DELETE_FACTURE, UPDATE_FACTURE  } from "./type";
// facture
export const addFacture = (facture) => {

  return {
    type: ADD_FACTURE,
    payload: facture,
  };
};

export const deleteFacture = (facture) => {

  return {
    type: DELETE_FACTURE,
    payload: facture,
  };
};

export const updateFacture = (facture) => {
  return {
    type: UPDATE_FACTURE,
    payload: facture,
  };
};
