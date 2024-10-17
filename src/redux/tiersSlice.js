import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

// Thunks pour les opérations Firestore
export const upsertTiers = createAsyncThunk(
  "tiers/upsertTiers",
  async ({ id, data }) => {
    const docRef = doc(db, "tiers", id);
    await setDoc(docRef, data, { merge: true });
    console.log({ id, ...data });

    return { id, ...data };
  }
);

// Suppression d'une tiers
export const deleteTiers = createAsyncThunk(
  "tiers/deleteTiers",
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, "tiers", id));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tiersSlice = createSlice({
  name: "tiers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setTiers: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Suppression
      .addCase(deleteTiers.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTiers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (tiers) => tiers.id !== action.payload
        );
      })
      .addCase(deleteTiers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //upsertTiers
      .addCase(upsertTiers.fulfilled, (state, action) => {
        const existingTiers = state.items.find(
          (tiers) => tiers.id === action.payload.id
        );
        if (existingTiers) {
          Object.assign(existingTiers, action.payload); // Met à jour l'existant
        } else {
          state.items.push(action.payload); // Ajoute un tiers
        }
      });
  },
});

export const { setTiers } = tiersSlice.actions;
export default tiersSlice.reducer;
