import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

// Thunks pour les opérations Firestore
export const upsertEntrepot = createAsyncThunk(
  "entrepots/upsertEntrepot",
  async ({ id, data }) => {
    const docRef = doc(db, "entrepots", id);
    await setDoc(docRef, data, { merge: true });
    console.log({ id, ...data });

    return { id, ...data };
  }
);

// Suppression d'une entrepot
export const deleteEntrepot = createAsyncThunk(
  "entrepots/deleteEntrepot",
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, "entrepots", id));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const entrepotSlice = createSlice({
  name: "entrepots",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setEntrepots: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Suppression
      .addCase(deleteEntrepot.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteEntrepot.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (entrepot) => entrepot.id !== action.payload
        );
      })
      .addCase(deleteEntrepot.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //upsertEntrepot
      .addCase(upsertEntrepot.fulfilled, (state, action) => {
        const existingEntrepot = state.items.find(
          (entrepot) => entrepot.id === action.payload.id
        );
        if (existingEntrepot) {
          Object.assign(existingEntrepot, action.payload); // Met à jour l'existant
        } else {
          state.items.push(action.payload); // Ajoute un entrepot
        }
      });
  },
});

export const { setEntrepots } = entrepotSlice.actions;
export default entrepotSlice.reducer;
