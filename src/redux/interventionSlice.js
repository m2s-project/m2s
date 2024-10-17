import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const createIntervention = createAsyncThunk('intervention/create', async (data) => {
  const response = await api.createIntervention(data);
  return response.data;
});

const interventionSlice = createSlice({
  name: 'intervention',
  initialState: {
    interventions: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    updateIntervention: (state, action) => {
      const index = state.interventions.findIndex(i => i.id === action.payload.id);
      state.interventions[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createIntervention.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createIntervention.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.interventions.push(action.payload);
      })
      .addCase(createIntervention.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { updateIntervention } = interventionSlice.actions;
export default interventionSlice.reducer;
