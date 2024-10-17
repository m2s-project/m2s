import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchEquipement = createAsyncThunk('equipement/fetchEquipement', async () => {
  // const response = await api.getEquipement();
  // return response.data;
});

const equipementSlice = createSlice({
  name: 'equipement',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addEquipement: (state, action) => {
      state.items.push(action.payload);
    },
    updateEquipement: (state, action) => {
      const index = state.items.findIndex(i => i.id === action.payload.id);
      state.items[index].quantity = action.payload.quantity;
    },
    deleteEquipement: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEquipement.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEquipement.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchEquipement.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addEquipement, updateEquipement, deleteEquipement } = equipementSlice.actions;
export default equipementSlice.reducer;
