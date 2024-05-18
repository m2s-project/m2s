
import { ADD_COP, DELETE_COP, UPDATE_COP  } from "./type";
// cop
export const addCop = (cop) => {

  return {
    type: ADD_COP,
    payload: cop,
  };
};

export const deleteCop = (cop) => {

  return {
    type: DELETE_COP,
    payload: cop,
  };
};

export const updateCop = (cop) => {
  return {
    type: UPDATE_COP,
    payload: cop,
  };
};
