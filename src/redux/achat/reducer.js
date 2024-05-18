import { ADD_ACHAT, DELETE_ACHAT, UPDATE_ACHAT } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  achats: [],
};

const reducer = (state = initialState.achats, action) => {
  if (localStorage.getItem("achats")) {
    state = JSON.parse(localStorage.getItem("achats"));
  }
  switch (action.type) {
    case ADD_ACHAT:
      let achats = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("achats", JSON.stringify(achats));
      return achats;

    case DELETE_ACHAT:
      let filterAchats = state.filter(
        (achat) => action.payload.uuid !== achat.uuid
      );
      localStorage.setItem("achats", JSON.stringify(filterAchats));
      return filterAchats;

    case UPDATE_ACHAT:
      let updateAchat = state.map((achat) => {
        if (action.payload.uuid === achat.uuid) {
          return action.payload;
        }
        return achat;
      });
      localStorage.setItem("achats", JSON.stringify(updateAchat));
      return updateAchat;

    default:
      return state;
  }
};

export default reducer;
