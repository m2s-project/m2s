
import { ADD_ACHAT, DELETE_ACHAT, UPDATE_ACHAT  } from "./type";
// achat
export const addAchat = (achat) => {

  return {
    type: ADD_ACHAT,
    payload: achat,
  };
};

export const deleteAchat = (achat) => {

  return {
    type: DELETE_ACHAT,
    payload: achat,
  };
};

export const updateAchat = (achat) => {
  return {
    type: UPDATE_ACHAT,
    payload: achat,
  };
};
