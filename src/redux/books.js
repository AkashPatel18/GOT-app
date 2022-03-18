import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
  },
  reducers: {
    fetchBooks: (state, action) => {
      state.books = [...state.books, ...action.payload];
      //   state.loading = false;
    },
  },
});

export const { fetchBooks } = bookSlice.actions;

export default bookSlice.reducer;
