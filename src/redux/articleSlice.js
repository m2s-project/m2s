import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

// Thunks pour les opérations Firestore
export const upsertArticle = createAsyncThunk(
  "articles/upsertArticle",
  async ({ id, data }) => {
    const docRef = doc(db, "articles", id);
    await setDoc(docRef, data, { merge: true });
    console.log({ id, ...data });

    return { id, ...data };
  }
);

// Suppression d'une article
export const deleteArticle = createAsyncThunk(
  "articles/deleteArticle",
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, "articles", id));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setArticles: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Suppression
      .addCase(deleteArticle.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (article) => article.id !== action.payload
        );
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //upsertArticle
      .addCase(upsertArticle.fulfilled, (state, action) => {
        const existingArticle = state.items.find(
          (article) => article.id === action.payload.id
        );
        if (existingArticle) {
          Object.assign(existingArticle, action.payload); // Met à jour l'existant
        } else {
          state.items.push(action.payload); // Ajoute un article
        }
      });
  },
});

export const { setArticles } = articleSlice.actions;
export default articleSlice.reducer;
