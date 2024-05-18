
import { ADD_DIAGNOSTIC, DELETE_DIAGNOSTIC, UPDATE_DIAGNOSTIC  } from "./type";
// diagnostic
export const addDiagnostic = (diagnostic) => {

  return {
    type: ADD_DIAGNOSTIC,
    payload: diagnostic,
  };
};

export const deleteDiagnostic = (diagnostic) => {

  return {
    type: DELETE_DIAGNOSTIC,
    payload: diagnostic,
  };
};

export const updateDiagnostic = (diagnostic) => {
  return {
    type: UPDATE_DIAGNOSTIC,
    payload: diagnostic,
  };
};
