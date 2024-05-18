import { ADD_DIAGNOSTIC, DELETE_DIAGNOSTIC, UPDATE_DIAGNOSTIC } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  Diagnostic: [],
};

const reducer = (state = initialState.Diagnostic, action) => {
  if (localStorage.getItem("Diagnostic")) {
    state = JSON.parse(localStorage.getItem("Diagnostic"));
  }
  switch (action.type) {
    case ADD_DIAGNOSTIC:
      let Diagnostic = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("Diagnostic", JSON.stringify(Diagnostic));
      return Diagnostic;

    case DELETE_DIAGNOSTIC:
      let filterDiagnostics = state.filter(
        (diagnostic) => action.payload.uuid !== diagnostic.uuid
      );
      localStorage.setItem("Diagnostic", JSON.stringify(filterDiagnostics));
      return filterDiagnostics;

    case UPDATE_DIAGNOSTIC:
      let updateDiagnostic = state.map((diagnostic) => {
        if (action.payload.uuid === diagnostic.uuid) {
          return action.payload;
        }
        return diagnostic;
      });
      localStorage.setItem("Diagnostic", JSON.stringify(updateDiagnostic));
      return updateDiagnostic;

    default:
      return state;
  }
};

export default reducer;
