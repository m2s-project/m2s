
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const fetchMaintenances = createAsyncThunk('maintenance/fetchAll', async () => {
  const response = await api.getMaintenances();
  return response.data;
});

const maintenanceSlice = createSlice({
  name: 'maintenance',
  initialState: {
    maintenances: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addMaintenance: (state, action) => {
      state.maintenances.push(action.payload);
    },
    updateMaintenance: (state, action) => {
      const index = state.maintenances.findIndex(m => m.id === action.payload.id);
      state.maintenances[index] = action.payload;
    },
    deleteMaintenance: (state, action) => {
      state.maintenances = state.maintenances.filter(m => m.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMaintenances.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMaintenances.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.maintenances = action.payload;
      })
      .addCase(fetchMaintenances.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addMaintenance, updateMaintenance, deleteMaintenance } = maintenanceSlice.actions;
export default maintenanceSlice.reducer;
