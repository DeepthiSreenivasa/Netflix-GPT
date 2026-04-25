import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: true,
    searchResults: null,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    searchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { toggleGPTSearch, searchResults } = gptSlice.actions;
export default gptSlice.reducer;
