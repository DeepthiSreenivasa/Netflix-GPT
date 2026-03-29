import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    storeUser: (state, action) => {
      Object.assign(state,action.payload);
    },
    removeUser: (state,action) => {
        return {}
    }
  },
});

export const { storeUser,removeUser } = userSlice.actions;
export default userSlice.reducer;
