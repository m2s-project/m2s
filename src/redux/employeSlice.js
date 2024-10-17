import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

// Thunks pour les opérations Firestore
export const upsertEmploye = createAsyncThunk(
  "employes/upsertEmploye",
  async ({ id, data }) => {
    const docRef = doc(db, "employes", id);
    await setDoc(docRef, data, { merge: true });
    console.log({ id, ...data });

    return { id, ...data };
  }
);

// Suppression d'une employe
export const deleteEmploye = createAsyncThunk(
  "employes/deleteEmploye",
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, "employes", id));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const employeSlice = createSlice({
  name: "employes",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setEmployes: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Suppression
      .addCase(deleteEmploye.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteEmploye.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (employe) => employe.id !== action.payload
        );
      })
      .addCase(deleteEmploye.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //upsertEmploye
      .addCase(upsertEmploye.fulfilled, (state, action) => {
        const existingEmploye = state.items.find(
          (employe) => employe.id === action.payload.id
        );
        if (existingEmploye) {
          Object.assign(existingEmploye, action.payload); // Met à jour l'existant
        } else {
          state.items.push(action.payload); // Ajoute un employe
        }
      });
  },
});

export const { setEmployes } = employeSlice.actions;
export default employeSlice.reducer;
