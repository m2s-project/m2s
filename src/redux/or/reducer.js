import { ADD_OR, DELETE_OR, UPDATE_OR } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  ors: [],
};

const reducer = (state = initialState.ors, action) => {
  if (localStorage.getItem("ors")) {
    state = JSON.parse(localStorage.getItem("ors"));
  }
  switch (action.type) {
    case ADD_OR:
      let ors = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("ors", JSON.stringify(ors));
      return ors;

    case DELETE_OR:
      let filterOrs = state.filter(
        (or) => action.payload.uuid !== or.uuid
      );
      localStorage.setItem("ors", JSON.stringify(filterOrs));
      return filterOrs;

    case UPDATE_OR:
      let updateOrs = state.map((or) => {
        if (action.payload.uuid === or.uuid) {
          return action.payload;
        }
        return or;
      });
      localStorage.setItem("ors", JSON.stringify(updateOrs));
      return updateOrs;

    default:
      return state;
  }
};

export default reducer;
