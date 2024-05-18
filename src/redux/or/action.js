
import { ADD_OR, DELETE_OR, UPDATE_OR  } from "./type";
// or
export const addOr = (or) => {

  return {
    type: ADD_OR,
    payload: or,
  };
};

export const deleteOr = (or) => {

  return {
    type: DELETE_OR,
    payload: or,
  };
};

export const updateOr = (or) => {
  return {
    type: UPDATE_OR,
    payload: or,
  };
};
