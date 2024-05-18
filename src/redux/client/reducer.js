import { ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  clients: [],
};

const reducer = (state = initialState.clients, action) => {
  if (localStorage.getItem("clients")) {
    state = JSON.parse(localStorage.getItem("clients"));
  }
  switch (action.type) {
    case ADD_CLIENT:
      let clients = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("clients", JSON.stringify(clients));
      return clients;

    case DELETE_CLIENT:
      let filterClients = state.filter(
        (client) => action.payload.uuid !== client.uuid
      );
      localStorage.setItem("clients", JSON.stringify(filterClients));
      return filterClients;

    case UPDATE_CLIENT:
      let updateClient = state.map((client) => {
        if (action.payload.uuid === client.uuid) {
          return action.payload;
        }
        return client;
      });
      localStorage.setItem("clients", JSON.stringify(updateClient));
      return updateClient;

    default:
      return state;
  }
};

export default reducer;
