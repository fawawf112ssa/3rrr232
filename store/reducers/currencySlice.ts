import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum CriptoEnum {
  BTC = 'btc',
  USDT = 'usdt',
  XMR = 'xmr',
  LTC = 'ltc',
  SPIN = 'spin',
}

interface InitialStateType {
  currency: CriptoEnum;
}

const initialState: InitialStateType = {
  currency: CriptoEnum.BTC,
};

export const currencySlice = createSlice({
  name: 'currencySlice',
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<CriptoEnum>) => {
      state.currency = action.payload;
    },
    resetCurrencyState() {
      return initialState;
    },
  },
});

export const { changeCurrency, resetCurrencyState } = currencySlice.actions;

export default currencySlice.reducer;
