
import { ADD_DEVIS, DELETE_DEVIS, UPDATE_DEVIS  } from "./type";
// devis
export const addDevis = (devis) => {

  return {
    type: ADD_DEVIS,
    payload: devis,
  };
};

export const deleteDevis = (devis) => {

  return {
    type: DELETE_DEVIS,
    payload: devis,
  };
};

export const updateDevis = (devis) => {
  return {
    type: UPDATE_DEVIS,
    payload: devis,
  };
};
