import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

// Thunks pour les opérations Firestore
export const upsertUtilisateur = createAsyncThunk(
  "utilisateurs/upsertUtilisateur",
  async ({ id, data }) => {
    const docRef = doc(db, "utilisateurs", id);
    await setDoc(docRef, data, { merge: true });
    console.log({ id, ...data });

    return { id, ...data };
  }
);

// Suppression d'une utilisateur
export const deleteUtilisateur = createAsyncThunk(
  "utilisateurs/deleteUtilisateur",
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, "utilisateurs", id));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const utilisateurSlice = createSlice({
  name: "utilisateurs",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setUtilisateurs: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Suppression
      .addCase(deleteUtilisateur.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUtilisateur.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (utilisateur) => utilisateur.id !== action.payload
        );
      })
      .addCase(deleteUtilisateur.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //upsertUtilisateur
      .addCase(upsertUtilisateur.fulfilled, (state, action) => {
        const existingUtilisateur = state.items.find(
          (utilisateur) => utilisateur.id === action.payload.id
        );
        if (existingUtilisateur) {
          Object.assign(existingUtilisateur, action.payload); // Met à jour l'existant
        } else {
          state.items.push(action.payload); // Ajoute un utilisateur
        }
      });
  },
});

export const { setUtilisateurs } = utilisateurSlice.actions;
export default utilisateurSlice.reducer;
