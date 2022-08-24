import { configureStore } from "@reduxjs/toolkit";
import userFormReducer from "./slices/userFormSlice";

export const store = configureStore({
  reducer: {
    userForm: userFormReducer,
  },
});
