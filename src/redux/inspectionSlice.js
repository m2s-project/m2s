import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const createInspection = createAsyncThunk('inspection/create', async (data) => {
  const response = await api.createInspection(data);
  return response.data;
});

const inspectionSlice = createSlice({
  name: 'inspection',
  initialState: {
    inspections: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    updateInspection: (state, action) => {
      const index = state.inspections.findIndex(i => i.id === action.payload.id);
      state.inspections[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createInspection.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createInspection.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.inspections.push(action.payload);
      })
      .addCase(createInspection.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { updateInspection } = inspectionSlice.actions;
export default inspectionSlice.reducer;
