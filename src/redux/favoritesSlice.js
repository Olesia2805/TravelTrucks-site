import { createSlice } from '@reduxjs/toolkit';

const loadFavoritesFromLocalStorage = () => {
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFavoritesFromLocalStorage(),
  reducers: {
    toggleFavorite(state, action) {
      const truckId = action.payload;
      if (state.includes(truckId)) {
        return state.filter(id => id !== truckId);
      } else {
        return [...state, truckId];
      }
    },
  },
});

export const favoritesMiddleware = store => next => action => {
  const result = next(action);
  if (favoritesSlice.actions.toggleFavorite.match(action)) {
    const state = store.getState();
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }
  return result;
};

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
