import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    topVideoOfNowPlayingList: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopVideoOfNowPlayingList: (state, action) => {
      state.topVideoOfNowPlayingList = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTopVideoOfNowPlayingList } =
  movieSlice.actions;
export default movieSlice.reducer;
