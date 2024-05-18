
import { ADD_STOCK, DELETE_STOCK, UPDATE_STOCK  } from "./type";
// stock
export const addStock = (stock) => {

  return {
    type: ADD_STOCK,
    payload: stock,
  };
};

export const deleteStock = (stock) => {

  return {
    type: DELETE_STOCK,
    payload: stock,
  };
};

export const updateStock = (stock) => {
  return {
    type: UPDATE_STOCK,
    payload: stock,
  };
};
