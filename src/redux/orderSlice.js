import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, setDoc, doc, deleteDoc} from "firebase/firestore";
import { db } from "../api/firebaseConfig";

// Thunks pour les opérations Firestore
export const upsertOrder = createAsyncThunk(
    "orders/upsertOrder",
    async ({ id, order }) => {
      const docRef = doc(db, "orders", id);
      await setDoc(docRef, order, { merge: true });
      console.log({ id, ...order });
      
      return { id, ...order };
    }
  );
// Ajout d'une commande
export const addOrder = createAsyncThunk(
  "orders/addOrder",
  async (order, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      return { id: docRef.id, ...order };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Mise à jour d'une commande
export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async ({ id, updatedOrder }, { rejectWithValue }) => {
    try {
      await setDoc(doc(db, "orders", id), updatedOrder);
      return { id, ...updatedOrder };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Suppression d'une commande
export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, "orders", id));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Ajout
      .addCase(addOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Mise à jour
      .addCase(updateOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.orders.findIndex((order) => order.id === action.payload.id);
        if (index !== -1) {
          state.orders[index] = action.payload;
        }
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Suppression
      .addCase(deleteOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.filter((order) => order.id !== action.payload);
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //upsertOrder
      .addCase(upsertOrder.fulfilled, (state, action) => {
        const existingOrder = state.orders.find((order) => order.id === action.payload.id);
        if (existingOrder) {
          Object.assign(existingOrder, action.payload); // Met à jour l'existant
        } else {
          state.orders.push(action.payload); // Ajoute une nouvelle commande
        }
      })  ;
  },
});

export const { setOrders } = orderSlice.actions;
export default orderSlice.reducer;
