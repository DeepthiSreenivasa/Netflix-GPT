import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    topVideoOfNowPlayingList: null,
    popularMovies: null,
    topRateMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopVideoOfNowPlayingList: (state, action) => {
      state.topVideoOfNowPlayingList = action.payload;
    },
    addPopularMovies: (state, action) => {
      console.log("Popular Movies::", action);
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRateMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTopVideoOfNowPlayingList,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
