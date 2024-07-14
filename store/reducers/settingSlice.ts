import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: localStorage.getItem('i18nextLng') ?? 'ru',
  isActiveSound: true,
};

export const settingSlice = createSlice({
  name: 'languageSlice',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    changeActiveSound: (state, action: PayloadAction<boolean>) => {
      state.isActiveSound = action.payload;
    },
  },
});

export const { changeLanguage, changeActiveSound } = settingSlice.actions;

export default settingSlice.reducer;
