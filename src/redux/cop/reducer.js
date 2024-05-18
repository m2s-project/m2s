import { ADD_COP, DELETE_COP, UPDATE_COP } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  cops: [],
};

const reducer = (state = initialState.cops, action) => {
  if (localStorage.getItem("cops")) {
    state = JSON.parse(localStorage.getItem("cops"));
  }
  switch (action.type) {
    case ADD_COP:
      let cops = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("cops", JSON.stringify(cops));
      return cops;

    case DELETE_COP:
      let filterCops = state.filter(
        (cop) => action.payload.uuid !== cop.uuid
      );
      localStorage.setItem("cops", JSON.stringify(filterCops));
      return filterCops;

    case UPDATE_COP:
      let updateCops = state.map((cop) => {
        if (action.payload.uuid === cop.uuid) {
          return action.payload;
        }
        return cop;
      });
      localStorage.setItem("cops", JSON.stringify(updateCops));
      return updateCops;

    default:
      return state;
  }
};

export default reducer;
