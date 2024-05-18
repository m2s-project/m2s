
import { ADD_UTILISATEUR, DELETE_UTILISATEUR, UPDATE_UTILISATEUR  } from "./type";
// utilisateur
export const addUtilisateur = (utilisateur) => {

  return {
    type: ADD_UTILISATEUR,
    payload: utilisateur,
  };
};

export const deleteUtilisateur = (utilisateur) => {

  return {
    type: DELETE_UTILISATEUR,
    payload: utilisateur,
  };
};

export const updateUtilisateur = (utilisateur) => {
  return {
    type: UPDATE_UTILISATEUR,
    payload: utilisateur,
  };
};
