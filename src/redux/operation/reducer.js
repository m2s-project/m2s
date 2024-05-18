import { ADD_OPERATION, DELETE_OPERATION, UPDATE_OPERATION } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  operations: [],
};

const reducer = (state = initialState.operations, action) => {
  if (localStorage.getItem("operations")) {
    state = JSON.parse(localStorage.getItem("operations"));
  }
  switch (action.type) {
    case ADD_OPERATION:
      let operations = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("operations", JSON.stringify(operations));
      return operations;

    case DELETE_OPERATION:
      let filterOperations = state.filter(
        (operation) => action.payload.uuid !== operation.uuid
      );
      localStorage.setItem("operations", JSON.stringify(filterOperations));
      return filterOperations;

    case UPDATE_OPERATION:
      let updateOperations = state.map((operation) => {
        if (action.payload.uuid === operation.uuid) {
          return action.payload;
        }
        return operation;
      });
      localStorage.setItem("operations", JSON.stringify(updateOperations));
      return updateOperations;

    default:
      return state;
  }
};

export default reducer;
