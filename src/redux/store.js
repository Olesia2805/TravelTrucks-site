import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import trucksReducer from './trucksSlice';
import filterReducer from './filterReducer';
import favoritesReducer, { favoritesMiddleware } from './favoritesSlice';

const trucksPersistConfig = {
  key: 'trucks',
  storage,
};

const rootReducer = combineReducers({
  trucks: persistReducer(trucksPersistConfig, trucksReducer),
  filters: filterReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(favoritesMiddleware),
});

export const persistor = persistStore(store);
