import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

import articleSlice from './articleSlice';
import employeSlice from './employeSlice';
import utilisateurSlice from './utilisateurSlice';
import chartSlice from './chartSlice';
import tiersSlice from './tiersSlice';
import equipementSlice from './equipementSlice';
import commandeSlice from './commandeSlice';
import achatSlice from './achatSlice';
import orderSlice from './orderSlice';
import userSlice from './userSlice';
import logSlice from './logSlice';
import dataTableSlice from './dataTableSlice';
import entrepotSlice from './entrepotSlice';

export const store = configureStore({
  reducer: {
    auth:authSlice,
    utilisateurs:utilisateurSlice,
    charts:chartSlice,
    articles:articleSlice,
    entrepots:entrepotSlice,
    equipements:equipementSlice,
    commandes:commandeSlice,
    achats:achatSlice,
    tiers:tiersSlice,
    employes:employeSlice,

    orders:orderSlice,
    users:userSlice,
    logs:logSlice,
    dataTable: dataTableSlice
  },
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false})
});
