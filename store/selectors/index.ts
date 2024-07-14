import { RootState } from 'store';

export const settingSelector = (state: RootState) => state.settingReducer;
export const userSelector = (state: RootState) => state.userReducer;
export const notifySelector = (state: RootState) => state.notifyReducer;
export const currencySelector = (state: RootState) => state.currencyReducer;
export const gameSelector = (state: RootState) => state.gameReducer;
