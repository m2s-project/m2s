import { ADD_RECEPTION, DELETE_RECEPTION, UPDATE_RECEPTION } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  receptions: [],
};

const reducer = (state = initialState.receptions, action) => {
  if (localStorage.getItem("receptions")) {
    state = JSON.parse(localStorage.getItem("receptions"));
  }
  switch (action.type) {
    case ADD_RECEPTION:
      let receptions = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("receptions", JSON.stringify(receptions));
      return receptions;

    case DELETE_RECEPTION:
      let filterReceptions = state.filter(
        (reception) => action.payload.uuid !== reception.uuid
      );
      localStorage.setItem("receptions", JSON.stringify(filterReceptions));
      return filterReceptions;

    case UPDATE_RECEPTION:
      let updateReceptions = state.map((reception) => {
        if (action.payload.uuid === reception.uuid) {
          return action.payload;
        }
        return reception;
      });
      localStorage.setItem("receptions", JSON.stringify(updateReceptions));
      return updateReceptions;

    default:
      return state;
  }
};

export default reducer;
