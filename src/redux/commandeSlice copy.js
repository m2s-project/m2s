import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchCommande = createAsyncThunk('commande/fetchCommande', async () => {
  // const response = await api.getCommande();
  // return response.data;
});

const commandeSlice = createSlice({
  name: 'commande',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addCommande: (state, action) => {
      state.items.push(action.payload);
    },
    updateCommande: (state, action) => {
      const index = state.items.findIndex(i => i.uuid === action.payload.uuid);
      state.items[index] = action.payload;
    },
    deleteCommande: (state, action) => {
      state.items = state.items.filter(i => i.uuid !== action.payload.uuid);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommande.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCommande.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCommande.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addCommande, updateCommande, deleteCommande } = commandeSlice.actions;
export default commandeSlice.reducer;
