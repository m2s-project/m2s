
import { ADD_ATELIER, DELETE_ATELIER, UPDATE_ATELIER  } from "./type";
// atelier
export const addAtelier = (atelier) => {

  return {
    type: ADD_ATELIER,
    payload: atelier,
  };
};

export const deleteAtelier = (atelier) => {

  return {
    type: DELETE_ATELIER,
    payload: atelier,
  };
};

export const updateAtelier = (atelier) => {
  return {
    type: UPDATE_ATELIER,
    payload: atelier,
  };
};
