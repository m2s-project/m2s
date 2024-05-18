
import { ADD_OPERATION, DELETE_OPERATION, UPDATE_OPERATION  } from "./type";
// operation
export const addOperation = (operation) => {

  return {
    type: ADD_OPERATION,
    payload: operation,
  };
};

export const deleteOperation = (operation) => {

  return {
    type: DELETE_OPERATION,
    payload: operation,
  };
};

export const updateOperation = (operation) => {
  return {
    type: UPDATE_OPERATION,
    payload: operation,
  };
};
