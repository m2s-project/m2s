
import { ADD_OT, DELETE_OT, UPDATE_OT  } from "./type";
// ot
export const addOt = (ot) => {

  return {
    type: ADD_OT,
    payload: ot,
  };
};

export const deleteOt = (ot) => {

  return {
    type: DELETE_OT,
    payload: ot,
  };
};

export const updateOt = (ot) => {
  return {
    type: UPDATE_OT,
    payload: ot,
  };
};
