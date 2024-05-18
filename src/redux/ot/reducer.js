import { ADD_OT, DELETE_OT, UPDATE_OT } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  ots: [],
};

const reducer = (state = initialState.ots, action) => {
  if (localStorage.getItem("ots")) {
    state = JSON.parse(localStorage.getItem("ots"));
  }
  switch (action.type) {
    case ADD_OT:
      let ots = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("ots", JSON.stringify(ots));
      return ots;

    case DELETE_OT:
      let filterOts = state.filter(
        (ot) => action.payload.uuid !== ot.uuid
      );
      localStorage.setItem("ots", JSON.stringify(filterOts));
      return filterOts;

    case UPDATE_OT:
      let updateOts = state.map((ot) => {
        if (action.payload.uuid === ot.uuid) {
          return action.payload;
        }
        return ot;
      });
      localStorage.setItem("ots", JSON.stringify(updateOts));
      return updateOts;

    default:
      return state;
  }
};

export default reducer;
