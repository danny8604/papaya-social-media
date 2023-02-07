import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  theme: string;
};

const initialState: ThemeState = {
  theme: "",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeToggle: (state) => {
      state.theme = state.theme === "" ? "dark" : "";
    },
  },
});

export const { themeToggle } = themeSlice.actions;

export default themeSlice.reducer;
