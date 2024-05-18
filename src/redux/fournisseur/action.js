
import { ADD_FOURNISSEUR, DELETE_FOURNISSEUR, UPDATE_FOURNISSEUR  } from "./type";
// fournisseur
export const addFournisseur = (fournisseur) => {

  return {
    type: ADD_FOURNISSEUR,
    payload: fournisseur,
  };
};

export const deleteFournisseur = (fournisseur) => {

  return {
    type: DELETE_FOURNISSEUR,
    payload: fournisseur,
  };
};

export const updateFournisseur = (fournisseur) => {
  return {
    type: UPDATE_FOURNISSEUR,
    payload: fournisseur,
  };
};
