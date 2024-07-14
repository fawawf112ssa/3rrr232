import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface INotify {
  message: string;
  type: 'error' | 'warning' | 'info' | 'success' | undefined;
}

interface InitialStateType {
  notifyMessage: INotify;
  isOpenNotify: boolean;
}

const initialState: InitialStateType = {
  notifyMessage: {
    message: '',
    type: undefined,
  },
  isOpenNotify: false,
};

export const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    closeNotify: (state) => {
      state.isOpenNotify = false;
    },
    openNotify: (state, action: PayloadAction<INotify>) => {
      state.notifyMessage = action.payload;
      state.isOpenNotify = true;
    },
  },
});

export const { closeNotify, openNotify } = notifySlice.actions;

export default notifySlice.reducer;
