import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchAchat = createAsyncThunk('achat/fetchAchat', async () => {
  // const response = await api.getAchat();
  // return response.data;
});

const achatSlice = createSlice({
  name: 'achat',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addAchat: (state, action) => {
      state.items.push(action.payload);
    },
    updateAchat: (state, action) => {
      const index = state.items.findIndex(i => i.id === action.payload.id);
      state.items[index].quantity = action.payload.quantity;
    },
    deleteAchat: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAchat.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAchat.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchAchat.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addAchat, updateAchat, deleteAchat } = achatSlice.actions;
export default achatSlice.reducer;
