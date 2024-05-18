import { ADD_STOCK, DELETE_STOCK, UPDATE_STOCK } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  stocks: [],
};

const reducer = (state = initialState.stocks, action) => {
  if (localStorage.getItem("stocks")) {
    state = JSON.parse(localStorage.getItem("stocks"));
  }
  switch (action.type) {
    case ADD_STOCK:
      let stocks = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("stocks", JSON.stringify(stocks));
      return stocks;

    case DELETE_STOCK:
      let filterStocks = state.filter(
        (stock) => action.payload.uuid !== stock.uuid
      );
      localStorage.setItem("stock", JSON.stringify(filterStocks));
      return filterStocks;

    case UPDATE_STOCK:
      let updateStocks = state.map((stock) => {
        if (action.payload.uuid === stock.uuid) {
          return action.payload;
        }
        return stock;
      });
      localStorage.setItem("stock", JSON.stringify(updateStocks));
      return updateStocks;

    default:
      return state;
  }
};

export default reducer;
