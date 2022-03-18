import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
  },
  reducers: {},
});
