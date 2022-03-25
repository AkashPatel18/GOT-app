import { createSlice, configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books";
import characterReducer from "./characters";
import housesReducer from "./houses";

export default configureStore({
  reducer: {
    books: bookReducer,
    characters: characterReducer,
    houses: housesReducer,
  },
});
