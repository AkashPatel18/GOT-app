import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const gethouses = createAsyncThunk("houses/gethouses", async () => {
  const { data } = await axios.get(
    "https://www.anapioficeandfire.com/api/houses?page=1&pageSize=10"
  );

  return data;
});

export const houseslice = createSlice({
  name: "houses",
  initialState: {
    houses: [],
    loading: false,
    error: false,
  },

  extraReducers: {
    [gethouses.pending]: (state, action) => {
      state.loading = true;
    },
    [gethouses.fulfilled]: (state, { payload }) => {
      console.warn(payload, "hey");
      state.houses = payload;
      state.loading = false;
    },
    [gethouses.rejected]: (state, { payload }) => {
      state.error = true;
    },
  },
});

export default houseslice.reducer;
