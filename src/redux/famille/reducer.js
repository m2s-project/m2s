import { ADD_FAMILLE, DELETE_FAMILLE, UPDATE_FAMILLE } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  familles: [],
};

const reducer = (state = initialState.familles, action) => {
  if (localStorage.getItem("familles")) {
    state = JSON.parse(localStorage.getItem("familles"));
  }
  switch (action.type) {
    case ADD_FAMILLE:
      let familles = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("familles", JSON.stringify(familles));
      return familles;

    case DELETE_FAMILLE:
      let filterFamilles = state.filter(
        (famille) => action.payload.uuid !== famille.uuid
      );
      localStorage.setItem("familles", JSON.stringify(filterFamilles));
      return filterFamilles;

    case UPDATE_FAMILLE:
      let updateFamilles = state.map((famille) => {
        if (action.payload.uuid === famille.uuid) {
          return action.payload;
        }
        return famille;
      });
      localStorage.setItem("familles", JSON.stringify(updateFamilles));
      return updateFamilles;

    default:
      return state;
  }
};

export default reducer;
