import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCharacters = createAsyncThunk(
  "characters/getcharacters",
  async () => {
    console.warn("hi");
    const { data } = await axios.get(
      "https://www.anapioficeandfire.com/api/characters?page=1&pageSize=800"
    );

    // console.warn("in", data);

    return data;
  }
);

export const characterSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    loading: false,
    error: false,
  },

  extraReducers: {
    [getCharacters.pending]: (state, action) => {
      state.loading = true;
    },
    [getCharacters.fulfilled]: (state, { payload }) => {
      console.warn(payload, "hey");
      state.characters = payload;
      state.loading = false;
    },
    [getCharacters.rejected]: (state, { payload }) => {
      state.error = true;
    },
  },
});

export default characterSlice.reducer;
