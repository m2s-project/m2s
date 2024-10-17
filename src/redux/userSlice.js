import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../api/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { addLog } from "./logSlice";
import { useDispatch } from "react-redux";

// Thunk pour l'inscription d'un nouvel utilisateur
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ email, password, displayName }, { rejectWithValue }) => {
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Mise à jour du profil Firebase (nom affiché)
      await updateProfile(user, { displayName });

      // Sauvegarder les données utilisateur dans Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName,
        email: user.email,
      });

        // Ajouter un log après l'inscription
 
      return { uid: user.uid, displayName, email: user.email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk pour mettre à jour le profil de l'utilisateur
export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async ({ uid, displayName, email }, { rejectWithValue }) => {
    try {
      // Mise à jour du profil utilisateur dans Firebase Auth
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, { displayName });

        // Mise à jour des informations utilisateur dans Firestore
        await setDoc(doc(db, "users", uid), {
          uid,
          displayName,
          email,
        });

        return { uid, displayName, email };
      } else {
        throw new Error("Utilisateur non authentifié");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Inscription utilisateur
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Mise à jour profil utilisateur
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
