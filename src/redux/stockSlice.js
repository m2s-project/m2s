import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const fetchStock = createAsyncThunk('stock/fetchStock', async () => {
  const response = await api.getStock();
  return response.data;
});

const stockSlice = createSlice({
  name: 'stock',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addStock: (state, action) => {
      state.items.push(action.payload);
    },
    updateStock: (state, action) => {
      const index = state.items.findIndex(i => i.id === action.payload.id);
      state.items[index].quantity = action.payload.quantity;
    },
    deleteStock: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStock.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStock.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchStock.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addStock, updateStock, deleteStock } = stockSlice.actions;
export default stockSlice.reducer;
