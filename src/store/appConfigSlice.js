import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    appLanguage: "en",
  },
  reducers: {
    setLanguage: (state, action) => {
        state.appLanguage = action.payload;
    },
  },
});

export const {setLanguage} = appConfigSlice.actions;
export default appConfigSlice.reducer;
