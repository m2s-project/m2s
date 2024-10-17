import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../api/firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

// Thunk pour ajouter un log dans Firestore
export const addLog = createAsyncThunk(
  "logs/addLog",
  async ({ uid, actionType, message }, { rejectWithValue }) => {
    try {
      // Ajouter un nouveau log dans la collection "logs"
      const logRef = await addDoc(collection(db, "logs"), {
        uid,
        actionType,
        message,
        timestamp: Timestamp.now(),
      });
console.log('logs');

      return {
        id: logRef.id,
        uid,
        actionType,
        message,
        timestamp: Timestamp.now(),
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logSlice = createSlice({
  name: "logs",
  initialState: {
    logs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addLog.pending, (state) => {
        state.loading = true;
      })
      .addCase(addLog.fulfilled, (state, action) => {
        state.loading = false;
        state.logs.push(action.payload);  // Ajouter le log dans l'état Redux
      })
      .addCase(addLog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default logSlice.reducer;
