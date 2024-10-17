// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../api/firebaseConfig';  // Firebase Auth import

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
  const userCredential = await auth.signInWithEmailAndPassword(email, password);
  return userCredential.user;
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await auth.signOut();
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
