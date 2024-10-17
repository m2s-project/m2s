import { createSlice } from "@reduxjs/toolkit";
import {modules} from "../views/module/modules"

console.log(modules);

const moduleSlice = createSlice({
  name: "module",
  initialState: {
    items:[...modules],
  },
  reducers: {
    addModule: (state, action) => {
      state.items = action.payload
    }
  }
  
});

export const { addModule} = moduleSlice.actions;

export default moduleSlice.reducer;
