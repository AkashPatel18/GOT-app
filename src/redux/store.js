import { createSlice, configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books";

export default configureStore({
  reducer: {
    books: bookReducer,
  },
});
