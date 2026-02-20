import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type themeMode = "light" | "dark";

interface IThemeState {
  mode: themeMode;
}

const initialState: IThemeState = {
  mode: (localStorage.getItem("theme") as themeMode) || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme(state, action: PayloadAction<themeMode>) {
      state.mode = action.payload;
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
