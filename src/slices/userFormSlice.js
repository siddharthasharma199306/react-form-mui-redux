import { createSlice } from "@reduxjs/toolkit";
import { userFormSchema } from "../schemas/userFormSchema";

const initialState = {
  userFormData: { ...userFormSchema },
};

export const userFormSlice = createSlice({
  name: "userForm",
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.userFormData = action.payload;
    },
  },
});

export const { saveUserData } = userFormSlice.actions;

export default userFormSlice.reducer;
