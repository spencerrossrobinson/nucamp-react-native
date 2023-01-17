import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorites: (favorites, action) => {
      if (favorites.includes(action.paylaod)) {
        return favorites.filter((favorite) => favorite !== action.payload);
      } else {
        favorites.push(action.payload);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
