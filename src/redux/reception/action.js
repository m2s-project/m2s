
import { ADD_RECEPTION, DELETE_RECEPTION, UPDATE_RECEPTION  } from "./type";
// reception
export const addReception = (reception) => {

  return {
    type: ADD_RECEPTION,
    payload: reception,
  };
};

export const deleteReception = (reception) => {

  return {
    type: DELETE_RECEPTION,
    payload: reception,
  };
};

export const updateReception = (reception) => {
  return {
    type: UPDATE_RECEPTION,
    payload: reception,
  };
};
