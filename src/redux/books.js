import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const { data } = await axios.get(
    "https://www.anapioficeandfire.com/api/books"
  );

  return data;
});

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
    error: false,
  },

  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state, { payload }) => {
      console.warn(payload, "hey");
      state.books = payload;
      state.loading = false;
    },
    [getBooks.rejected]: (state, { payload }) => {
      state.error = true;
    },
  },
});

export default bookSlice.reducer;
