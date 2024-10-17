import { createSlice } from '@reduxjs/toolkit';

const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
  reducers: {
    updateChartData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { updateChartData } = chartSlice.actions;
export default chartSlice.reducer;
