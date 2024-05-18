
import { ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT  } from "./type";
// client
export const addClient = (client) => {

  return {
    type: ADD_CLIENT,
    payload: client,
  };
};

export const deleteClient = (client) => {

  return {
    type: DELETE_CLIENT,
    payload: client,
  };
};

export const updateClient = (client) => {
  return {
    type: UPDATE_CLIENT,
    payload: client,
  };
};
