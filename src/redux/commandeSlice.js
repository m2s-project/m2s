import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, setDoc, doc, deleteDoc,  } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

// Thunks pour les opérations Firestore
export const upsertCommande = createAsyncThunk(
    "commandes/upsertCommande",
    async ({ id, data }) => {
      const docRef = doc(db, "commandes", id);
      await setDoc(docRef, data, { merge: true });
      console.log({ id, ...data });
      
      return { id, ...data };
    }
  );
// Ajout d'une commande
export const addCommande = createAsyncThunk(
  "commandes/addCommande",
  async (commande, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, "commandes"), commande);
      return { id: docRef.id, ...commande };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Mise à jour d'une commande
export const updateCommande = createAsyncThunk(
  "commandes/updateCommande",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      await setDoc(doc(db, "commandes", id), data);
      return { id, ...data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Suppression d'une commande
export const deleteCommande = createAsyncThunk(
  "commandes/deleteCommande",
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, "commandes", id));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const commandeSlice = createSlice({
  name: "commandes",
  initialState: {
    commandes: [],
    loading: false,
    error: null,
  },
  reducers: {
    setCommandes: (state, action) => {
      state.commandes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Ajout
      .addCase(addCommande.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCommande.fulfilled, (state, action) => {
        state.loading = false;
        state.commandes.push(action.payload);
      })
      .addCase(addCommande.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Mise à jour
      .addCase(updateCommande.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCommande.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.commandes.findIndex((commande) => commande.id === action.payload.id);
        if (index !== -1) {
          state.commandes[index] = action.payload;
        }
      })
      .addCase(updateCommande.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Suppression
      .addCase(deleteCommande.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCommande.fulfilled, (state, action) => {
        state.loading = false;
        state.commandes = state.commandes.filter((commande) => commande.id !== action.payload);
      })
      .addCase(deleteCommande.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //upsertCommande
      .addCase(upsertCommande.fulfilled, (state, action) => {
        const existingCommande = state.commandes.find((commande) => commande.id === action.payload.id);
        if (existingCommande) {
          Object.assign(existingCommande, action.payload); // Met à jour l'existant
        } else {
          state.commandes.push(action.payload); // Ajoute une nouvelle commande
        }
      })  ;
  },
});

export const { setCommandes } = commandeSlice.actions;
export default commandeSlice.reducer;
