
import { ADD_FAMILLE, DELETE_FAMILLE, UPDATE_FAMILLE  } from "./type";
// famille
export const addFamille = (famille) => {

  return {
    type: ADD_FAMILLE,
    payload: famille,
  };
};

export const deleteFamille = (famille) => {

  return {
    type: DELETE_FAMILLE,
    payload: famille,
  };
};

export const updateFamille = (famille) => {
  return {
    type: UPDATE_FAMILLE,
    payload: famille,
  };
};
