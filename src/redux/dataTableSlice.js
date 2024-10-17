// redux/dataTableSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

const dbs = [
    {
      "id": "1",
      "nom": "John Doe",
      "email": "john.doe@example.com",
      "date": "2024-10-10"
    },
    {
      "id": "2",
      "nom": "Jane Smith",
      "email": "jane.smith@example.com",
      "date": "2024-10-09"
    },
    {
      "id": "3",
      "nom": "John Doe",
      "email": "john.doe@example.com",
      "date": "2024-10-10"
    },
    {
      "id": "4",
      "nom": "Jane Smith",
      "email": "jane.smith@example.com",
      "date": "2024-10-09"
    },
    {
      "id": "5",
      "nom": "John Doe",
      "email": "john.doe@example.com",
      "date": "2024-10-10"
    },
    {
      "id": "6",
      "nom": "Jane Smith",
      "email": "jane.smith@example.com",
      "date": "2024-10-09"
    },
    {
      "id": "7",
      "nom": "John Doe",
      "email": "john.doe@example.com",
      "date": "2024-10-10"
    },
    {
      "id": "8",
      "nom": "Jane Smith",
      "email": "jane.smith@example.com",
      "date": "2024-10-09"
    },
    {
      "id": "9",
      "nom": "John Doe",
      "email": "john.doe@example.com",
      "date": "2024-10-10"
    },
    {
      "id": "10",
      "nom": "Jane Smith",
      "email": "jane.smith@example.com",
      "date": "2024-10-09"
    },
    {
      "id": "11",
      "nom": "Jane Smith",
      "email": "jane.smith@example.com",
      "date": "2024-10-09"
    },
  ]
// Thunk pour récupérer les données depuis Firestore
export const fetchData = createAsyncThunk(
  "dataTable/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, "dataTable")); // Remplacez "votreCollection" par le nom de votre collection Firestore
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk pour ajouter une nouvelle entrée
export const addData = createAsyncThunk(
  "dataTable/addData",
  async (newData, { rejectWithValue }) => {
    try {
      const docRef = doc(collection(db, "dataTable"));
      await setDoc(docRef, newData);
      return { id: docRef.id, ...newData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk pour mettre à jour une entrée existante
export const updateData = createAsyncThunk(
  "dataTable/updateData",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "dataTable", id);
      await setDoc(docRef, updatedData, { merge: true });
      return { id, ...updatedData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk pour supprimer une entrée
export const deleteData = createAsyncThunk(
  "dataTable/deleteData",
  async (id, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "dataTable", id);
      await deleteDoc(docRef);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// Slice Redux
const dataTableSlice = createSlice({
  name: "dataTable",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Gestion des états de récupération des données
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Gestion des états d'ajout de données
      .addCase(addData.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(addData.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Gestion des états de mise à jour des données
      .addCase(updateData.fulfilled, (state, action) => {
        const index = state.data.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updateData.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Gestion des états de suppression des données
      .addCase(deleteData.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default dataTableSlice.reducer;
