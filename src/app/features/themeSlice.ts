import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type themeMode = 'light' | 'dark';

interface IThemeState {
  mode: themeMode;
  color_themes: {
    id: string;
    primary: string;
    bg: string;
    accent: string;
    text: string;
    preview: string[];
  };
  fontFamily: {
    id: string;
    label: string;
    value: string;
  };
  fontSize: {
    id: string;
    label: string;
    value: number;
  };
}

const initialState: IThemeState = {
  mode: (localStorage.getItem('theme') as themeMode) || 'light',
  color_themes: {
    id: 'forest',
    primary: '#00b96b',
    bg: '#f0fdf4',
    accent: '#6ce7b3',
    text: '#14532d',
    preview: ['#16a34a', '#22c55e', '#bbf7d0'],
  },
  fontFamily: {
    id: 'segoe_ui',
    label: 'Segoe UI',
    value: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  fontSize: {
    id: 'md',
    label: 'Medium',
    value: 14,
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setTheme(state, action: PayloadAction<themeMode>) {
      state.mode = action.payload;
    },
    setColorTheme(state, action: PayloadAction<IThemeState['color_themes']>) {
      state.color_themes = action.payload;
    },
    setFontFamily(state, action: PayloadAction<IThemeState['fontFamily']>) {
      state.fontFamily = action.payload;
    },
    setFontSize(state, action: PayloadAction<IThemeState['fontSize']>) {
      state.fontSize = action.payload;
    },
  },
});

export const {
  setTheme,
  toggleTheme,
  setColorTheme,
  setFontFamily,
  setFontSize,
} = themeSlice.actions;
export default themeSlice.reducer;
